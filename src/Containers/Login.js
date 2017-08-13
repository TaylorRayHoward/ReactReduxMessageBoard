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
import FooterFormButtons from '../Components/FooterFormButtons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.replace('/');
    }
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red',
    };
    const { login } = this.props;
    const { error } = this.state;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        login(this.state.username, this.state.password).catch(error => {
          this.setState({
            error: error
          })
        });
      }}>
        <InputField id="input-email" style={error ? errStyle : null}
                    inputAction={event => {this.setState({ username: event.target.value });}} label="Email"
                    type="text"/>
        <InputField id="input-password" style={error ? errStyle : null}
                    inputAction={event => {this.setState({ password: event.target.value });}} label="Password"
                    type="password"/>
        {error &&
        <ErrorAlert>
          <div>Couldn't log in, check email and password</div>
        </ErrorAlert>}
        <FooterFormButtons submitLabel="Sign in" otherLabel="Create Account" goToLink="/CreateAccount" {...this.props}/>
      </form>
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