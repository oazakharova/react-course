import {configureStore} from "@reduxjs/toolkit";

const reducer = (state=0, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const initialState = {
  name: '',
  email: '',
};

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
       ...state,
        name: action.payload,
      };
    case 'UPDATE_EMAIL':
      return {
       ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({reducer: reducer});

const profileStore = configureStore({reducer: profileReducer});

export {store, profileStore};