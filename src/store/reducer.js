import {ActionType} from './action';
import React from 'react';

const StoreContext = React.createContext();

const initialState = {
  names: [],
  colors: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.ADD_NAME:
      return ({
        ...state,
        names: [...state.names, action.payload],
      })
    default:
      return state;
  }
};

export {reducer, initialState, StoreContext};
