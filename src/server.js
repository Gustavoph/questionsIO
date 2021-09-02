import express from 'express';
import { db } from './database';
import { createServer } from 'http';
import { context } from './middleware';
import { execute, subscribe } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { typeDefs, resolvers } from './domain';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { SubscriptionServer } from 'subscriptions-transport-ws';

(async () => {
  const PORT = 4003;
  const app = express();
  const httpServer = createServer(app);
  export const pubsub = new PubSub();

  db.on('error', () => console.error('Error while connecting db'));
  db.on('connected', () => console.log('🚀 Connect in database'));

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const corsOptions = {
    origin: ['https://studio.apollographql.com', 'localhost:8080'],
    credentials: true,
  };
  const server = new ApolloServer({
    schema,
    context,
  });
  await server.start();
  server.applyMiddleware({ app, cors: corsOptions });

  SubscriptionServer.create(
    { schema, execute, subscribe, onConnect: () => pubsub },
    { server: httpServer, path: server.graphqlPath },
  );

  httpServer.listen(PORT, () => {
    console.log(`🚀 Query at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(
      `🚀 Subscription at ws://localhost:${PORT}${server.graphqlPath}`,
    );
  });
})();
