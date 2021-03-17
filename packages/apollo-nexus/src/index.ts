import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { configureContext } from './context';
import { schema } from './schema';

const apollo = new ApolloServer({
  context: configureContext,
  schema
});

const app = express();

apollo.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:4000/graphql`);
});
