import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../Actions/UserActions';
import { getPosts } from '../Actions/PostActions';
import Loading from '../Components/Loading';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, postsLoading } = this.props;
    if(userLoading === undefined) {
      this.props.getUser();
    }

    if(postsLoading === undefined) {
      this.props.getPosts();
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.postsLoading === -1 && nextProps.user !== null) {
      this.props.getPosts();
    }
  }

  render() {
    const { userLoading, postsLoading, children } = this.props;
    if((!userLoading && !postsLoading) || (this.props.user === null)) {
      return (
        <div>
          {children}
        </div>
      )
    }
    else {
      return (
        <Loading />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    postsLoading: state.loading.posts,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getPosts })(LoadingComponent))
