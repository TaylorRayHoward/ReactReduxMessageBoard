/**
 * Created by taylorrayhoward on 8/20/17.
 */
import React from 'react';
import '../Styles/App.css'

const Loading = () => {
  return (
    <div className="align-self-center">
      <i className="fa fa-refresh fa-spin fa-3x fa-fw loading"/>
      <span className="sr-only">Loading...</span>
    </div>
  )
};

export default Loading;
