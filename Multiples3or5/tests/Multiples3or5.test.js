const Multiples3or5 = require('../Services/Multiples3or5');

test('number is a multiple of 5', ()=>{
    expect(Multiples3or5.isMultipleOf5(5)).toBe(true); 
});

test('number is a multiple of 3', ()=>{
    expect(Multiples3or5.isMultipleOf3(3)).toBe(true); 
}); 

test('number is a multple of either 3 or 5', ()=>{
    expect(Multiples3or5.isMultipleOf3Or5(6)).toBe(true); 
}); 

test('return array of numbers that are mutliple of either 3 or five', ()=>{
    expect(Multiples3or5.multiplesByRange(1,10)).toEqual([3,5,6,9]); 
}); 