const FibonacciSequence = require('./Fibonacci');
const _fibonacciSequence = new FibonacciSequence(); 
_fibonacciSequence.length = 10; 

test('Array of the first ten terms of the fibonacci sequence', ()=>{
    expect(_fibonacciSequence.sequence).toEqual([1,2,3,5,8,13,21,34,55,89]); 
});

test('Return array of even numbers in a fibonacci sequence', ()=>{
    expect(_fibonacciSequence.evenNumbers).toEqual([2,8,34]); 
});
test('Return sum of even numbers in a fibonacci sequence', ()=>{
    expect(_fibonacciSequence.sumOfEvenNumbers).toEqual(44); 
}); 

test('Return at least twenty digits in a fibonacci sequence where to length is set to -1 (all)', ()=>{
    _fibonacciSequence.length = -1; 
    expect(_fibonacciSequence.sequence.length).toBeGreaterThan(20);
}); 