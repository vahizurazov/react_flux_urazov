import Dispatcher from '../Dispatcher';
import * as actionTypes from './actionTypes';

export const addTodo = e => {
  return Dispatcher.dispatch({
    type: actionTypes.ADD_TODO,
    e,
  });
};
export const checkItem = id => {
  return Dispatcher.dispatch({
    type: actionTypes.CHECK_ITEM,
    id,
  });
};

export const deleteItem = i => {
  return Dispatcher.dispatch({
    type: actionTypes.DELETE_ITEM,
    i,
  });
};
export const clearCompleted = () => {
  return Dispatcher.dispatch({
    type: actionTypes.CLEAR_COMPLETED,
  });
};
export const onlyCompleted = () => {
  return Dispatcher.dispatch({
    type: actionTypes.ONLY_COMPLETED,
  });
};

export const allTasks = () => {
  return Dispatcher.dispatch({
    type: actionTypes.ALL_TASKS,
  });
};

export const selectAll = () => {
  return Dispatcher.dispatch({
    type: actionTypes.SELECT_ALL,
  });
};

export const activTasks = () => {
  return Dispatcher.dispatch({
    type: actionTypes.ACTIVE_TASKS,
  });
};
