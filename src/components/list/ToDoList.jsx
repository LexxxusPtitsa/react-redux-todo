import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../item/ToDoItem';


const ToDoList = ({tasks, completeTask, editTasks, filteredTags, addFilter }) => {
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
                    completeTask={completeTask}
                    addFilter={addFilter}
                />
            ))
        }
    </ul>)
};

ToDoList.protoTypes = {
    tasks: PropTypes.array,
    completeTask: PropTypes.func,
    editTasks: PropTypes.func,
    filteredTags: PropTypes.func,
}

ToDoList.defaultProps = {
    tasks: [],
    completeTask: () => { },
    editTasks: () => { },
    filteredTags: () => { },
}

export default ToDoList;