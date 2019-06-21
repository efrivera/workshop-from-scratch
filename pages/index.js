import React from 'react';
import Button from '@material-ui/core/Button';

const habdleClick = () => {
  console.log('hola click');
};

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Button variant="contained" color="primary" onClick={habdleClick}>
        Hola click
      </Button>
    </div>
  );
};

export default Home;
