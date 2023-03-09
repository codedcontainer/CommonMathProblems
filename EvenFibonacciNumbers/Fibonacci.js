class FibonacciSequence
{
    constructor(){
        this.sequence = this.create();
    }
    /**
     * @param {number} length
     */
    set length(length){
        const noLength = -1;
        if(length == noLength) {
            this.sequence = this.create(); 
        }
        else{
            this.sequence = this.subsetByLength(length);
        }
    }
    get evenNumbers(){
        return this.sequence.filter(value => value % 2 == 0);
    }
    get sum(){
        return this.sequence.reduce((previousValue, currentVal) =>
        {
            return previousValue + currentVal;
        }, 0);
    }
    get sumOfEvenNumbers(){
        return this.evenNumbers.reduce((previousValue, currentVal) =>
        {
            return previousValue + currentVal;
        }, 0);
    }
    /**
     *
     * @readonly
     * @memberof FibonacciSequence
     * @description returns a subset of a sequence 1 to N number of elements
     */
    subsetByLength(length){
        return this.sequence.slice(0,length); 
    }   

    /**
     * @memberof FibonacciSequence
     * @description Returns a Fibonacci sequence where any digit in the sequence is not greater than four million.
     */
    create(array = [], index = 0){
        const digitPeak = 4000000; 
        let currentArray = array;
        if(index == 0){
            currentArray.push(1); 
            return this.create(currentArray, index+1); 
        }
        else if(index == 1){
            currentArray.push(2); 
            return this.create(currentArray, index + 1); 
        }
        else{
            const nextNumber = currentArray[index - 2] + currentArray[index -1]; 
            if(nextNumber <= digitPeak){
                currentArray.push(nextNumber); 
                return this.create(currentArray, index+ 1); 
            }  
            else{
                return currentArray;
            }
        } 
    }
    
}
module.exports = FibonacciSequence;
