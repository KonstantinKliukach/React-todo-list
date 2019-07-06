import React, { useState } from 'react';

import './TodoListItem.css'

const TodoListItem = ({item, important, done, onToggleImportant, onToggleDone, deleteItem}) => {
    let wrapperClass = 'todo-list-item-label'

    if (important) {
        wrapperClass += ' todo-list-item-important'
    }

    if (done) {
        wrapperClass += ' todo-list-item-done'
    }

    return (
        <span className='todo-list-item'>
            <span className={wrapperClass} onClick={onToggleDone}>{item}</span>
            <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant} >
                <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={deleteItem}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}

export default TodoListItem;