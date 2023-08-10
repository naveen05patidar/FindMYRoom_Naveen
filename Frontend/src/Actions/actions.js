export const USER_ID = "USER_ID";

export const setUserId = (email) => {
  return {
    type: USER_ID,
    payload: email,
  };
};

export const setToken = (email) => {
  return {
    type: 'token',
    token: email,
  };
};