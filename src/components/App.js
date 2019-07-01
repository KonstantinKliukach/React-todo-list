import React from 'react'

import AppHeader from './AppHeader';
import TodoList from './TodoList';
import SearchPanel from './SearchPanel';

const toDoListData =[
    {item:'Do something cool', important: true, id:1},
    {item:'Chill', important:false, id:2},
    {item:'Learn something new', important:false, id:3},
]

const App = () => {
    return (
        <React.Fragment>
            <AppHeader />
            <SearchPanel />
            <TodoList toDoListData={toDoListData}/>
        </React.Fragment>
    )
}

export default App;