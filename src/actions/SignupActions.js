import firebase from 'firebase';
import { EMAIL_CREATE, PASSWORD_CREATE, CREATE_USER_SUCCESS,
         CREATE_USER_FAIL, LOGIN_USER,
         } from './types';

import { Actions } from 'react-native-router-flux';

export const emailCreate = (text) => {
  return {
    type: EMAIL_CREATE,
    payload: text
  };
};

export const passwordCreate = (text) => {
  return {
    type: PASSWORD_CREATE,
    payload: text
  };
};

export const userCreate = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER});
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => createUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
       createUserFail(dispatch);
      });
  };
};

const createUserSuccess = (dispatch, user) => {
  dispatch({
      type: CREATE_USER_SUCCESS,
      payload: user
  });
  alert("ok");

};

  const createUserFail = (dispatch) => {
    dispatch({ type: CREATE_USER_FAIL});
  };
