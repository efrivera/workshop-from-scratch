import { useState, useCallback, useEffect } from 'react';

const useDeleteArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removeValues = useCallback((index) => {
    const newValues = [
      ...values,
    ];

    newValues.splice(index, 1);

    setValues(newValues);
  }, [values]);

  useEffect(() => {
    setValues(initialValue);
  }, [initialValue]);

  return [values, removeValues];
};

export default useDeleteArray;
