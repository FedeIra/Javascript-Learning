// Repeat:

const numberOfTimes = 3;

console.log('hola!'.repeat(numberOfTimes));

// other examples of repeat:

console.log('hola!'.repeat(3)); // hola!hola!hola!

console.log('hola!'.repeat(0)); // ''

console.log('hola!'.repeat(3.5)); // hola!hola!hola!

console.log('hola!'.repeat(NaN)); // ''

console.log('hola!'.repeat('3')); // hola!hola!hola!

console.log('hola!'.repeat('hola!')); // ''

console.log('hola!'.repeat({})); // ''

console.log('hola!'.repeat([])); // ''

console.log('hola!'.repeat([3])); // hola!hola!hola!
