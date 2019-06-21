const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String
    }

    type User {
      id: Int
      name: String!
      lastName: String
      email: String!
    }

    type Query {
      posts: [Post]
      users: [User]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 123,
        title: 'Mi titulo',
      }],
      users: () => [
        {
          id: 123,
          lastName: 'Rivera',
          name: 'Edin',
          email: 'edin.rivera@zemoga.com',
        },
        {
          id: 456,
          name: 'Carlos Salinas',
          email: 'carlos@zemoga.com',
        },
        {
          name: 'Pedro',
          email: 'pepito@zemoga.com',
          lastName: 'Fernandez',
        },
      ],
    },
  },
});

module.exports = schema;
