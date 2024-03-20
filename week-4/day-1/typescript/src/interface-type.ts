type Status = "ACTIVE" | "INACTIVE";
export type User = {
  name: string;
  age: number | string;
  status: Status;
};

export interface Post {
  title: string;
  createdAt: Date;
  description: string;
  createdBy: User;
  isLike?: boolean;
}

const user: User = {
  name: "name a",
  age: 20,
  status: "ACTIVE",
};

const post: Post = {
  title: "Hello world",
  createdAt: new Date(),
  createdBy: user,
  description: "",
};

const users: User[] = [
  {
    age: 20,
    name: "name b",
    status: "ACTIVE",
  },
];
users.push(user);

users.reverse().forEach((u, index) => {
  console.log(u.name);
});
