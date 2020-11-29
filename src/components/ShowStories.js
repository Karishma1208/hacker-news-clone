import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';

const ShowStories = ({ type }) => {
  const { isLoading, errorMsg, stories } = useDataFetcher(type ? type : 'top');

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {errorMsg ? (
          <p className="errorMsg">{errorMsg}</p>
        ) : (
          stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;
