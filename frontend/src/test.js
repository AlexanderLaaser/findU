//Variablen
var firstname = "Danny";
console.log(firstname);
var direction;
direction = "UP";
console.log(direction);
//Object
//Definiton
var person;
//Deklaration
person = {
    name: "Alex",
    isProgrammer: true,
};
//Ausgabe
console.log(person.isProgrammer);
//Array - random order
var thisarray = [];
thisarray.push("Alex");
thisarray.push(13);
var newarray = thisarray;
console.log("newarray is:", newarray);
//tuple - fixed order
var thistuple;
thistuple = ["Alex", 11];
console.log(thistuple);
//functions
function firstfunction(alter) {
    return alter + 1;
}
console.log(firstfunction(2));
