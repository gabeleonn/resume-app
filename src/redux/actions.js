import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  loginFetch: ['email', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  authCheck: [null],
  authSuccess: ['token'],
  authFailure: ['error'],
  logoutFetch: [null],
});

export default Creators;
