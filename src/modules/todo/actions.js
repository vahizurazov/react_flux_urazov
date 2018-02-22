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

export const weatherForecast = () => {
  // return dispatch => {
  //   fetch(
  //     'http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&q=Kharkiv&units=metric',
  //   )
  //     .then(response => response.json())
  //     .then(response => dispatch(saveStoreWeather(response)))
  //     .catch(error => {});
  // };
};

// const getWeather = () => {
//   debugger;
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response =>dispatch(saveStoreWeather(response)))
//     .catch(error => {});
// };
// .then(res =>
//   fetch(
//     `http://api.openweathermap.org/data/2.5/weather?appid=26c4e78ec28ff3bc979f704736e6e244&q=${
//       res.city
//     }`,
//   ),
// )
// .then(response => console.log(response.json()))
