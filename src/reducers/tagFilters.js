import { TAG_FILTER,TAGS_CLEAR } from '../constants';

const TAG_BASE_FILTER = '';

const tagFilter = (state = TAG_BASE_FILTER, { type, tagFilter }) => {
    switch (type) {
        case TAG_FILTER:
            return tagFilter;
        case TAGS_CLEAR:
            return tagFilter;
        default:
            return state;
    }
}

export default tagFilter;