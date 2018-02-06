import Dispatcher from '../Dispatcher';
import StoreEventBus from '../StoreEventBus';
import * as actionTypes from './actionTypes';
let store = {
  workList: [],
  onlyCompleted: [],
  activTasks: [],
  view: 'all',
  isAllChecked: () => {
    if (store.workList.every(el => el.checked)) {
      return true;
    } else return false;
  },
};

const getState = () => {
  return store;
};

Dispatcher.register(payload => {
  switch (payload.type) {
    case actionTypes.ADD_TODO:
      let inputValue = payload.e.target.value.trim();
      if (payload.e.keyCode !== 13 || !inputValue) return;
      store.workList.push({
        textValue: inputValue,
        checked: false,
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
      });
      payload.e.target.value = '';
      break;

    case actionTypes.CHECK_ITEM:
      store.workList = store.workList.map(el => {
        if (el.id === payload.id) {
          el.checked = !el.checked;
        }
        return el;
      });
      break;

    case actionTypes.DELETE_ITEM:
      store.workList = store.workList.filter((el, l) => l !== payload.i);
      store.onlyCompleted = store.onlyCompleted.filter(
        (el, l) => l !== payload.i,
      );
      store.activTasks = store.activTasks.filter((el, l) => l !== payload.i);
      break;

    case actionTypes.CLEAR_COMPLETED:
      store.workList = store.workList.filter(el => !el.checked);
      store.onlyCompleted.length = 0;
      break;

    case actionTypes.ONLY_COMPLETED:
      store.onlyCompleted = store.workList.filter(el => el.checked);
      store.view = 'completed';
      break;

    case actionTypes.ALL_TASKS:
      store.view = 'all';
      break;

    case actionTypes.SELECT_ALL:
      let isChecked = store.isAllChecked();
      store.workList = store.workList.map(el => {
        el.checked = isChecked ? false : true;
        return el;
      });
      break;

    case actionTypes.ACTIVE_TASKS:
      (store.activTasks = store.workList.filter(el => !el.checked)),
        (store.view = 'activ');
      break;
    default:
      return false;
  }
  StoreEventBus.dispatch({
    event: 'change',
  });
});

export default getState;
