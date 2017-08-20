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
    const { user } = this.props;
    if (!user.loading && user.uid === undefined) {
      this.props.history.replace('/Login');
    }
  }

  render() {
    return (this.props.user.loading === false && this.props.user.uid !== undefined) ? this.props.children : <div>Null</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

export default connect(mapStateToProps, { getUser })(withRouter(AuthenticatedComponent));
