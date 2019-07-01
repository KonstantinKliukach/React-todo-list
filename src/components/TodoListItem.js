import React from 'react';

const TodoListItem = ({item, important = false}) => {
    
    const spanStyle = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={spanStyle}>{item}</span>;
}

export default TodoListItem;