import { useState, useEffect } from 'react';
import { getStories } from '../utils/apis';

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setStories(stories);
        setErrorMsg('');
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, errorMsg, stories };
};

export default useDataFetcher;
