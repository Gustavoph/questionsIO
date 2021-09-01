import express from 'express';
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { context } from './middleware';
import { PubSub } from 'graphql-subscriptions';
import { ApolloServer, gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { typeDefs, resolvers } from './domain';
import { db } from './database';


(async () => {
  const PORT = 4003;
  const pubsub = new PubSub();
  const app = express();
  const httpServer = createServer(app);

  db.on('error', () => console.error('Error while connecting db'));
  db.on('connected', () => console.log('🚀 Connect in database'));

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const corsOptions = {
    origin: "https://studio.apollographql.com",
    credentials: true
  };
  const server = new ApolloServer({
    schema,
    context: context({req, res}, pubsub)
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
