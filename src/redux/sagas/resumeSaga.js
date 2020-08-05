/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';

import actions from '../actions';

export function* fetchInfo(lang) {
  switch (lang) {
    case 'en':
      yield put(actions.enInfo());
      break;
    case 'pt':
      yield put(actions.ptInfo());
      break;
    default:
      yield put(actions.ptInfo());
  }
}
