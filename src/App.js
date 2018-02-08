import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import RenderWorkList from './RenderWorkList';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import {
  addTodo,
  checkItem,
  deleteItem,
  clearCompleted,
  onlyCompleted,
  allTasks,
  selectAll,
  activTasks,
} from './modules/todo/actions';
import StoreEventBus from './modules/StoreEventBus';

class App extends Component {
  onSave = e => {
    const { actions } = this.props;
    const { value } = e.target;
    if (e.keyCode !== 13 || !value) return;
    actions.addTodo(value);
    e.target.value = '';
  };
  isAllChecked = () => {
    let check = this.props.todo.workList.every(item => item.checked);
    return check;
  };
  render() {
    const { workList, filteredList, view } = this.props.todo;

    const { actions } = this.props;

    return (
      <div className="col-12">
        <h1 className="h1">Todoshechka</h1>
        <input
          type="text"
          onKeyDown={this.onSave}
          className="input-group-text form-control"
        />
        <RenderWorkList
          items={workList}
          checked={actions.checkItem}
          deleted={actions.deleteItem}
          filteredList={filteredList}
          view={view}
        />
        <Footer
          items={workList}
          clearCompleted={actions.clearCompleted}
          onlyCompleted={actions.onlyCompleted}
          allTasks={actions.allTasks}
          selectAll={actions.selectAll}
          isAllChecked={this.isAllChecked}
          activTasks={actions.activTasks}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addTodo,
        checkItem,
        deleteItem,
        clearCompleted,
        onlyCompleted,
        allTasks,
        selectAll,
        activTasks,
      },
      dispatch,
    ),
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
