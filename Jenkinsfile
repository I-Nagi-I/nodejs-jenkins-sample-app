pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "jenkins-demo-app"
        DOCKER_TAG = "${BUILD_NUMBER}"
        SONARQUBE_SERVER = "sonarqube-local"
    }
    
    stages {
        stage('Checkout') {
            steps {
              checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
              sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps{
                sh 'npm test || true'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_SERVER}") {
                    sh "${tool 'sonar-scanner'}/bin/sonar-scanner"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }
        
        stage('Deploy') {
            steps {
                sh """
                    docker rm -f ${DOCKER_IMAGE} || true      # Si un conteneur existe déjà, on le supprime
                    docker run -d --name ${DOCKER_IMAGE} -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}
                """
            }
        }
    }
}
