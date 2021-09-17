import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const resolvers = {
  Query,
  Mutation,
};

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    db,
    pubsub,
  },
});

/// add option to fetch per user

server.start(() =>
  console.log(
    "GraphQL server is active and ready to recieve your quires and muation at http://localhost:4000"
  )
);
