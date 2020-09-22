import * as actionTypes from '../action/actionTypes';

const initialState = {
  userId: null,
  email: null,
  error: null,
  authRedirectPath: '/',
};
const authLogin = (state, action) => {
  return {
    ...state,
    error: null,
    userId: action.userId,
    email: action.email,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNIN:
      return authLogin(state, action);
    case actionTypes.AUTH_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
