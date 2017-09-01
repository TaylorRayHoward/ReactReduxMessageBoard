import React, { Component } from 'react';
import SimpleBox from '../Components/SimpleBox';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import { login, getUser, googleLogin, twitterLogin } from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import SocialMediaLogin from '../Components/SocialMediaLogin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push('/');
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push('/');
    }
  }


  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };

    return (
      <form onSubmit={event => { this.submitLogin(event);}}>
        <div>
          <InputField id="email" type="text" label="Email"
                      inputAction={(event) => this.setState({ email: event.target.value })}
                      style={this.state.error ? errStyle : null}
          />
          <InputField id="password" type="password" label="Password"
                      inputAction={(event) => this.setState({ password: event.target.value })}
                      style={this.state.error ? errStyle : null}
          />
          {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
          <FooterFormButton submitLabel="Sign in" otherLabel="Create Account"
                            goToLink="/CreateAccount" {...this.props}
          />
          <SocialMediaLogin {...this.props} />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <SimpleBox title="Sign in" body={this.renderBody()}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser, googleLogin, twitterLogin })(Login);
