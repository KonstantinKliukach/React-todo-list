import React from 'react';

import TodoListItem from './TodoListItem';

import './TodoList.css';

const TodoList = ({toDoListData}) =>{
    return (
        <ul className="list-group"> 
            {toDoListData.map(item => {
                const {id, ...itemProps} = item

                return (
                    <li key={id} className="list-group-item todo-list"><TodoListItem {...itemProps}/></li>
                )
            })}
        </ul>
    )
}

export default TodoList;
