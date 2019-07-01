import React from 'react';

import './TodoListItem.css'

const TodoListItem = ({item, important = false}) => {

    return (
        <span className='todo-list-item'>
            <span className={important ? 'todo-list-item-important todo-list-item-label' : 'todo-list-item-simple todo-list-item-label'}>{item}</span>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
                </button>
        </span>
    )
}

export default TodoListItem;