import { put, takeLatest, all } from 'redux-saga/effects';

import actions from '../actions';

import { fetchInfo } from './resumeSaga';

export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_INFO', fetchInfo),
    put(actions.fetchInfo()),
  ]);
}
