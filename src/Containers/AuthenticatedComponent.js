/**
 * Created by taylorrayhoward on 8/19/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../Actions/UserActions';
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  componentDidUpdate() {
    const { user, loading } = this.props;
    if (loading.user === false && !user) {
      this.props.history.replace('/Login');
    }
  }

  render() {
    const { user, children, loading } = this.props;
    console.log(this.props);
    return (loading.user === false && user) ? children : <div>Null</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user, loading: state.loading };
}

export default connect(mapStateToProps, { getUser })(withRouter(AuthenticatedComponent));
