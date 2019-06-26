import { useState } from 'react';
import client from '../../apollo/client';

const useQuery = (gqlQuery, opts = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  client
    .query({
      query: gqlQuery,
      ...opts,
    })
    .then((result) => {
      if (result.errors && result.errors.length) {
        setError(true);
      }

      setData(result.data);
      // console.log('result:', result.data.posts);
      // setData(result.data.posts);
      // setLoading(false);
      // console.log('data:', data);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });

  return {
    data,
    loading,
    error,
  }
};

export default useQuery;
