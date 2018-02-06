import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ActivTasks(props) {
  let { activTasks } = props;
  return (
    <div>
      <button onClick={activTasks} className="btn btn-danger">
        Activ
      </button>
    </div>
  );
}

ActivTasks.propTypes = {
  activTasks: PropTypes.func,
};
export default ActivTasks;
