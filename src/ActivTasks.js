import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ActivTasks(props) {
  let { activTasks } = props;
  return (
    <div>
      <label
        htmlFor="btnActive"
        onClick={activTasks}
        className="btn btn-danger"
      >
        <input type="radio" id="btnActive" name="option" className="mr-2" />Active
      </label>
    </div>
  );
}

ActivTasks.propTypes = {
  activTasks: PropTypes.func,
};
export default ActivTasks;
