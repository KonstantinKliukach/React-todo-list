import React from 'react';

import TodoListItem from '../todoListItem/TodoListItem';

import './TodoList.css';

const TodoList = ({toDoListData, deleteItem}) =>{
    return (
        <ul className="list-group"> 
            {toDoListData.map(item => {
                const {id, ...itemProps} = item

                return (
                    <li key={id} className="list-group-item todo-list"><TodoListItem {...itemProps} deleteItem={()=>deleteItem(id)}/></li>
                )
            })}
        </ul>
    )
}

export default TodoList;
