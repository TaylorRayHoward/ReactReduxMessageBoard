/**
 * Created by taylorrayhoward on 8/8/17.
 */
import '../Styles/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, login } from '../Actions/LoginAction';

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

  renderHtml() {
    const errStyle = {
      borderColor: 'red',
    };
    const errorBog = {
      marginTop: '10px'
    };
    const { login, error } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              <div className="card-title text-center">
                Sign in
              </div>
              <form onSubmit={event => {
                event.preventDefault();
                login(this.state.username, this.state.password);
              }}>
                <div className="form-group row">
                  <label htmlFor="input-email" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input onChange={event => {this.setState({ username: event.target.value });}} type="text"
                           id="input-email"
                           className="form-control" placeholder="Email..." style={error ? errStyle : null}/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="input-password" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input onChange={event => {this.setState({ password: event.target.value });}} type="password"
                           id="input-password" className="form-control" placeholder="Password..."
                           style={this.props.error ? errStyle : null}/>
                  </div>

                  {error && <div className="alert alert-danger" role="alert" style={errorBog}>
                    It seems you have entered something incorrectly, please check your email/password and try again
                  </div>}
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
        {this.renderHtml()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user, error: state.user.error };
}

export default connect(mapStateToProps, { getUser, login })(Login);