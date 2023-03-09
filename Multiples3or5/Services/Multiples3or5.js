class Multiples3or5 {
    static isMultipleOf5(number){
        return number % 5 == 0;
    }
    static isMultipleOf3(number){
        return number % 3 == 0;
    }
    static isMultipleOf3Or5(number){
        return this.isMultipleOf5(number) || this.isMultipleOf3(number); 
    }
    static multiplesByRange(start, end){
        let multiples = []; 
        for(let i = start; i <= end-1 ; i++){
            if(this.isMultipleOf3Or5(i)){
                multiples.push(i); 
            }
        }    
        return multiples; 
    }   
}
module.exports = Multiples3or5;
