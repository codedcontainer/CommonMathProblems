const Multiples3or5 = require('./Services/Multiples3or5'); 
const sumOfMultiples =require('./Services/SumOfMultiples'); 

const multiples3or5 = Multiples3or5.multiplesByRange(1,1000); 
console.log(sumOfMultiples(multiples3or5)); 