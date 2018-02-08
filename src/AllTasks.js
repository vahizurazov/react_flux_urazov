import React, { Component } from 'react';
import PropTypes from 'prop-types';

function AllTasks(props) {
  let { allTasks } = props;
  return (
    <div>
      <label htmlFor="btnAll" onClick={allTasks} className="btn btn-warning ">
        <input
          defaultChecked
          type="radio"
          id="btnAll"
          name="option"
          className="mr-2"
        />All
      </label>
    </div>
  );
}

AllTasks.propTypes = {
  allTasks: PropTypes.func,
};
export default AllTasks;
