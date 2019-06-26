import { useState, useCallback } from 'react';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValues = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  return [values, removeValues];
};

export default useDeleteArray;
