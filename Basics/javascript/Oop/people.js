class Person{
    constructor(fullname){
        this.fullname = fullname
    }
    display(){
        console.log(`Name: ${this.fullname}`);
    }
}

// Begin of Student class
class Student extends{
    constructor(classname){
        super()
        this.classname = classname
    }
}

// End of Student class
class Teacher{
    constructor(language){
        this.language = language
    }
}

let student1 = new Student()