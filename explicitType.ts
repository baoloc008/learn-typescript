let studentName: string = "Nam";
let studentAge: number;
let isAuthenticated: boolean;

// studentName = 30; // error
studentName = "Loc";

// studentAge = "Loc"; // error
studentAge = 20;

// isAuthenticated = 4; // error
isAuthenticated = false;

// arrays
let students: string[] = ["Nam", "Hung"];
// students.push(5); // error
students.push("Lan");

// union
let mixed: (string | number | boolean)[];
mixed = ["Loc", 5, true];
mixed.push(6);
mixed.push("Lan");
mixed.push(false);

let id: string | number;
id = "abc";
id = 123;

let hobby: "book" | "music"; // union literal type

hobby = "book";
// hobby = "cooking"; // error

// object
let p: object;
p = {
  name: "Loc",
  age: 10,
};
p = []; // ok

let student: {
  name: string;
  age: number;
  isGood: boolean;
};

student = {
  name: "Loc",
  age: 20,
  isGood: false,
};
