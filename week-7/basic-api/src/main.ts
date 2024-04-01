import Fastify, { RequestGenericInterface } from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (request, reply) => {
  return {
    hello: "world",
  };
});

type User = {
  id: number;
  name: string;
  email: string;
};

let users: User[] = [
  {
    id: 1,
    name: "User a",
    email: "email@gmail.com",
  },
  {
    id: 2,
    name: "User b",
    email: "email@gmail.com",
  },
  {
    id: 3,
    name: "User c",
    email: "email@gmail.com",
  },
];

fastify.get("/users", () => {
  return users;
});

interface requestGeneric extends RequestGenericInterface {
  Params: {
    id: string;
  };
}

fastify.get<requestGeneric>("/users/:id", (request) => {
  const { id } = request.params || {};
  return users.find((user) => user.id === +id);
});

fastify.delete<requestGeneric>("/users/:id", (request) => {
  const { id } = request.params || {};
  users = users.filter((user) => {
    return user.id != +id;
  });

  return {
    message: "success",
  };
});

fastify.post("/users", (request) => {
  const user: User = {
    ...(request.body as User),
    id: users.length + 1,
  };

  users.push(user);

  return user;
});

fastify.put<requestGeneric>("/users/:id", (request) => {
  users.filter((user, index) => {
    if (user.id == +request.params.id) {
      users[index] = {
        ...(request.body as User),
        id: index + 1,
      };
    }
  });

  return {
    message: "success",
  };
});

try {
  fastify.listen({ port: 3000 });
} catch (error) {
  console.log(error);
}
