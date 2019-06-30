import React from 'react'

import AppHeader from './AppHeader';
import TodoList from './TodoList';
import SearchPanel from './SearchPanel';

const App = () => {
    return (
        <React.Fragment>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </React.Fragment>
    )
}

export default App;