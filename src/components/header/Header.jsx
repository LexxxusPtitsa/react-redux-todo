import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { clearTagFilter, changeFilter, deleteTag } from "../../actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";


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

export const Header = ({ amount, addFilter }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const tags = state.tags;
    const filter = state.filter;
    const tagFilter = state.tagFilter;


    const removeTag = (tag) => {
        let tagg = tagFilter;
        tag.isActive = false;
        let newTags = tags;
        newTags.map((value, key) => value.value === tag.value ? value.isActive = false : null);
        tagg = tagg.filter(tg => tg.value !== tag.value);
        dispatch(clearTagFilter(tagg, newTags));
    }


    return (
        <div className="todo__header">
            <span className="amount">
                {`${amount} Tasks left`}
            </span>
            <div className="todo__btns btn__group">
                {FILTERS_BTN.map(({ text, id }) => (
                    <Button
                        variant="contained"
                        onClick={() => dispatch(changeFilter(id))}
                        key={id}
                        color={id === filter ? 'primary' : 'default'}
                        className={id === filter ? 'todo__btn active' : 'todo__btn'}
                    >
                        {text}
                    </Button>
                ))
                }
            </div>
            {tags.length > 0 ?
                <div className="todo__tags-filter">
                    {tags.map((tag, key) => (
                        <div className="todo__tag-item" key={key} style={{ border: "1px solid " + tag.color + "", color: tag.color, opacity: tag.isActive ? 1 : 0.6 }}>
                            <span onClick={() => tag.isActive ? null : addFilter(tag)}>{tag.value}</span>
                            {tag.isActive ? <ClearIcon onClick={() => removeTag(tag)} fontSize="small" /> : ''}
                            <DeleteForeverIcon
                                onClick={() => { dispatch(deleteTag(tag.id)); removeTag(tag); }}
                                color="secondary"
                                fontSize="small"
                            />
                        </div>
                    ))}

                </div> : null}
        </div>)
};

