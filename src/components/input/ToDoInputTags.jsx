import React from 'react';
import PropTypes from 'prop-types';

const ToDoInputTags = ({ value, onChange, onKeyPress }) => {
    return(
        <>
        <input 
        type="text" 
        className="todo__input-tags" 
        onChange={onChange}
        placeholder="Add tags separated by COMMAS!"
        value={value.replace(/\s/g, '')}
        onKeyPress={onKeyPress}
        />
        </>
    )
};

ToDoInputTags.protoTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

ToDoInputTags.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}

export default ToDoInputTags;