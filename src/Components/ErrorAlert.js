/**
 * Created by taylorrayhoward on 8/10/17.
 */
import React from 'react';
const errorMargin = {
  marginTop: '10px'
};
const ErrorAlert = (props) => {
  return (
    <div className="alert alert-danger" role="alert" style={errorMargin}>
      {props.message}
    </div>
  );

};

export default ErrorAlert;