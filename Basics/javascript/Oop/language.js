// Human Communication -English
// Machine communication -Python


class Language{
    // parent-father class template 
    constructor(name){
        this.name = name
    }

    display(){
        console.log(`Language is ${this.name}`);
    }
}

class HumanLanguage extends Language{
    // Child class template 
    constructor(name,europian){
        super(name),
        this.europian = europian
    }

    display(){
        console.log(`Language is ${this.name} en is ${this.europian}`);
    }
}

class MachineLanguage extends Language{
    // Child class template 
    constructor(name,roadmap){
        super(name),
        this.roadmap = roadmap
    }

    display(){
        console.log(`Language is ${this.name} - Roadmap is ${this.roadmap}`);
    }
}

let javascript = new MachineLanguage('javascript','front-End')
javascript.display()

let english = new HumanLanguage('english','europian')

english.display()

let python = new MachineLanguage('python','Back-End')

python.display()

let chinese = new HumanLanguage('Chinese','non-Europian')

chinese.display()