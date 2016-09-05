import React, { PropTypes } from 'react';

const AddFeed = ({ onAddFeed }) => {
  let feedUrlInput;
  
  const onClickHandler = () => {
    onAddFeed(feedUrlInput.value);
  };

  return (
    <div>
      <input ref={ref => feedUrlInput = ref} type="text" placeholder="rss feed url" />
      <button onClick={onClickHandler}>Add Feed</button>
    </div>
  );
};

AddFeed.propTypes = {
  onAddFeed: PropTypes.func.isRequired
};

export default AddFeed;
