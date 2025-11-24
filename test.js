console.log('=== Exécution des tests ===');

const test1 = 2 + 2 === 4;
console.log(test1 ? '✓ Test 1 réussi' : '✗ Test 1 échoué');

const test2 = 'hello'.toUpperCase() === 'HELLO';
console.log(test2 ? '✓ Test 2 réussi' : '✗ Test 2 échoué');

if (test1 && test2) {
  console.log('\n✓ Tous les tests sont passés');
  process.exit(0);
} else {
  console.log('\n✗ Certains tests ont échoué');
  process.exit(1);
}