import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../item/ToDoItem';


const ToDoList = ({ tasks, deleteTask, completeTask, editTasks, filteredTags, tagFilter, changeTagFilter }) => {
    return (<ul className="todo__list">
        {
            tasks.map(({ id, text, isCompleted, tags }) => (
                <ToDoItem
                    key={id}
                    text={text}
                    isCompleted={isCompleted}
                    filteredTags={filteredTags}
                    tags={tags}
                    id={id}
                    editTasks={editTasks}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    changeTagFilter={changeTagFilter}
                />
            ))
        }
    </ul>)
};

ToDoList.protoTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
    editTasks: PropTypes.func,
    filteredTags: PropTypes.func,
    changeTagFilter: PropTypes.func,
}

ToDoList.defaultProps = {
    tasks: [],
    deleteTask: () => { },
    completeTask: () => { },
    editTasks: () => { },
    filteredTags: () => { },
    changeTagFilter: () => { },
}

export default ToDoList;