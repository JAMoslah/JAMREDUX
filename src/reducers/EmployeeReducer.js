import {
  ACTES_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ACTES_FETCH:
      return action.payload;
    default:
      return state;

  }

};
