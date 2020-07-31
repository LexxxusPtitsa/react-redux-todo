import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask, deleteTask, completeTask, addTags, addTagFilter } from "../../actions/actionCreator";

import ToDoInput from '../../components/input/ToDoInput';
import ToDoInputTags from '../../components/input/ToDoInputTags';
import ToDoList from '../../components/list/ToDoList';
import { Header } from '../../components/header/Header.jsx';




function ToDo(props) {
    const [state, setState] = useState({ taskText: '', tags: [] });
    const { taskText, tags } = state;
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);
    const tagFilter = useSelector(state => state.tagFilter);
    const tagsStore = useSelector(state => state.tags);
    const dispatch = useDispatch();
    const isTasksExist = tasks && tasks.length > 0;

    const handleInputChange = ({ target: { value } }) => {
        setState({
            ...state,
            taskText: value,
        })
    }
    const handleInputTagChange = ({ target: { value } }) => {
        let arrTags = value.split(',');
        setState({
            ...state,
            tags: arrTags,
        })
    }

    function removeDuplicates(arr) {

        const result = [];
        const duplicatesIndices = [];

        arr.forEach((current, index) => {

            if (duplicatesIndices.includes(index)) return;

            result.push(current);

            for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {

                const comparison = arr[comparisonIndex];
                const currentKeys = Object.keys(current);
                const comparisonKeys = Object.keys(comparison);

                if (currentKeys.length !== comparisonKeys.length) continue;


                const currentKeysString = currentKeys.sort().join("").toLowerCase();
                const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
                if (currentKeysString !== comparisonKeysString) continue;


                let valuesEqual = true;

                if (current.value !== comparison.value) {
                    valuesEqual = false;
                }
                if (valuesEqual) duplicatesIndices.push(comparisonIndex);

            }
        });
        return result;
    }

    const sortTags = (tg) => {
        let tgs = tg.filter((item, index) => tg.indexOf(item) === index);
        let taggs = tgs.filter(tag => tag.length > 0);
        return taggs;
    }

    const addNewTags = (tgs, newTags) => {
        let tg = Array.from(new Set(tgs.concat(newTags)));
        let taggs = removeDuplicates(tg);
        dispatch(addTags(taggs));
    }

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', .8)';
    }

    const addTasks = ({ key }) => {

        let arrTags = sortTags(tags).map((value, key) => {
            let color = tagsStore.filter(tag => tag.value === value)[0] ? tagsStore.filter(tag => tag.value === value)[0].color : random_rgba();
            return {
                id: value,
                value: value,
                color: color,
                isActive: false
            }
        });

        if (taskText.length > 3 && key === 'Enter') {
            dispatch(addTask((new Date()).getTime(), taskText, false, arrTags));
            addNewTags(tagsStore, arrTags)
            setState({
                taskText: '',
                tags: []
            });
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
        if (tagFilter.length > 0) {
            return (tasks.filter(task => {
                let tsk = task.tags.map((value, key) => {
                    for (let i = 0; i < tagFilter.length; i++) {
                        if (value.value === tagFilter[i].value) {
                            return true;
                        }
                    }
                });
                let indices = [];
                let idx = tsk.indexOf(true);
                while (idx !== -1) {
                    indices.push(idx);
                    idx = tsk.indexOf(true, idx + 1);
                }
                if (indices.length === tagFilter.length) {
                    return true;
                }
            }));
        } else {
            return tasks;
        }
    }

    const editTasks = (id, text, tags) => {
        let arrTags = tags.map((value, key) => (
            value.value
        ));
        setState({ taskText: text, tags: arrTags });
        dispatch(deleteTask(id));
    }

    const addFilter = (tag) => {
        let tagg = tagFilter;
        tag.isActive = true;
        let newTags = tagsStore;
        newTags.map((value, key) => value.value === tag.value ? value.isActive = true : null);
        tagg.push(tag);
        dispatch(addTagFilter(tagg, newTags));
    }
    const getTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;
    const filteredTags = tagsFilter(filterTasks(tasks, filter), tagFilter);
    const counter = getTasksCounter(filteredTags);

    return (
        <div className="todo__wrapper">
            <div className="todo__input-wrapper">
                <ToDoInput onKeyPress={(e) => addTasks(e)} onChange={(e) => handleInputChange(e)} value={state.taskText} />
                <ToDoInputTags
                    onKeyPress={(e) => addTasks(e)}
                    onChange={(e) => handleInputTagChange(e)}
                    value={state.tags.toString()} />
            </div>

            <Header
                amount={counter}
                addFilter={addFilter}
            />

            {isTasksExist && <ToDoList
                tasks={filteredTags}
                filteredTags={tagFilter}
                completeTask={completeTask}
                editTasks={editTasks}
                addFilter={addFilter}
            />}
        </div>
    )
}

export default ToDo;