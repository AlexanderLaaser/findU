//Variablen
let firstname = "Danny";
console.log(firstname);

let direction: "UP" | "DOWN";
direction = "UP";
console.log(direction);

//Object
//Definiton
let person: {
    name: string;
    isProgrammer: boolean;
};
//Deklaration
person = {
    name: "Alex",
    isProgrammer: true,
}
//Ausgabe
console.log(person.isProgrammer);

//Array - random order
let thisarray: (string | number)[] = [];
thisarray.push("Alex");
thisarray.push(13);
let newarray = thisarray;
console.log("newarray is:", newarray);

//tuple - fixed order
let thistuple: [string, number];
thistuple = ["Alex",11];
console.log(thistuple);

//functions
function firstfunction(alter: number): string {
    return "Alter: " + (alter + 1);
}
console.log("Firstfunction:" + firstfunction(2));
//ES6 Arrow
const secondfunction = (alter: number): string => 
"Alter" + (alter + 1);
console.log("Secondfunction:" + secondfunction(2));
//using void without implentation
let thirdfuncton: (alter: number) => void;
thirdfuncton = (alter: number) =>
console.log("thirdfuncton:" + alter);
thirdfuncton(13)

//interfaces - used to describe objects
interface Person {
    alter: number;
    isProgrammer: boolean;
}
//ausimplementierung
let personObject: Person = {
    alter: 23,
    isProgrammer: true,
}

personObject.alter = 22;
console.log("personobject1:" + personObject);

interface PersonChange {
    functionPersion(name: string): string;
}