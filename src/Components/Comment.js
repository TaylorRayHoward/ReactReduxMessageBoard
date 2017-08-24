import React from 'react';
const Comment = (props) => {
  return (
    <div className="mt-3">
      <div className="card card-outline-secondard">
        <div className="card-block">
          {props.body}
        </div>
      </div>
    </div>
  );
};

export default Comment;