type StringOrNumber = string | number;
type Student = {
  name: string;
  id: StringOrNumber;
};

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id: ${id}`);
};

studentDetails(123, "Loc");
studentDetails("456", "Bao Loc");

const greet = (user: Student) => {
  console.log(`${user.name} with id ${user.id} says hello`);
};

greet({
  name: "Loc",
  id: 2,
});
