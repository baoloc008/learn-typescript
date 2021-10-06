// GENERICS EXTENDS
// const makeFullName = (obj) => ({
//   ...obj,
//   fullName: `${obj.firstName} ${obj.lastName}`,
// });

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({
  firstName: "Bao Loc",
  lastName: "Dinh",
});

console.log("n1:", n1);

// const n2 = makeFullNameConstraint({
//   firstName: "Bao Loc",
//   lastName: "Dinh",
//   age: 10,
// });
const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});
const n3 = makeFullNameConstraintWithGenerics({
  firstName: "Bao Loc",
  lastName: "Dinh",
  age: 10,
});
console.log("n3:", n3);

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const e1 = addNewEmployee({ name: "Loc", age: 10 });
console.log("e1", e1);
// console.log(e1.name); // error

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};
const e2 = addNewEmployeeT({ name: "Loc", age: 15, male: true });
console.log("e2", e2);
console.log("e2.name:", e2.name);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const e3 = addNewEmployeeTWithConstraint({ name: "Loc", age: 30 });
// const e4 = addNewEmployeeTWithConstraint({ age: 30 }); // error
