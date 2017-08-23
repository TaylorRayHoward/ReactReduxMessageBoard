import React from 'react';

const ErrorAlert = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
};

export default ErrorAlert;