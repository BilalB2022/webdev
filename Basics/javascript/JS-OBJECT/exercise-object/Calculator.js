function Calculator(a,b,op){
    this.num1 = a;
    this.num2 = b;
    this.add = function(){
        return this.num1 + this.num2
    };
    this.substract = function(){
        return this.num1 - this.num2
    };
    this.multiply = function(){
        return this.num1 * this.num2
    };
    this.devide = function(){
        return this.num1 / this.num2
    };

}

const sum1 = new Calculator(10,5)
console.log(sum1.multiply(),sum1.devide(),sum1.add(),sum1.substract());