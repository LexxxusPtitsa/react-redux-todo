import {combineReducers} from 'redux';
import tasks from './tasks';
import filter from './filters';
import tagFilter from './tagFilters';

const rootReducer = combineReducers({ tasks, filter, tagFilter });

export default rootReducer;