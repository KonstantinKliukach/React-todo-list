import React from 'react'

import './AppHeader.css'

const AppHeader = () =>{
    return (
        <div className="app-header d-flex"> 
            <h1>My todo list</h1>
            <h2>3 things to do, 0 done</h2>
        </div>
    )
}

export default AppHeader;