import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER, ADD_TAG_FILTER, DELETE_TAG_FILTER, EDIT_TASK, ADD_TAGS, DELETE_TAGS, DELETE_TAG } from '../constants';

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


export const editTask = (id, text) => ({
    type: EDIT_TASK,
    id,
    text,
});


export const addTags = (tags) => ({
    type: ADD_TAGS,
    tags: tags
});
// export const deleteTags = (tagId) => ({
//     type: DELETE_TAGS,
//     tagId
// });
export const deleteTag = (tagId) => ({
    type: DELETE_TAG,
    tagId
});

export const addTagFilter = (tagFilter, tags) => ({
    type: ADD_TAG_FILTER,
    tagFilter: tagFilter,
    tags: tags
});
export const clearTagFilter = (tagFilter,tags) => ({
    type: DELETE_TAG_FILTER,
    tagFilter: tagFilter,
    tags: tags
});


