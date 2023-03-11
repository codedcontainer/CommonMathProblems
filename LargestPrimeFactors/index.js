let PrimeNumberFactory = require('./PrimeNumberFactory'); 
PrimeNumberFactory = new PrimeNumberFactory();
PrimeNumberFactory.target = 600851475143;
console.log(PrimeNumberFactory.largestPrimeFactor);