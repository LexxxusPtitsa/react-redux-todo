import { ADD_TAG_FILTER, DELETE_TAG_FILTER } from '../constants';
import { load } from 'redux-localstorage-simple';


let TAG_BASE_FILTER = load({ namespace: 'todo-list' });
if (!TAG_BASE_FILTER || !TAG_BASE_FILTER.tagFilter || !TAG_BASE_FILTER.tagFilter.length) {
    TAG_BASE_FILTER.tagFilter = [];
}

const tagFilter = (state = TAG_BASE_FILTER.tagFilter, { type, tagFilter, tags }) => {
    switch (type) {
        case ADD_TAG_FILTER:
            return [...state];
        case DELETE_TAG_FILTER:
            return tagFilter;
        default:
            return state;
    }
}

export default tagFilter;