import React, { Component } from 'react';
import PropTypes from 'prop-types';

function OnlyCompleted(props) {
  let { onlyCompleted } = props;
  return (
    <div>
      <label
        htmlFor="btnOnly"
        onClick={onlyCompleted}
        className="btn btn-secondary"
      >
        <input type="radio" id="btnOnly" name="option" className="mr-2" />Completed
      </label>
    </div>
  );
}

OnlyCompleted.propTypes = {
  onlyCompleted: PropTypes.func,
};
export default OnlyCompleted;
