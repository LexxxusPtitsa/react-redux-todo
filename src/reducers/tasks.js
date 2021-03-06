import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, DELETE_TAG } from '../constants';
import { load } from 'redux-localstorage-simple';


let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}


const tasks = (state = TASKS.tasks, { id, text, isCompleted, tags, type, tagId }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                    tags,
                }
            ];
        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        case DELETE_TAG:
            return [...state].map(task => {
                let tags = task.tags;
                task.tags = tags.filter(tag => tag.id !== tagId);
                return task;
            });
        case EDIT_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.text = text;
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;