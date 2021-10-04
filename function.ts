const square = (side: number) => side * side;

console.log(square(3));

let greet: Function;
greet = () => console.log("Hello");

greet();

const add = (a: number, b: number, c?: number | string) => {
  // union type
  console.log(a + b);
  console.log(c);
};

add(5, 6, "abc");
add(1, 2);

const addDefault = (a: number, b: number = 10) => a + b;
console.log(addDefault(2));

const minus = (a: number, b: number) => a - b;
