import { ADD_TAGS,DELETE_TAG } from '../constants';
import { load } from 'redux-localstorage-simple';


let TAG_BASE = load({ namespace: 'todo-list' });
if (!TAG_BASE || !TAG_BASE.tags || !TAG_BASE.tags.length) {
    TAG_BASE.tags = [];
}

const tags = (state = TAG_BASE.tags, { type, tags, tagId }) => {
    switch (type) {
        case ADD_TAGS:
            return tags;
        case DELETE_TAG:
            return [...state].filter(tag => tag.id !== tagId);
        default:
            return state;
    }
}

export default tags;