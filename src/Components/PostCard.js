/**
 * Created by taylorrayhoward on 8/8/17.
 */
import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
    return (
      <div className="card post">
        <div className="card-block">
          {this.props.children}
        </div>
      </div>
    )
  }
}

