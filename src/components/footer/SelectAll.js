import React from 'react';
import PropTypes from 'prop-types';

function SelectAll(props) {
  // let { selectAll } = props;

  return (
    <div>
      <input
        type="checkbox"
        id="select"
        onChange={() => props.selectAll(props.isAllChecked())}
        checked={props.isAllChecked()}
      />
      <label htmlFor="select">Select All</label>
    </div>
  );
}

SelectAll.propTypes = {
  selectAll: PropTypes.func,
};
export default SelectAll;
