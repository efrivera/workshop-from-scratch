import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

const cardStyles = {
  maxWidth: 350,
  marginTop: 20,
  marginBottom: 20,
  padding: 20,
};

const projectList = {
  display: 'flex',
  alignItems: 'flexStart',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const projectListItem = {
  marginTop: 20,
  border: 2,
  borderStyle: 'solid',
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

/* eslint-disable react/prop-types */
const User = ({
  name,
  email,
  projects,
}) => {
  // const classes = useStyles();

  return (
    <Card raised style={cardStyles}>
      <Typography variant="h1">
        {name}
      </Typography>
      <Typography>
        <a href="">{email}</a>
      </Typography>
      <Typography variant="h4">
        Projects
      </Typography>
      <ul style={projectList}>
        {projects.map(({
          name: projectName,
        }) => (
          <li style={projectListItem}>
            {projectName}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default User;
