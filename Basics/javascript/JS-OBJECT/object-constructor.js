function Student(username,password,email){
    this.user = username,  // handle useername value at global scope
    this.password = password,
    this.email = email
} // JS object constructor

const user1 = new Student('root','root123','root@root.com')
console.log(user1);

const obj1 = {
    msg:'sad',
    print:function(){
        return this.msg
    }
}

function Application(device_id, serialnumber) {
    this.deviceId = device_id;
    this.serial_number = serialnumber

    this.display = function(){
        console.log(`Device ID: ${this.deviceId}`)
    }

    this.calc = function(a,b){
        return a+b
    }

    this.printMyName=function(name){
        return name
    }

}

Application.prototype.myMethodName=function(){
    console.log('this is object oriented model')
}


// let device1 = new Application(001,'BE34343434')

// console.log(device1)
// device1.display()
// console.log(device1.calc(5,4))
// console.log(device1.printMyName('coffee'))

// device1.myMethodName()
