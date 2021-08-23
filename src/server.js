import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';


import express from 'express';
const app = express();

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app, path: '/' })

  await new Promise(resolve => app.listen({ port: 4001 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);