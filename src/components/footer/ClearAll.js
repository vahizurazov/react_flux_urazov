import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ClearAll(props) {
  let { clearCompleted, items } = props;
  // console.log(clearCompleted);
  if (!items.some(el => el.checked)) {
    return null;
  }
  return (
    <div>
      <button onClick={clearCompleted} className="btn btn-success">
        Clear Completed
      </button>
    </div>
  );
}

ClearAll.propTypes = {
  clearCompleted: PropTypes.func,
  items: PropTypes.array,
};
export default ClearAll;
