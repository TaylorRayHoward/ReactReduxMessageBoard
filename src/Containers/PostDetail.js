import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import Link from 'react-router-dom/es/Link';
import { deletePost, deleteComment } from '../Actions/PostActions';
import AddComment from './AddComment';
import Comment from '../Components/Comment';
import _ from 'lodash';

class PostDetail extends Component {
  renderComments() {
    return _.map(this.props.post.comments, (comment, key) => {
      return <Comment key={key} body={comment.content} id={key} delete={comment.uid === this.props.user.uid}
                      deleteComment={() => {
                        this.props.deleteComment(this.props.match.params.id, key);
                      }}/>;
    });
  }

  componentWillMount() {
    const { post, history } = this.props;
    if (post === undefined || post === null) {
      history.replace('/');
    }
  }

  render() {
    const { post, history, match, deletePost, user } = this.props;

    if (!post)
      return null;

    return (
      <div>
        <div className="navbar">
          <Link className="btn btn-primary" to={'/'}>Go home</Link>
        </div>
        <div className="container">
          <PostCard>
            <h1>{post.title}</h1>
            <p className="card-text">
              {post.body}
            </p>
            {post.uid === user.uid &&
            <button className="btn btn-danger float-right mb-1"
                    onClick={() => {
                      deletePost(match.params.id);
                      history.push('/');
                    }}>Delete</button>}
            <AddComment id={this.props.match.params.id}/>
          </PostCard>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id], user: state.user, posts: state.posts };
}

export default connect(mapStateToProps, { deletePost, deleteComment })(PostDetail);