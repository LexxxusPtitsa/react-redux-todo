import React, { useState } from "react";
import { connect } from "react-redux";

import { addTask, deleteTask, completeTask, changeFilter, editTask, changeTagFilter, clearTagFilter } from "../../actions/actionCreator";

import ToDoInput from '../../components/input/ToDoInput';
import ToDoInputTags from '../../components/input/ToDoInputTags';
import ToDoList from '../../components/list/ToDoList';
import { Header } from '../../components/header/Header.jsx';




function ToDo(props) {
    const [state, setState] = useState({ taskText: '', tags: '' });
    // const { activeFilter, taskText, tags } = state;
    const { tasks, deleteTask, completeTask, changeFilter, tagFilter, filter, changeTagFilter, clearTagFilter } = props;
    const isTasksExist = tasks && tasks.length > 0;

    const handleInputChange = ({ target: { value } }) => {
        setState({
            ...state,
            taskText: value,
        })
    }
    const handleInputTagChange = ({ target: { value } }) => {
        setState({
            ...state,
            tags: value,
        })
    }

    const addTask = ({ key }) => {
        const { taskText, tags } = state;

        if (taskText.length > 3 && key === 'Enter') {
            const { addTask } = props;
            addTask((new Date()).getTime(), taskText, false, tags);

            setState({
                taskText: '',
                tags: ''
            })
        }
    }

    const filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }
    const tagsFilter = (tasks, tagFilter) => {
        if (tagFilter !== "") {
            return (tasks.filter(task => task.tags.includes(tagFilter)))
        }
        else {
            return tasks;
        }
    }

    const editTasks = (id, text, tags) => {
        setState({ taskText: text, tags: tags });
        deleteTask(id);
    }

    const getTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    const filteredTasks = filterTasks(tasks, filter);
    const filteredTags = tagsFilter(filteredTasks, tagFilter);
    const counter = getTasksCounter(filteredTags);

    return (
        <div className="todo__wrapper">
            <div className="todo__input-wrapper">
                <ToDoInput onKeyPress={(e) => addTask(e)} onChange={(e) => handleInputChange(e)} value={state.taskText} />
                <ToDoInputTags
                    onKeyPress={(e) => addTask(e)}
                    onChange={(e) => handleInputTagChange(e)}
                    value={state.tags} />
            </div>

            <Header
                amount={counter}
                activeFilter={filter}
                clearTagFilter={clearTagFilter}
                tagFilter={tagFilter}
                changeFilter={changeFilter}
            />

            {isTasksExist && <ToDoList
                tasks={filteredTags}
                filteredTags={tagFilter}
                deleteTask={deleteTask}
                changeTagFilter={changeTagFilter}
                completeTask={completeTask}
                editTasks={editTasks}
            />}
        </div>
    )
}

export default connect(({ tasks, filter, tagFilter }) => ({
    tasks,
    filter,
    tagFilter,
}), { addTask, deleteTask, completeTask, changeFilter, editTask, changeTagFilter, clearTagFilter })(ToDo);