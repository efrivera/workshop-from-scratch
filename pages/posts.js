import React from 'react';
import Button from '@material-ui/core/Button';

const habdleClick = () => {
  console.log('hola click');
};

const Posts = () => {
  return (
    <div>
      <h1>Posts!</h1>
      <Button variant="contained" color="primary" onClick={habdleClick}>
        Hola click
      </Button>
    </div>
  );
};

export default Posts;
