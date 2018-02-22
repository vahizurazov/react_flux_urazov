import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import RenderWorkList from '../components/main/RenderWorkList';
import Footer from '../components/footer/Footer';
import WeatherForecast from '../components/weatherForecast/WeatherForecast';

// import PropTypes from 'prop-types';
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
  weatherForecast,
  saveStoreWeather,
  startSagaWeather,
} from '../modules/todo/actions';

import { Link } from 'react-router-dom';

class App extends Component {
  onSave = e => {
    const { actions } = this.props;
    const { value } = e.target;

    if (e.keyCode !== 13 || !value) return;
    if (value.toLowerCase() === 'погода' || value.toLowerCase() === 'weather') {
      actions.startSagaWeather();
    }
    actions.addTodo(value);
    e.target.value = '';
  };
  isAllChecked = () => {
    let check = this.props.todo.workList.every(item => item.checked);
    return check;
  };
  clearLocalStorage = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
  };

  render() {
    const { workList, filteredList, view, weather } = this.props.todo;
    console.log(this.props);
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
        <WeatherForecast
          weatherForecast={actions.weatherForecast}
          saveStoreWeather={actions.saveStoreWeather}
          weather={weather}
          startSagaWeather={actions.startSagaWeather}
        />
        <Link to="/authorization" onClick={this.clearLocalStorage}>
          Sing Out
        </Link>
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
        weatherForecast,
        saveStoreWeather,
        startSagaWeather,
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
