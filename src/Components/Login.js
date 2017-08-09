/**
 * Created by taylorrayhoward on 8/8/17.
 */
import '../Styles/App.css';
import React, { Component } from 'react';
import { auth } from '../Firebase';
import { connect } from 'react-redux';
import { getUser } from '../Actions/LoginAction';

class Login extends Component {
  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderHtml() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              <div className="card-title text-center">
                Sign in
              </div>
              <div className="form-group row">
                <label htmlFor="input-email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" id="input-email" className="form-control" placeholder="Email..."/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="input-password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="text" id="input-password" className="form-control" placeholder="Password..."/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary"
                        onClick={() => {auth.signInWithEmailAndPassword('taylor@example.com', 'password');}}>Sign In
                </button>
                <button className="btn btn-danger"
                        onClick={() => {auth.signOut();}}>Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

  render() {
    if (this.props.user.loading) {
      return (
        <h1>We are loading</h1>
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
  return { user: state.user };
}

export default connect(mapStateToProps, { getUser })(Login);