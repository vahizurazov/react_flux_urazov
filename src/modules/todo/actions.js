import * as actionTypes from './actionTypes';

export const addTodo = value => ({
  type: actionTypes.ADD_TODO,
  value,
});

export const checkItem = id => ({
  type: actionTypes.CHECK_ITEM,
  id,
});

export const deleteItem = i => ({
  type: actionTypes.DELETE_ITEM,
  i,
});

export const clearCompleted = () => ({
  type: actionTypes.CLEAR_COMPLETED,
});

export const onlyCompleted = () => ({
  type: actionTypes.ONLY_COMPLETED,
});

export const allTasks = () => ({
  type: actionTypes.ALL_TASKS,
});

export const selectAll = value => ({
  type: actionTypes.SELECT_ALL,
  value,
});

export const activTasks = () => ({
  type: actionTypes.SHOW_ACTIVE_TASKS,
});

//////////weather
export const saveStoreWeather = response => ({
  type: actionTypes.SAVE_STORE_WEATHER,
  response,
});

export const startSagaWeather = () => ({
  type: actionTypes.START_SAGA_WEATHER,
});

export const closeWeather = () => ({
  type: actionTypes.CLOSE_WEATHER,
});
