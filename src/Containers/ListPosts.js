import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/App.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard';
import { getUser, logout } from '../Actions/UserActions';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <h3 className="card-title">
            {post.title}
          </h3>
          <p className="card-text">
            {post.body}
          </p>
          {post.uid === this.props.user.uid &&
          <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>}
        </PostCard>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }

  onSubmit(values) {
    this.props.savePost(values, this.props.user.uid).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="navbar">
          <button className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign out</button>
        </div>

        <div className="container">
          <div className="main">
            {this.renderPosts()}
          </div>
          <div className="navbar fixed-bottom">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
              <Field
                name="title"
                component={this.renderField}
                label="Title"
                class="footer-title"
              />
              <Field
                name="body"
                component={this.renderField}
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
  }), { savePost, getPosts, deletePost, getUser, logout }
)(form);

export default form;
