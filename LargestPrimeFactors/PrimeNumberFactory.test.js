let PrimeNumberFactory = require('./PrimeNumberFactory')
PrimeNumberFactory = new PrimeNumberFactory(); 
const Calculator = require('./Calculator');

test('array of boolean values with a length of target +1', () =>{
    PrimeNumberFactory.target = 10; 
    expect(PrimeNumberFactory.isPrimeNumberList.length).toEqual(PrimeNumberFactory.target+1);
});
test('array of boolean values where first value is false', ()=>{ 
    expect(PrimeNumberFactory.isPrimeNumberList[0]).toEqual(false); 
});

test('given number is prime', ()=>{
    const num = 449; 
    expect(PrimeNumberFactory.isPrime(num)).toEqual(true); 
});
test('given number is not prime', ()=>{
    const num = 93; 
    expect(PrimeNumberFactory.isPrime(num)).toEqual(false);
});

test('set target to 1000, if the target number is reset', ()=>{
    PrimeNumberFactory.resetTarget();
    expect(PrimeNumberFactory.target).toEqual(1000); 
}); 

test('given a target of 10, expect a list of specific prime numbers', ()=>{
    PrimeNumberFactory.target = 10;
    expect(PrimeNumberFactory.primeNumbers).toEqual([2,3,5,7]);
});
test('given a target of 100, expect a list of specific prime numbers',()=>{
    PrimeNumberFactory.target = 100; 
    expect(PrimeNumberFactory.primeNumbers).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
});
test('return the prime factors of 13195', ()=>{
    PrimeNumberFactory.target = 13195;
    expect(PrimeNumberFactory.primeFactors()).toEqual([5,7,13,29]); 
}); 

test('return the largets prime factor of 13195', ()=>{
    expect(PrimeNumberFactory.largestPrimeFactor).toEqual(29); 
});

test('get the square root of the target number',()=>{
    PrimeNumberFactory.target = 4;
   expect(Calculator.squareRoot(PrimeNumberFactory.target) ).toBe(2);
});
test('round up if the square root of the target number is a decimal',()=>{
    PrimeNumberFactory.target = 10; 
    let squareRootTarget = Calculator.squareRoot(PrimeNumberFactory.target);
    squareRootTarget = Calculator.roundUp(squareRootTarget); 
    expect(squareRootTarget).toBe(4);
});