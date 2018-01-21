import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignupReducer';
import ModeActesReducer from './ModeActesReducer';
import EmployeeReducer from './EmployeeReducer';


export default combineReducers({
  auth: AuthReducer,
  sign: SignupReducer,
  Mode : ModeActesReducer,
  actes: EmployeeReducer
});
