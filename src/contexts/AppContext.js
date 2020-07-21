import React, { createContext, useReducer, useContext } from 'react';

export const AppContext = createContext();

// Initial state
const initialItems = {
  buyList: [],
  totalCashback: 0,
};

// Actions
export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_BUY_LIST = 'SET_BUY_LIST';
export const ADD_TO_BUY_LIST = 'ADD_TO_BUY_LIST';
export const SET_TOTAL_CASHBACK = 'SET_TOTAL_CASHBACK';

// Action creators
export const setUserInfo = (user) => ({
  type: SET_USER,
  user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const setBuyList = (list) => ({
  type: SET_BUY_LIST,
  list,
});

export const addToBuyList = (item) => ({
  type: ADD_TO_BUY_LIST,
  item,
});

export const setTotalCashback = (value) => ({
  type: SET_TOTAL_CASHBACK,
  value,
});

// Reducer
export function appReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case DELETE_USER:
      const { user, ...rest } = state;
      return { ...rest };
    case SET_BUY_LIST:
      return { ...state, buyList: action.list };
    case ADD_TO_BUY_LIST:
      return { ...state, buyList: [...state.buyList, action.item] };
    case SET_TOTAL_CASHBACK:
      return { ...state, totalCashback: action.value };
    default:
      return state;
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(appReducer, initialItems);

  const todoData = { state, dispatch };

  return <AppContext.Provider value={todoData} {...props} />;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
