import React from 'react';
import { gql } from 'apollo-boost';
import Button from '@material-ui/core/Button';
import client from '../apollo/client';

const habdleClick = () => {
  console.log('hola click');
};

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
      <Button variant="contained" color="primary" onClick={habdleClick}>
        Hola click
      </Button>
    </div>
  );
};

export default Home;
