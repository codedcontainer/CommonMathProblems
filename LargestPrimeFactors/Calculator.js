class Calculator{
    static getSquared(number){
        return Math.pow(number,2);
    }
    static isDecimal(number){
       return number % 1 != 0; 
    }
    static isWhole(number){
        return number % 1 == 0;
    }
    static roundUp(number){
        return Math.ceil(number);
    }
    static squareRoot(number){
        return Math.sqrt(number);
    }
}
module.exports = Calculator;