import { EMAIL_CREATE, PASSWORD_CREATE, CREATE_USER_SUCCESS,CREATE_USER_FAIL, LOGIN_USER   } from '../actions/types';

const INITIAL_STATE = {email: '', password: '', user: null, error: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CREATE:
        return {...state, email: action.payload };
      case PASSWORD_CREATE:
        return {...state, password: action.payload };
      case CREATE_USER_SUCCESS:
        return {...state, ...INITIAL_STATE, user: action.payload };
      case CREATE_USER_FAIL:
        return {...state, error: 'Sign up Failed.', password: '', loading: false};
      case LOGIN_USER:
        return {...state, loading: false, error: ''};
      default:
        return state;

    }
};
