import { createReducer } from 'reduxsauce';
import { Types } from '../actions';

export const initialState = {
  user: {
    role: '',
    email: '',
  },
  loading: false,
  error: false,
  errorMsg: '',
  isAuth: false,
};

export const loginFetch = (state = initialState) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMsg: '',
  };
};

export const loginSuccess = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    user: { ...action.user },
    isAuth: true,
  };
};

export const loginFailure = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMsg: action.error,
  };
};

export const authCheck = (state = initialState) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMsg: '',
  };
};

export const authSuccess = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    user: { ...action.user },
    isAuth: true,
  };
};

export const authFailure = (state = initialState, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMsg: action.error,
  };
};

export const logoutFetch = () => {
  return {
    ...initialState,
  };
};

export const handlers = {
  [Types.LOGIN_FETCH]: loginFetch,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.AUTH_CHECK]: authCheck,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.LOGOUT_FETCH]: logoutFetch,
};

export default createReducer(initialState, handlers);
