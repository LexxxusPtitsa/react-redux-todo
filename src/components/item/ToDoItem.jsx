import React from 'react';
import PropTypes from 'prop-types';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoItem = ({ text, isCompleted, deleteTask, completeTask, id, tags, editTasks, changeTagFilter }) => {
    return (<li className="todo__item">
        <div onClick={() => completeTask(id)} className="todo__check">
            {isCompleted ? <CheckCircleOutlineIcon style={{ fontSize: 20 }} color="disabled" /> : <RadioButtonUncheckedIcon style={{ fontSize: 20 }} />}
        </div>
        <div className="todo__item-inner">
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <span className={isCompleted ? 'completed tags' : 'tags'}>{tags.split(' ').map((value,key) => (
                <span onClick={() => changeTagFilter(value)} className="tag" key={key}>{value}</span>
            ))}</span>
        </div>
        <EditIcon onClick={() => editTasks(id, text, tags)} color="primary" style={{ fontSize: 20 }} />
        <DeleteForeverIcon onClick={() => deleteTask(id)} color="secondary" style={{ fontSize: 20 }} />
    </li>)
};

ToDoItem.protoTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    deleteTask: PropTypes.func,
    editTasks: PropTypes.func,
    filteredTags: PropTypes.func,
    id: PropTypes.string,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    deleteTask: () => { },
    editTasks: () => { },
    filteredTags: () => { },
    id: '',
}

export default ToDoItem;