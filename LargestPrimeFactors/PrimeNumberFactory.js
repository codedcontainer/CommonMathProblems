const Calculator = require('./Calculator'); 

class PrimeNumberFactory{
    target = 1000;

    /**
     * @param {number} target
     */
    set target(target){
        this.target = target;
    }
    resetTarget(){
        this.target = 1000; 
    }
    get isPrimeNumberList(){
        let booleans = []; 
        for(let i = 1; i<=this.target+1; i++){
            booleans.push(true); 
        }
        booleans[0] = false;
        return booleans;
    }
    isPrime(number){
        if(number <= 1) return false;
        if(number == 2) return true;
        if (number % 2 == 0) return false;

        const boundary = Math.floor(Math.sqrt(number));
        for(let i = 3; i <= boundary; i+=2){
            if(number % i == 0) 
                return false;
        }
        return true; 
    }
    get primeNumbers(){
        let primeNumbers = []; 
        let _isPrimeNumberList = this.isPrimeNumberList; 
        const targetSquareRoot = Calculator.squareRoot(this.target); 

        for(let a = 1; a<=this.target-1; a++){
            if(_isPrimeNumberList[a]){
                if(!this.isPrime(a)){
                    _isPrimeNumberList[a] = false;
                }
                else{
                    primeNumbers.push(a); 
                    for(let b = 1; b <= targetSquareRoot; b++ ){
                        _isPrimeNumberList[Math.pow(a,b)] = false;
                    }
                }
            }
        }
        return primeNumbers; 
    }  
    primeFactors(){ 
        let primeFactors = []; 
        let dividend = this.target; 
        
        for(let divisor = 2; divisor <= this.target -1; divisor++){
            let dividedResult = dividend / divisor; 

            if(dividend/divisor == 1){
                primeFactors.push(divisor); 
                break;
            }
            if(divisor > 2 && divisor % 2 == 0){
               continue; 
            }
            if(dividend % divisor == 0 ){
                primeFactors.push(divisor);
                dividend = dividedResult; 
            }
        }
        return primeFactors; 
    }
    /**
     *
     * @description Returns the largest prime factorial number in array
     * @readonly
     * @memberof PrimeNumberFactory
     */
    get largestPrimeFactor(){
        const primeFactors = this.primeFactors(); 
        return primeFactors[primeFactors.length-1]; 
    }
}
module.exports = PrimeNumberFactory; 