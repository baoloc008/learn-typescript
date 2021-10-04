let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);

greet("Loc", "hello");

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) =>
  action === "add" ? numOne + numTwo : numOne - numTwo;

console.log(calculate(4, 2, "add"));
console.log(calculate(4, 2, "minus"));

type Student = {
  name: string;
  age: number;
};

let printStudent: (myStudent: Student) => void;

printStudent = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

printStudent({
  name: "Loc",
  age: 30,
});

const loc = {
  name: "Bao Loc",
  age: 10,
};
printStudent(loc);
