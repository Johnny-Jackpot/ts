interface IIdentity {
  id: number;
  name: string;
}

interface IBusinessPartner {
  name: string;
  credit: number;
}

interface IContact {
  email: string;
  phone: string;
}

type TypeEmployee = IIdentity & IContact;
type TypeCustomer = IIdentity & IBusinessPartner;

interface IEmployee extends IIdentity, IContact {}

interface ICustomer extends IIdentity, IBusinessPartner {}

let e: TypeEmployee = {
  email: "",
  id: 0,
  name: "",
  phone: "",
};

let e1: IEmployee = {
  email: "",
  id: 0,
  name: "",
  phone: "",
};

let c: TypeCustomer = {
  credit: 0,
  id: 0,
  name: "",
};

let c1: ICustomer = { credit: 0, id: 0, name: "" };
