/**
 * Created by taylorrayhoward on 8/8/17.
 */
import '../Styles/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, login } from '../Actions/LoginAction';
import SimpleBox from '../Components/SimpleBox';
import InputField from '../Components/InputFIeld';
import ErrorAlert from '../Components/ErrorAlert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user.email !== undefined) {
      this.props.history.replace('/');
    }
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red',
    };
    const { login, error } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        login(this.state.username, this.state.password);
      }}>
        <InputField id="input-email" style={error ? errStyle : null}
                    inputAction={event => {this.setState({ username: event.target.value });}} label="Email" type="text"/>
        <InputField id="input-password" style={error ? errStyle : null}
                    inputAction={event => {this.setState({ password: event.target.value });}} label="Password" type="password"/>
        {error && <ErrorAlert message="Couldn't log in, check email and password"/>}
        {this.renderFooter()}
      </form>
    );
  }

  renderFooter() {
    return (
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">Sign In</button>
        <button type="button" className="btn btn-info" onClick={() => { this.props.history.push('/CreateAccount');}}>
          Create Account
        </button>
      </div>
    );
  }

  render() {
    if (this.props.user.loading) {
      const whiteText = {
        textColor: 'white'
      };
      return (
        <h1 style={whiteText}>We are loading</h1>
      );
    }

    return (
      <div>
        <SimpleBox title="Login" body={this.renderBody()}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user, error: state.user.error };
}

export default connect(mapStateToProps, { getUser, login })(Login);