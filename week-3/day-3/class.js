class Animal {
    name = "";
    #color = "Orange";

    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`hewan ${this.name} bicara`)
    }
    getColor() {
        return `Warnanya adalah ${this.#color}`
    }

}

class Cat extends Animal {
    #type = "Persian";
    constructor(name) {
        super(name)
    }

}

class Dog extends Animal {

}

const cat = new Cat("Oren")
const dog = new Dog("Anjing")
dog.speak()
console.log(cat.name)
console.log(cat.speak())

console.log(cat.getColor())