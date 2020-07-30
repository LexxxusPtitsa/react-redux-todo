import React from 'react';
import PropTypes from 'prop-types';


const Title = ({title}) =>(
    <h1 className="todo__title title">{title}</h1>
);

Title.protoTypes = {
    title: PropTypes.string,
}

Title.defaultProps = {
    title: 'Simple title',
}

export default Title;
