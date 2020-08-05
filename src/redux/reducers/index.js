import { combineReducers } from 'redux';

import resume from './resumeReducer';

const rootReducers = combineReducers({
  resume,
});

export default rootReducers;
