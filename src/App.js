import React, { Component } from 'react';
import './App.css';
import RenderWorkList from './RenderWorkList';
import Footer from './Footer';
import PropTypes from 'prop-types';
import getState from './modules/todo/store';
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
  state = getState();

  componentDidMount() {
    StoreEventBus.register(payload => {
      if (payload.event) {
        this.setState(getState());
      }
    });
  }

  render() {
    return (
      <div className="col-12">
        <h1 className="h1">Todoshechka</h1>
        <input
          type="text"
          onKeyDown={addTodo}
          className="input-group-text form-control"
        />
        <RenderWorkList
          items={this.state.workList}
          checked={checkItem}
          deleted={deleteItem}
          checkOnlyComp={this.state.onlyCompleted}
          view={this.state.view}
          activTasks={this.state.activTasks}
        />
        <Footer
          items={this.state.workList}
          clearCompleted={clearCompleted}
          onlyCompleted={onlyCompleted}
          allTasks={allTasks}
          selectAll={selectAll}
          isAllChecked={this.state.isAllChecked}
          activTasks={activTasks}
        />
      </div>
    );
  }
}

export default App;
