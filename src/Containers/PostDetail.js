import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/es/Link';
import PostCard from '../Components/PostCard';
import SubmitComment from './SubmitComment';
import _ from 'lodash';
import Comment from '../Components/Comment';

class PostDetail extends Component {
  renderComments() {
    const { post } = this.props;
    return _.map(post.comments, (comment, key) => {
      return (
        <Comment key={key} id={key}>
          {comment.content}
        </Comment>
      );
    });
  }

  render() {
    const { post, match } = this.props;
    return (
      <div>
        <div className="navbar">
          <Link to={'/'} className="btn btn-primary">
            Go home
          </Link>
        </div>
        <div className="container">
          <PostCard>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <SubmitComment id={match.params.id}/>
          </PostCard>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id], uid: state.user.uid };
}

export default connect(mapStateToProps)(PostDetail);