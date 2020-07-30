import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    }
];

export const Header = ({ amount, activeFilter, changeFilter, tagFilter, clearTagFilter }) => {
    
    return (
        <div className="todo__header">
            <span className="amount">
                {`${amount} Tasks left`}
            </span>
            <div className="todo__btns btn__group">
                {FILTERS_BTN.map(({ text, id }) => (
                    // <Button variant="contained" >Default</Button>
                    <Button
                        variant="contained"
                        onClick={() => changeFilter(id)}
                        key={id}
                        color={id === activeFilter ? 'primary' : 'default'}
                        className={id === activeFilter ? 'todo__btn active' : 'todo__btn'}
                    >
                        {text}
                    </Button>
                ))
                }
            </div>
            {tagFilter !== "" ?
            <div className="todo__tags-filter">
                <div className="todo__tag-item">
                    <span>{tagFilter}</span>
                    <ClearIcon onClick={() => clearTagFilter()} fontSize="small" />
                </div>
            </div> : null}
        </div>)
};

