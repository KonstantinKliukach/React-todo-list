import React, { useState } from 'react';    

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import AddItem from '../AddItem'

import './App.css'

const toDoListData =[
    {item:'Do something cool', important: true, id:1},
    {item:'Chill', important:false, id:2},
    {item:'Learn something new', important:false, id:3},
]

const App = () => {

    const [items, changeItems] = useState(toDoListData);

    const deleteItem = (id) => {
        const index = items.findIndex(el => el.id === id)

        let newItems = [...items.slice(0, index), ...items.slice(index+1)]

        changeItems(newItems)
    }

    const addItem= (item) =>{

        const newItem = {
            item: item, 
            important: true, 
            id: items.length + 1,
        }

        let newItems = [...items, newItem]
        changeItems(newItems)

    }

    const onToggleImportant = (id) => {
        console.log(id)
    }

    const onToggleDone = (id) => {
        console.log(id)
    }
    
    return (
        <div className="to-do-app">
            <AppHeader />
            <div className='control-panel d-flex'>
                <SearchPanel />
                <Filter />
            </div>
            <TodoList toDoListData={items} deleteItem={(id)=>{deleteItem(id)}} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant}/>
            <AddItem addItem={(item)=>{addItem(item)}}/>
        </div>
    )
}

export default App;