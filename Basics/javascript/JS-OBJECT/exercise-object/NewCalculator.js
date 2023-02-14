function Calculator2(num1, num2, op) {
    this.number1 = num1;
    this.number2 = num2;
    this.operator = op;
    this.GetResult = function () {
        switch (op) {
            case '+':
                return this.number1 + this.number2;
                
            case '-':
                return this.number1 - this.number2
            
            case '*':
                return this.number1 * this.number2
            
            case '/':
                return this.number1 / this.number2
            
            case '**':
                return this.number1 ** this.number2
            
            case '%':
                return this.number1 % this.number2

            default: return `Walo frere arette tes chimts`;
        }
    }
}

let sum1 = new Calculator2(8,2,'/')
console.log(sum1.GetResult());