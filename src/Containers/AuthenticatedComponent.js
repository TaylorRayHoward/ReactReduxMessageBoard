import { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../Actions/UserActions';
import { withRouter } from 'react-router-dom';

class AuthenticatedComponent extends Component {
  componentDidUpdate() {
    console.log('auth');
    const { user, loading } = this.props;
    if (loading.user === false && !user) {
      this.props.history.replace('/Login');
    }
  }

  render() {
    const { user, children, loading } = this.props;
    return (loading.user === false && user) ? children : null;
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user, loading: state.loading };
}

export default withRouter(connect(mapStateToProps, { getUser })(AuthenticatedComponent));
