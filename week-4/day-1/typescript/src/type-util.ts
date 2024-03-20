import { User } from "./interface-type";

const user: User = {
  age: 20,
  name: "",
  status: "ACTIVE",
};

const userReadonly: Readonly<User> = {
  age: 20,
  name: "",
  status: "ACTIVE",
};

type UserOptional = Partial<User>;

function updateUser(user: Required<UserOptional>, update: Partial<User>) {
  return {};
}

updateUser(user, {
  name: "",
});

user.name = "Hello";
// @ts-expect-error
userReadonly.name = "Hello";

type CatInfo = {
  age: number;
  breed: string;
};

type CatName = "miffy" | "boris" | "mordred";

const cat: Record<CatName, CatInfo> = {
  boris: {
    age: 5,
    breed: "persian",
  },
  mordred: {
    age: 5,
    breed: "persian",
  },
  miffy: {
    age: 5,
    breed: "persian",
  },
  // @ts-expect-error
  a: {},
};
