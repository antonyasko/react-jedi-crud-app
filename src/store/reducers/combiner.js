import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer';
import starshipsReducer from './starshipsReducer';

export default combineReducers({
  peopleReducer,
  planetsReducer,
  starshipsReducer,
});
