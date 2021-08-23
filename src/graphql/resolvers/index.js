const getUserFn = () => {
  return {
    userName: 'Gustavo',
    email: 'gusta@gmai.com',
    password: '123456',
  }
}

export const userResolvers = {
  Query: {
    getUser: getUserFn,
  },
  Mutation: {
  },
};

// noiscoda
// wecode
// questionsIO
