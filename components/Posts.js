import React from 'react';
import Post from './Post';
import useQuery from './hooks/useQuery';
import useDeleteArray from './hooks/useDeleteArray';
import postsQuery from './graphql/postsQuery';
import Loading from './loading';

const Posts = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(postsQuery);
  const [posts, removePost] = useDeleteArray(data.posts);

  if (error) {
    return null;
  }

  return (
    loading
      ? <Loading />
      : posts
        .map(props => ({
          ...props,
          onClick: removePost,
        }))
        .map(Post)
  );
};

export default Posts;
