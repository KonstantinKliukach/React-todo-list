import React, { useState, useEffect } from 'react';    

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'
import AddItem from '../AddItem'

import './App.css'

const toDoListData =[
    {item:'Do something cool', important: true, id:1, done: false,},
    {item:'Chill', important:false, id:2, done: false,},
    {item:'Learn something new', important:false, id:3, done: false,},
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
            done: false,
        }

        let newItems = [...items, newItem]
        changeItems(newItems)

    }

    const toggleProperty = (id, propName) => {
        const index = items.findIndex(el => el.id === id)
        const newItems = [...items]
        newItems[index][propName] = !items[index][propName]
        changeItems(newItems)

    }

    const onToggleImportant = (id) => {
        toggleProperty(id, `important`)
    }

    const onToggleDone = (id) => {
        toggleProperty(id, `done`)
    }

    let doneCount = items.filter(el => el.done).length

    useEffect(() => {
        doneCount = items.filter(el => el.done).length
    })     

    return (
        <div className="to-do-app">
            <AppHeader done={doneCount} total={items.length - doneCount}/>
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