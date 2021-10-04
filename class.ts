export {};
class Employee {
  /* public name: string;
  private age: number;
  readonly male: boolean;

  constructor(n: string, a: number, m: boolean) {
    this.name = n;
    this.age = a;
    this.male = m;
  }
 */
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
  }
}

const loc = new Employee("Loc", 20, true);
console.log(loc.name);
// console.log(loc.age); // error
console.log(loc.male);

loc.name = "Bao Loc";
// loc.name = false; // error

console.log(loc.print());
