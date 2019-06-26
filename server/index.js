const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const config = require('../appConfig.js');
const schema = require('./schema');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('testing'));
    server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(config.PORT, () => {
      console.log(`app listen in port ${config.HOST}:${config.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
