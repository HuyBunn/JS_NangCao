let x;

// Creating an object
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

// Accessing object properties
x = person.name; // Dot notation
x = person["age"]; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = "Huy B";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = 5;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${person.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  "first name": "Phạm",
  "last name": "Huy",
};

x = person2["last name"];

console.log(x);
console.log(person);
