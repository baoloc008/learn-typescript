type strArr = Array<string>;

type numArray = Array<number>;

const lastItem = (arr: Array<number>) => arr[arr.length - 1];

const l1 = lastItem([1, 2, 3]);

console.log("l1: ", l1);

// const l2 = lastItem(["a", "b"]); // error

const lastItemT = <T>(arr: Array<T>) => arr[arr.length - 1];

const l3 = lastItemT([1, 2, 3]);
const l4 = lastItemT(["a", "b"]);
const l5 = lastItemT<string>(["d", "e"]);

const makeArray = (x: number) => [x];

const m1 = makeArray(5);
console.log("m1:", m1);
// const m2 = makeArray("a"); // error

const makeArrayT = <T>(x: T) => [x];
const m3 = makeArrayT("a");
console.log("m3:", m3);

const makeArrayXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrayXY(5, 6);
const m5 = makeArrayXY("a", "b");
const m6 = makeArrayXY("a", 3);
console.log("m6:", m6);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("x", 5);
const m8 = makeTuple("x", "b");
const m9 = makeTuple<string, number>("g", 23);
const m10 = makeTuple<string | null, number>(null, 23);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>("a", 1);
