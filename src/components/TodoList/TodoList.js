import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

const TodoList = ({toDoListData, deleteItem, onToggleDone, onToggleImportant}) =>{
    return (
        <ul className="list-group"> 
            {toDoListData.map(item => {
                const {id, ...itemProps} = item

                return (
                    <li key={id} className="list-group-item todo-list">
                        <TodoListItem {...itemProps} 
                            deleteItem={()=>deleteItem(id)} 
                            onToggleImportant={() =>{onToggleImportant(id)}}
                            onToggleDone={() => {onToggleDone(id)}}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;
