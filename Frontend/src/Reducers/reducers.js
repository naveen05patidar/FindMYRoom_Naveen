import { USER_ID } from "../Actions/actions.js";

const initialState = {
  email: null,
  token: localStorage.getItem('token') || '',
};

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID: {
      return {
        ...state,
        email: action.payload
      };
    }
    case "token": {
      return {
        ...state,
        token: action.token
      };
    }
    
    default:
      return state;
  }
};
