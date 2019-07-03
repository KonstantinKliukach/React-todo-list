import React from 'react'

import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import Filter from '../Filter/Filter'

import './App.css'

const toDoListData =[
    {item:'Do something cool', important: true, id:1},
    {item:'Chill', important:false, id:2},
    {item:'Learn something new', important:false, id:3},
]

const App = () => {
    return (
        <div className="to-do-app">
            <AppHeader />
            <div className='control-panel d-flex'>
                <SearchPanel />
                <Filter />
            </div>
            <TodoList toDoListData={toDoListData}/>
        </div>
    )
}

export default App;