import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';

const Post = ({
  title,
  description,
  favorite,
  onClick,
}, index) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <Grid key={title}>
      <Card
        style={{
          maxWidth: '600px',
          margin: '20px auto',
        }}
      >
        <CardContent>
          
          <Typography variant="h3">
            {title}
            {favorite && <FavoriteIcon color="error" />}
          </Typography>
          <p>{description}</p>
          <Button variant="contained" color="primary" onClick={handleClick}>Delete</Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Post.defaultProps = {
  description: '',
  favorite: false,
};

export default Post;
