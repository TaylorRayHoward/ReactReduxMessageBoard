/**
 * Created by taylorrayhoward on 8/10/17.
 */

import React, { Component } from 'react';
import SimpleBox from '../Components/SimpleBox';
import ErrorAlert from '../Components/ErrorAlert';
import InputField from '../Components/InputFIeld';
import '../Styles/App.css';
import { connect } from 'react-redux';
import { createAccount } from '../Actions/LoginAction';
import FooterFormButtons from '../Components/FooterFormButtons';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    };
  }

  validateFields() {
    const { confirmPassword, email, password } = this.state;
    console.log(`Email ${email} Pass ${password} Confirm ${confirmPassword}`);
    if (confirmPassword === '' || email === '' || password === '') {
      this.setState({
        error: { message: 'Please enter all fields' }
      });
      return false;
    }
    if (confirmPassword !== password) {
      this.setState({
        error: { message: 'Please make sure passwords match' }
      });
      return false;
    }
    this.setState({
      error: null
    });
    return true;

  }

  renderBody() {
    const errStyle = {
      borderColor: 'red',
    };

    const { error } = this.state;

    return (
      <form onSubmit={event => {
        event.preventDefault();
        if (!this.validateFields()) {
          return;
        }
        this.props.createAccount(this.state.email, this.state.password).then(() => this.props.history.push('/')).catch(error => {
          this.setState({ error: error });
        });
      }}>
        <InputField id="input-email" style={error ? errStyle : null}
                    inputAction={event => {this.setState({ email: event.target.value });}} label="Email"
                    type="text"/>
        <InputField id="input-password" style={error ? errStyle : null}
                    inputAction={event => {
                      this.setState({
                        password: event.target.value
                      });
                    }}
                    label="Password"
                    type="password"/>
        <InputField id="input-confirm-password" style={error ? errStyle : null}
                    inputAction={event => {
                      this.setState({
                        confirmPassword: event.target.value,
                      });
                    }}
                    label="Confirm Password"
                    type="password"/>
        {error &&
        <ErrorAlert>
          <div>{this.state.error.message}</div>
        </ErrorAlert>}
        <FooterFormButtons submitLabel="Create Account" {...this.props} goToLink="/"/>
      </form>
    );
  }

  render() {
    return (
      <div>
        <SimpleBox title="Create Account" body={this.renderBody()}/>
      </div>
    );
  }
}

export default connect(null, { createAccount })(CreateAccount);
