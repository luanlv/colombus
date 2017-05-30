import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import setting from './setting';
import data from './data'

export default combineReducers({
  user,
  runtime,
  setting,
  data,
});
