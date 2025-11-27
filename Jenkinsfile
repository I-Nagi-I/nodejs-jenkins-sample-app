pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "jenkins-demo-app"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
              checkout scm
            }
        }
        
        stage('Install Dependencies') {
            step {
              sh 'npm install'
              sh 'npm build'
            }
        }
        
        stage('Run Tests') {
            sh 'npm test || true'
        }

        
        stage('Build Docker Image') {
            // TODO: Construire l'image Docker
        }
        
        stage('Deploy') {
            // TODO: Déployer le conteneur
            // Arrêter l'ancien conteneur s'il existe 
            // Démarrer le nouveau conteneur avec la nouvelle version
        }
    }
    
    post {
        // TODO: Partie bonus
    }
}
