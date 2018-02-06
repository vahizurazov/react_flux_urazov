import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ClearAll from './ClearAll';
import OnlyCompleted from './OnlyCompleted';
import AllTasks from './AllTasks';
import SelectAll from './SelectAll';
import ActivTasks from './ActivTasks';

function Footer(props) {
  if (!props.items.length) {
    return null;
  }
  return (
    <footer className="d-flex justify-content-between">
      <Counter items={props.items} />
      <SelectAll
        selectAll={props.selectAll}
        isAllChecked={props.isAllChecked}
      />
      <AllTasks allTasks={props.allTasks} />
      <ActivTasks activTasks={props.activTasks} />
      <OnlyCompleted onlyCompleted={props.onlyCompleted} />
      <ClearAll items={props.items} clearCompleted={props.clearCompleted} />
    </footer>
  );
}

Footer.propTypes = {
  //   allTasks: PropTypes.func,
};
export default Footer;
