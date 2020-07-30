import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER, TAG_FILTER, TAGS_CLEAR, EDIT_TASK} from '../constants';

export const addTask = (id, text, isCompleted, tags) => ({
    type: ADD_TASK,
    id, 
    text, 
    isCompleted,
    tags
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
});
export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    id
});

export const changeFilter = (activeFilter) => ({
    type: CHANGE_FILTER,
    activeFilter
});

export const changeTagFilter = (tagFilter) => ({
    type: TAG_FILTER,
    tagFilter
});
export const clearTagFilter = (tagFilter) => ({
    type: TAGS_CLEAR,
    tagFilter: '',
});

export const editTask = (id, text) => ({
    type: EDIT_TASK,
    id,
    text,
});

