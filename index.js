import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema.js';
import resolvers from './data/resolvers.js';
import { db } from './data/database.js';
db.connect();

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing')
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    'schema': schema,
    'rootValue': root,
    'graphiql': true,
}));
app.listen(8080, () => console.log('Running server on port 8080 dwrf'))