export {};
// any types
let age: any = 25;
age = "Loc";
age = {
  a: "b",
};
age = [1, 3];

let mixed: any[] = [];
mixed.push(5);
mixed.push(false);

let person: {
  name: any;
  age: any;
};

person = {
  name: 25,
  age: "Loc",
};
