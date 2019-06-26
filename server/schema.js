const { makeExecutableSchema } = require('graphql-tools');

const POSTS = [
  {
    title: 'My post 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique ante a nibh tristique fermentum. Vivamus id mollis leo, ut ultricies odio. Nulla facilisi. Nulla est enim, egestas et gravida a, malesuada quis massa. Cras venenatis ligula leo, a feugiat nisi porttitor at. Maecenas congue quam orci, ac volutpat lectus faucibus at. Maecenas porta quam et sapien tristique, vel laoreet dolor ornare. Maecenas convallis luctus efficitur. Nam consequat velit id est gravida elementum. Praesent iaculis tempor mauris. Cras sit amet imperdiet felis. Integer sed pharetra est. Quisque consectetur dolor id purus vehicula, ut pulvinar odio iaculis.',
    favorite: false,
  },
  {
    title: 'My post 2',
    description: 'Maecenas interdum suscipit libero sed ultrices. Nulla facilisi. Nulla tincidunt, sapien nec iaculis pulvinar, mauris mi dapibus neque, eget consectetur augue urna in eros. Aliquam consectetur vitae leo et mattis. Nullam convallis laoreet mauris quis consequat. Aenean bibendum, nisl id convallis volutpat, tortor est commodo turpis, sagittis malesuada velit nulla ac neque. Cras nec pulvinar sapien, sit amet ultricies arcu. Vestibulum non commodo urna. Fusce dui ante, bibendum sit amet efficitur sed, volutpat id nisi. In risus nisl, egestas in tempor dictum, condimentum id ipsum. Vivamus dignissim magna a lorem lobortis, non sollicitudin sem finibus. Ut eu augue condimentum, elementum metus eu, finibus orci. Pellentesque blandit efficitur odio non accumsan.',
    favorite: true,
  },
  {
    title: 'My post 3',
    description: 'Curabitur gravida gravida lorem, nec malesuada est blandit at. Ut ut ante enim. In sed scelerisque turpis. Phasellus lacus ligula, malesuada sit amet tincidunt quis, tincidunt vitae lorem. Etiam ut viverra mi, eget malesuada quam. Etiam feugiat orci felis, pretium venenatis leo mattis et. Cras fringilla egestas elit, ac pharetra velit. Maecenas quis odio sed orci dapibus mattis. Aenean volutpat efficitur velit non varius. Nunc id libero ultrices, malesuada lacus et, placerat lacus. Aliquam feugiat at nisl et feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque scelerisque dolor fermentum mauris laoreet maximus. Nullam vulputate blandit leo in pretium.',
    favorite: false,
  },
  {
    title: 'My post 4',
    description: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec pellentesque orci a dolor tincidunt tincidunt. Donec vel sodales tellus, id fermentum odio. Donec rhoncus diam felis, et tristique orci viverra vel. Aliquam sem lectus, suscipit quis erat id, efficitur vestibulum lorem. Praesent sit amet ornare erat. Sed vel nisl faucibus, suscipit erat ac, scelerisque massa.',
    favorite: false,
  },
  {
    title: 'My post 5',
    description: 'Proin mattis lacus tellus, ut faucibus dui congue vitae. Curabitur venenatis sagittis metus at blandit. In et leo faucibus, bibendum nulla sit amet, volutpat risus. Curabitur fringilla risus sapien, ac luctus leo semper vitae. Vivamus sit amet ligula id metus tempus varius ac tincidunt nisi. Morbi lacus lectus, congue id massa sit amet, ullamcorper hendrerit justo. Quisque dui felis, vehicula quis pretium eu, scelerisque nec lorem. Phasellus eget quam vitae risus aliquam dictum eu ac massa. Integer ut nisl ornare, vulputate sapien semper, elementum orci. Sed eleifend vulputate ex, ac scelerisque erat lobortis nec. Pellentesque elementum venenatis feugiat. Pellentesque sodales id mi ut faucibus. Praesent dictum vulputate enim placerat vestibulum.',
    favorite: false,
  },
  {
    title: 'My post 6',
    description: 'Phasellus sollicitudin sit amet sem et lobortis. In a faucibus justo, a volutpat nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc et sem ac urna lacinia vulputate. Vivamus eget orci odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras consequat mauris nec quam bibendum, sed tincidunt urna vulputate. Nam bibendum gravida tempus. Maecenas aliquam quam ac sem volutpat porta. Maecenas ornare lacinia felis at vulputate. Donec at ligula nunc. Sed sit amet cursus est, at venenatis enim. Phasellus mollis laoreet suscipit.',
    favorite: false,
  },
];

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      title: String,
      description: String,
      favorite: Boolean,
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
      posts: () => POSTS,
      users: () => [
        {
          id: 123,
          lastName: 'Rivera',
          name: 'Edin',
          email: 'edin.rivera@zemoga.com',
        },
        {
          id: 456,
          name: 'Carlos',
          email: 'carlos@zemoga.com',
          lastName: 'Salinas',
        },
        {
          id: 789,
          name: 'Pedro',
          email: 'pepito@zemoga.com',
          lastName: 'Fernandez',
        },
      ],
    },
  },
});

module.exports = schema;
