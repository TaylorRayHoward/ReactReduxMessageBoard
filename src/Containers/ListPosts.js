import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/App.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard';
import { renderInputField } from '../Components/FormComponents';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key} id={key} title={post.title} body={post.body}/>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
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
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
    posts: state.posts
  }), { savePost, getPosts, deletePost }
)(form);

export default form;
