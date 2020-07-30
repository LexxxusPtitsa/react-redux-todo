import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

const ToDoInput = ({ value, onChange, onKeyPress }) => {
    return (

        <div className="todo__input-inner">
            <AddIcon style={{ fontSize: 30 }} />
            <input
                type="text"
                className="todo__input"
                onChange={onChange}
                placeholder="Click to add task and press ENTER"
                value={value}
                onKeyPress={onKeyPress}
            />
        </div>

    )
};

ToDoInput.protoTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

ToDoInput.defaultProps = {
    onChange: () => { },
    onKeyPress: () => { },
    value: '',
}

export default ToDoInput;