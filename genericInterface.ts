// GENERICS INTERFACE
interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

type NumberResource = Resource<number[]>;

const number1: NumberResource = {
  uid: 2,
  name: "Numbers",
  data: [1, 2],
};

const r1: Resource<string> = {
  uid: 1,
  name: "Person",
  data: "hello",
};

const r2: Resource<object> = {
  uid: 1,
  name: "Movie",
  data: {
    name: "Avenger",
  },
};

const r3: Resource<string[]> = {
  uid: 1,
  name: "Developer",
  data: ["CSS", "HTML"],
};
