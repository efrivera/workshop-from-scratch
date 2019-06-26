import React from 'react';
import { gql } from 'apollo-boost';
import client from '../apollo/client';
import Posts from '../components/Posts';

const Home = () => {
  client
    .query({
      query: gql`
        {
          users {
            id
            name
            lastName
            email
          }
        }
      `,
    })
    .then(result => console.log(result));

  return (
    <div>
      <h1>Welcome Edin!</h1>
      <Posts />
    </div>
  );
};

export default Home;
