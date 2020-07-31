import {combineReducers} from 'redux';
import tasks from './tasks';
import filter from './filters';
import tagFilter from './tagFilters';
import tags from './tags';

const rootReducer = combineReducers({ tasks, filter, tagFilter, tags });

export default rootReducer;