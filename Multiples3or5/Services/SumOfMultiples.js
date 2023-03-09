function sumOfMultiples(multiples) {
        return multiples.reduce((total, current)=>{
            return total + current;
        }, 0);
    }
    
module.exports = sumOfMultiples; 