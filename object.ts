let person = {
  name: "Loc",
  age: 10,
  isStudent: true,
};

// person.name = 5; // error
person.name = "Bao Loc";

// person.age = "abc"; // error
person.age = 15;

// person.hobbie = "read"; // error

person = {
  name: "Loc",
  age: 12,
  isStudent: true,
  // skills: ["js"], // error
};
