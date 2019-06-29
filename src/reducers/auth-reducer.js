import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
  isAuth: false,
  errors: [],
  username: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuth: true,
        errors: [],
        username: action.username
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};
