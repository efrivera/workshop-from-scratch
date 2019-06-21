import React from 'react';
import Button from '@material-ui/core/Button';

const habdleClick = () => {
  console.log('hola click');
};

const Account = () => {
  return (
    <div>
      <h1>Account!</h1>
      <Button variant="contained" color="primary" onClick={habdleClick}>
        Hola click
      </Button>
    </div>
  );
};

export default Account;
