import React from 'react';
import { browserHistory } from 'react-router-dom';
const FooterButtons = (props) => {
  const { submitLabel, otherLabel, goToLink } = props;
  return (
    <div className="d-flex justify-content-between">
      <button type="submit" className="btn btn-primary">{submitLabel || 'Submit'}</button>
      <button type="button" className="btn btn-info" onClick={() => {
        props.history.push(goToLink || "/");
      }}>
        { otherLabel || 'Go back'}
      </button>
    </div>
  );
};

export default FooterButtons;
