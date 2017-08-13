import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/App.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard';
import { renderInputField } from '../Components/FormComponents';
import { getUser } from '../Actions/LoginAction';
import { auth } from '../Firebase';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
    if(!this.props.user.loading && this.props.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.loading && nextProps.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key} id={key} title={post.title} body={post.body}>
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.body}</p>
          <button className="btn btn-danger float-right" onClick={() => { this.props.deletePost(key)}}>Delete</button>
        </PostCard>
      );
    });
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    if (this.props.user.loading) {
      return (
        <h1>Loading</h1>
      );
    }
    return (
      <div>
        <div className="navbar">
          <button className="btn btn-danger"
                  onClick={() => {auth.signOut();}}>Sign Out
          </button>
        </div>
        <div className="container">
          <div className="main">
            {this.renderPosts()}
          </div>
          <div className="navbar fixed-bottom">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
              <Field
                name="title"
                component={renderInputField}
                label="Title"
                class="footer-title"
              />
              <Field
                name="body"
                component={renderInputField}
                label="Body"
                class="footer-body"
              />
              <button type="submit" className="btn footer-button">Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect((state, ownProps) => ({
    posts: state.posts,
    user: state.user
  }), { savePost, getPosts, getUser, deletePost }
)(form);

export default form;
