/**
 * Created by taylorrayhoward on 8/13/17.
 */
import React from 'react';
import '../Styles/App.css'

const FooterButton = (props) => {
  const { submitLabel, otherLabel, goToLink, history, googleLogin } = props;
  return (
    <div className="d-flex justify-content-between">
      <button type="submit" className="btn btn-primary">{submitLabel}</button>
      <div className="sign-in-icon img-fluid google-button" onClick={googleLogin}/>
      <button type="button" className="btn btn-info" onClick={() => {
        history.push(goToLink);
      }}>{otherLabel}</button>
    </div>
  );
};

export default FooterButton;
