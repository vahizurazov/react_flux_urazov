import * as actionTypes from './actionTypes';

const initialState = {
  workList: [],
  // filteredList: [],
  view: 'all',
  weather: {},
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        workList: [
          ...state.workList,
          {
            textValue: action.value,
            checked: false,
            id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(
              36,
            ),
          },
        ],
      };

    case actionTypes.CHECK_ITEM:
      return {
        ...state,
        workList: state.workList.map(el => {
          if (el.id === action.id) {
            return {
              ...el,
              checked: !el.checked,
            };
          }
          return { ...el };
        }),
      };

    case actionTypes.DELETE_ITEM:
      if (
        state.workList.filter(el => !el.checked).length === 1 ||
        state.workList.filter(el => el.checked).length === 1
      ) {
        return {
          ...state,
          workList: state.workList.filter((el, l) => {
            if (l !== action.i) {
              return { ...el };
            }
          }),
          view: 'all',
        };
      } else {
        return {
          ...state,
          workList: state.workList.filter((el, l) => {
            if (l !== action.i) {
              return { ...el };
            }
          }),
        };
      }

    case actionTypes.CLEAR_COMPLETED:
      if (!state.workList.filter(el => !el.checked).length) {
        return {
          ...state,
          workList: state.workList.filter(el => {
            if (!el.checked) {
              return { ...el };
            }
          }),
          view: 'all',
        };
      } else {
        return {
          ...state,
          workList: state.workList.filter(el => {
            if (!el.checked) {
              return { ...el };
            }
          }),
        };
      }

    case actionTypes.ONLY_COMPLETED:
      return {
        ...state,
        view: 'completed',
      };

    case actionTypes.ALL_TASKS:
      return {
        ...state,
        view: 'all',
      };

    case actionTypes.SELECT_ALL:
      return {
        ...state,
        workList: state.workList.map(el => {
          el.checked = !action.value;
          return { ...el };
        }),
      };

    case actionTypes.SHOW_ACTIVE_TASKS:
      console.log('4444', state);
      return {
        ...state,
        view: 'active',
      };
    case actionTypes.SAVE_STORE_WEATHER:
      return {
        ...state,
        weather: action.response,
      };
    default:
      return state;
  }
};

export default todo;
