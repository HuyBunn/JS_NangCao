// Value is stored in the stack
const ten = "Huy";
const age = 20;

// Reference is stored in the heap
const person = {
  name: "Brad",
  age: 40,
};

let newName = ten;
newName = "Búnn";

let newPerson = person;
newPerson.name = "Bradley";

console.log(ten, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
