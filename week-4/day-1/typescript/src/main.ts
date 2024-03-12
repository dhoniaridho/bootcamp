const fullName: string = 'hello';
console.log(fullName);

let message: string = "Hello";
const age: number = 20;
message = String(111);

const cars: string[] = ["Honda"]
const arr: [string, number] = ["", 20]

const sayHello = (firstName: string, lastName?: string): string => {
    return [firstName, lastName].join(" ")
}

console.log(sayHello("First"))