/**
 * Created by taylorrayhoward on 8/8/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/PostActions';

class PostCard extends Component {
  render() {
    return (
      <div className="card post">
        <div className="card-block">
          <h3 className="card-title">{this.props.title}</h3>
          <p className="card-text">{this.props.body}</p>
          <button className="btn btn-danger float-right" onClick={() => { this.props.deletePost(this.props.id)}}>Delete</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { deletePost })(PostCard)
