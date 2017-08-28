import React from 'react';
import PostCard from './PostCard';

const Comment = (props) => {
  return (
    <div className="mt-3">
      <PostCard>
        {props.children}
      </PostCard>
    </div>
  );
};

export default Comment;