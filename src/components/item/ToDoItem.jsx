import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteTask, completeTask } from "../../actions/actionCreator";



const ToDoItem = ({ text, isCompleted, id, tags, editTasks, addFilter }) => {
    const dispatch = useDispatch();
    const tagFilter = useSelector(state => state.tagFilter);
    const tagsStore = useSelector(state => state.tags);

    

    return (<li className="todo__item">
        <div onClick={() => dispatch(completeTask(id))} className="todo__check">
            {isCompleted ? <CheckCircleOutlineIcon style={{ fontSize: 20 }} color="disabled" /> : <RadioButtonUncheckedIcon style={{ fontSize: 20 }} />}
        </div>
        <div className="todo__item-inner">
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <span className={isCompleted ? 'completed tags' : 'tags'}>{
                tags.map((value, key) => (
                    <span onClick={() => value.isActive ? null : addFilter(value)} style={{ border: "1px solid " + value.color + "", color: value.color }} className="tag" key={key}>{value.value}</span>
                ))
            }</span>
        </div>
        <EditIcon onClick={() => editTasks(id, text, tags)} color="primary" style={{ fontSize: 20 }} />
        <DeleteForeverIcon onClick={() => dispatch(deleteTask(id))} color="secondary" style={{ fontSize: 20 }} />
    </li>)
};

ToDoItem.protoTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    editTasks: PropTypes.func,
    id: PropTypes.string,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    editTasks: () => { },
    id: '',
}

export default ToDoItem;