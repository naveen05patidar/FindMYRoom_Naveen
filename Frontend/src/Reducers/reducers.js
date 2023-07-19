import { USER_ID } from "../Actions/actions.js";

const initialState = {
  email: null,
};

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID: {
      return {
        ...state,
        email: action.payload
      };
    }
    default:
      return state;
  }
};
