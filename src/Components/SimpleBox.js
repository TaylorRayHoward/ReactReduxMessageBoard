import React, { Component } from 'react';
export default class SimpleBox extends Component {

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              {this.props.children}
              <div className="card-title text-center">
                {this.props.title}
              </div>
              <div className="card-body">
                {this.props.body}
              </div>
              <div className="card-foot">
                {this.props.footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
