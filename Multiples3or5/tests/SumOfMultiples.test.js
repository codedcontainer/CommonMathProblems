const sumOfMultiples = require('../Services/SumOfMultiples'); 
const Multiples3or5 = require('../Services/Multiples3or5');

test('The sum array of multiples',()=>{
    const multiplesArray = Multiples3or5.multiplesByRange(1,10); 
    expect(sumOfMultiples(multiplesArray)).toBe(23); 
});