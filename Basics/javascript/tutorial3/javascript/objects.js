// const car = {
//     color: 'black',
//     model: 'bmw 2012',
//     energy: 'benzine',
// }

// car.energy = "LPG"
// car.customers = ['a','b','c' ,'d']

// console.table(car);

// car.showInfo = function(){
//     console.log('hello world', this.color);
// }
// console.log(car.showInfo());
// car.showInfo()


const info = {
    gender: 'female',
    name: 'Billy',
    age: "17",
    tel: '048779626' ,
    media : ["facebook", "twitter" , "github"],
    show :function() {
        console.log(`Name: ${this.name}\nage: ${this.age}`);
    }
}

info.show()
// console.table(info);