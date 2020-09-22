import * as actionTypes from './actionTypes';
import axios from 'axios';
export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};
export const authFailed = () => {
  return { type: actionTypes.AUTH_FAILED };
};

export const authSignUp = () => {
  return { type: actionTypes.AUTH_SIGNUP };
};

export const actionSignIn = (authData) => {
  return {
    type: actionTypes.AUTH_SIGNIN,
    userId: authData.id,
    email: authData.email,
  };
};
export const authLogOut = () => {
  return { type: actionTypes.AUTH_LOGOUT };
};
export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authSignIn = (email, password) => {
  return (dispatch) => {
    let url = '/auth/signin';
    axios
      .post(url, { email, password })
      .then((response) => {
        const authData = response.data;
        console.log(authData);
        dispatch(authSignIn(authData));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFailed());
      });
  };
};
