import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../Actions/UserActions';
import { getPosts } from '../Actions/PostActions';
import Loading from '../Components/Loading';
import { withRouter } from 'react-router-dom';

class LoadingComponent extends Component {
  componentWillMount() {
    const { loading } = this.props;
    if (loading.user === undefined && loading.posts === undefined) {
      this.props.getUser();
      this.props.getPosts();
    }
  }

  render() {
    const { user, posts } = this.props.loading;
    if ((!user && !posts) || (this.props.user === null))
      return (
        <div>
          {this.props.children}
        </div>
      );
    else
      return <Loading />;
  }
}

function mapStateToProps(state) {
  return { loading: state.loading, user: state.user };
}

export default withRouter(connect(mapStateToProps, { getUser, getPosts })(LoadingComponent));