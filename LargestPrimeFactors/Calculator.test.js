const Calculator = require('./Calculator'); 

test("return the square root of a number",()=>{
    const num = 2; 
    const squaredNumber = Calculator.getSquared(num); 
    expect(squaredNumber).toBe(4); 
});
test("the number is a decimal number",()=>{
    const num = 2;
    const isDecimal = Calculator.isDecimal(num); 
    expect(isDecimal).toBe(false);
});

test("the number is a whole number",()=>{
    const num = 2.3432; 
    const isWhole = Calculator.isWhole(num);
    expect(isWhole).toBe(false);
});

test("return the ceiling of a decimal number", ()=>{
    const num = 3.14159265;
    const roundingResult = Calculator.roundUp(num);
    expect(roundingResult).toBe(4);
});
test('return the square root of a number',()=>{
    const num = 4; 
    const squareRootResult = Calculator.squareRoot(num); 
    expect(squareRootResult).toBe(2);
});