const getUserFn = (_, __, ctx) => {
  console.log(ctx);
  return {
    userName: "Gustavo",
    email: "gusta@gmai.com",
    password: "123456",
  };
};

const createUserFn = (_, __, { pubsub }) => {
  pubsub.publish("USER_CREATED", {
    userName: "Gustavo",
    email: "gusta@gmai.com",
    password: "123456",
  });
  return true;
};

export const userResolvers = {
  Query: {
    getUser: getUserFn,
  },
  Mutation: {
    createUser: createUserFn,
  },
};

// noiscoda
// wecode
// questionsIO
