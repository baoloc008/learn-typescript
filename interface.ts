export {};
interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

const loc: Person = {
  name: "Loc",
  age: 10,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(loc);

const helloPerson = (onePerson: Person) =>
  console.log(`Hello ${onePerson.name}`);

helloPerson(loc);
