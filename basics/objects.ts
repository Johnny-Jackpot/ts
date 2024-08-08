//Run: npx ts-node basics

type TypeUser = {
  name: string;
  age: number;
  address: string;
};

let user: TypeUser = {
  name: "John Rambo",
  age: 25,
  address: "LA",
};

type TypeAddress = {
  city: string;
  country: string;
};

type TypeCrmUser = {
  name: string;
  age: number;
};

const crmUser: TypeCrmUser = {
  name: "Max Payne",
  age: 41,
};

const address: TypeAddress = {
  city: "LA",
  country: "USA",
};

let common: TypeCrmUser & TypeAddress;

common = {
  ...user,
  ...address,
};
