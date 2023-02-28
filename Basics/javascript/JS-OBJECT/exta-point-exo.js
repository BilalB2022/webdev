// ATM machine program to withdraw money from the account and display the balance with authentication

// Create a constructor function ATM with the following properties: BankCard<number>, pin<number>, accounts<array>
// The accounts array should contain objects with the following properties: name<string>, balance<number>, cardNumber<number>, pin<number>
// The constructor function should initialize the BankCard and pin properties with the values passed as arguments
// The constructor function should initialize the accounts property with the following array of objects:

/*
        { name: "John", balance: 1000, cardNumber: 123456789, pin: 1234 },
        { name: "Mary", balance: 2000, cardNumber: 987654321, pin: 4321 },
        { name: "Peter", balance: 3000, cardNumber: 135792468, pin: 2468 },
        { name: "Jane", balance: 4000, cardNumber: 864197532, pin: 7531 },
        { name: "Mark", balance: 5000, cardNumber: 159357864, pin: 8642 }
*/


// Create a method withdraw in the ATM prototype with the following properties: amount<number>

/*
The method should find the account object in the accounts array that has the same cardNumber and pin as the ATM object

If the account is found, the method should check if the balance is greater than or equal to the amount passed as argument

If the balance is greater than or equal to the amount, the method should subtract the amount from the balance and return the following string: "Done! Do not forget your card. Your balance is <balance>"

If the balance is less than the amount, the method should return the following string: "Insufficient balance"

If the account is not found, the method should return the following string: "Invalid card number or pin"
*/

// let account = [ 
//         { name: "John", balance: 1000, cardNumber: 123456789, pin: 1234 },
//         { name: "Mary", balance: 2000, cardNumber: 987654321, pin: 4321 },
//         { name: "Peter", balance: 3000, cardNumber: 135792468, pin: 2468 },
//         { name: "Jane", balance: 4000, cardNumber: 864197532, pin: 7531 },
//         { name: "Mark", balance: 5000, cardNumber: 159357864, pin: 8642 }
//     ]

// function ATM (BankCard,pin){
//     this.bankardNum = BankCard;
//     this.pinNum = pin;
//     this.account = account
    
// }
// ATM.prototype.withdraw = function(amount){
//     for(let i = 0 ; i < this.account.length; i++){
//         if(this.bankardNum === this.account[i].cardNumber && this.pinNum === this.account[i].pin ){
//             if(this.account[i].balance >= amount){
//                 this.account[i].balance -= amount
//                 return console.log(`Done! Do not forget your card. Your balance is ${this.account[i].balance}`)
//             }else{
//                 console.log("Insufficient balance");
//             }
//         }
//     }
// }
// let atm = new ATM(123456789, 1234);
// console.log(atm.withdraw(500));


// -------------------------------------------------------------------------------------------------------------------------------------------------------
function ATM(bankcard, pin) {
    this.bankcard = bankcard;
    this.pin = pin;
    this.accounts = [
        { name: "John", balance: 1000, cardNumber: 123456789, pin: 1234 },
        { name: "Mary", balance: 2000, cardNumber: 987654321, pin: 4321 },
        { name: "Peter", balance: 3000, cardNumber: 135792468, pin: 2468 },
        { name: "Jane", balance: 4000, cardNumber: 864197532, pin: 7531 },
        { name: "Mark", balance: 5000, cardNumber: 159357864, pin: 8642 }
    ]
}

ATM.prototype.withdraw = function (amount) {
    let account = this.accounts.find(acc => acc.cardNumber === this.bankcard) // find account
    // find returns single object only
    console.log(account)

    // when account(cardnumber) exist is
    if (account !== undefined) {
        // pin validation here
        if (account.pin === this.pin) {
            console.log('pin is correct')
            if (account.balance >= amount) {
                // account.balance = account.balance - amount
                account.balance -= amount
                // +=
                return 'Done, Do not forget take your card back!\nNew balance is ' + account.balance
            }else{
                return 'Insufficient funds'
            }
        } else {
            console.log('invalid pin')
        }
        // end of pin validation
    } else {
        console.log('You are not customer in our bank or invalid card number')
    }

    //return account
}



