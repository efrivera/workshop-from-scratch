import React from 'react';
import useQuery from './hooks/useQuery';
import usersQuery from './graphql/usersQuery';
import User from './User';
import Loading from './loading';

const UsersList = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(usersQuery);

  if (error) {
    return null;
  }
  const { users } = data;

  return (
    loading
      ? <Loading />
      : users.map(User)
  );
};

export default UsersList;
