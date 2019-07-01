import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = ({toDoListData}) =>{
    return (
        <ul>
            {toDoListData.map(item => {
                const {id, ...itemProps} = item

                return (
                    <li key={id}><TodoListItem {...itemProps}/></li>
                )
            })}
        </ul>
    )
}

export default TodoList;
