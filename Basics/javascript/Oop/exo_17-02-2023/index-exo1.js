// Exercise - OOP - Class
 
// Create Car class that takes 3 parameters: brand, model, color and returns an object with the following properties:
// brand, model, color, speed, maxSpeed, isOn, distance, speedUp, brake, turnOn, turnOff, drive
 
// Create a method speedUp that increases the speed by 5
 
// Create a method brake that decreases the speed by 5
 
// Create a method turnOn that sets the isOn property to true
 
// Create a method turnOff that sets the isOn property to false
 
// Create a method drive that increases the distance by the speed
 
// Create a method displayInfo that displays the car's brand, model, color, speed, maxSpeed, isOn, distance
 
// Create a method displayDistance that displays the car's distance
 
// Create a method displaySpeed that displays the car's speed
 
// Create a method displayMaxSpeed that displays the car's maxSpeed
 
// Create a method displayIsOn that displays the car's isOn
 
// Create a method displayBrand that displays the car's brand
 
// Create a method displayModel that displays the car's model
 
// Create a method displayColor that displays the car's color
 
// Create a new car object with the following properties: brand: 'BMW', model: 'X5', color: 'red', maxSpeed: 200
 
// Create a new car object with the following properties: brand: 'Audi', model: 'A6', color: 'black', maxSpeed: 220
 
// Create a new car object with the following properties: brand: 'Mercedes', model: 'C200', color: 'white', maxSpeed: 180
 
// Create a new car object with the following properties: brand: 'Opel', model: 'Astra', color: 'blue', maxSpeed: 160
 
// Create a new car object with the following properties: brand: 'Ford', model: 'Focus', color: 'green', maxSpeed: 180

class Car{
    // brand, model, color, speed, maxSpeed, isOn, distance, speedUp, brake, turnOn, turnOff, drive
    constructor(brand,model,color,maxSpeed){
        this.brand = brand
        this.model = model
        this.color = color
        this.speed = 0
        this.maxSpeed = maxSpeed
        this.isOn = false
        this.distance = 0
    }
    turnOn(){
        // Run de engine
        return this.isOn = true
    }

    turnOff(){
        // Turn engine off
        return this.isOn = false
    }

    speedUp(){
        if(this.isOn){
            if(this.speed < this.maxspeed){
                return this.speed+= 5
            }else{
                console.log(`Turn engine on`);
            }
        }
        
    }

    drive(){
        return this.distance+= this.speed 
    }

    brake(){
        return this.speed -= 5
    }

    displayDistance(){
        return this.distance
    }
    displaySpeed(){
        return this.speed
    }
    displayMaxSpeed(){
        return this.maxSpeed
    }

    displayIsOn(){
        return this.isOn
    }

    displayBrand(){
        return this.brand
    }
 
    displayModel(){
        return this.model
    }
    
    displayColor(){
        return this.color
    }

    displayCard(){
        const obj = {
            Brand:this.brand,
            Model:this.model,
            Color:this.color,
            EngineStatus:this.isOn,
            Speed:this.speed,
            Distance:this.distance
        }
        return obj
    }
}

let auto1 = new Car('BMW','X3','Green', 200)

console.log(auto1.displayCard());

// Create a new car object with the following properties: brand: 'BMW', model: 'X5', color: 'red', maxSpeed: 200
 
// Create a new car object with the following properties: brand: 'Audi', model: 'A6', color: 'black', maxSpeed: 220
 
// Create a new car object with the following properties: brand: 'Mercedes', model: 'C200', color: 'white', maxSpeed: 180
 
// Create a new car object with the following properties: brand: 'Opel', model: 'Astra', color: 'blue', maxSpeed: 160
 
// Create a new car object with the following properties: brand: 'Ford', model: 'Focus', color: 'green', maxSpeed: 180