/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';

import actions from '../actions';

export function* login(action) {
  const { email, password } = action.payload;
  const body = {
    email,
    password,
  };
  const req = yield axios.post('http://localhost:8080/users/login', body);

  if (req.data.token) {
    const { token } = req.data;
    localStorage.setItem('token', token);
    const { role } = jwt.verify(token, 'dHR0TXVoSGFtcEhmbHRqTCZUJkI3NQ==');
    yield put(actions.loginSuccess({ email, role }));
  } else {
    yield put(actions.loginFailure(req.data.msg));
  }
}

export function* auth() {
  const token = localStorage.getItem('token');
  try {
    const { email, role } = yield jwt.verify(token, 'dHR0TXVoSGFtcEhmbHRqTCZUJkI3NQ==');
    if (!email && !role) {
      localStorage.removeItem('token');
      yield put(actions.authFailure('Token inválido.'));
    } else {
      yield put(actions.authSuccess({ email, role }));
    }
  } catch (e) {
    localStorage.removeItem('token');
    yield put(actions.authFailure('Token inválido.'));
  }
}

export function* logout() {
  yield localStorage.removeItem('token');
}
