import React from 'react';
import _ from 'lodash';
import Comment from './Comment';

const Comments = (props) => {
  if (!props.comments) {
    return null;
  }
  return _.forEach(props.comments, (comment, key) => {
    return (
    <div>
      <h1>Hi</h1>
    </div>
    )
  });
  // return _.map(props.comments, (comment, key) => {
  //   return (
  //     <div>
  //       <Comment key={key} body={comment.content}/>
  //     </div>);
  // });
};

export default Comments;