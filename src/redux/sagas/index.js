import { put, takeEvery, all } from 'redux-saga/effects';

import actions from '../actions';

import { login, auth, logout } from './authSaga';

export default function* rootSaga() {
  yield all([
    takeEvery('LOGIN_FETCH', login),
    takeEvery('AUTH_CHECK', auth),
    takeEvery('LOGOUT_FETCH', logout),
    put(actions.authCheck()),
  ]);
}
