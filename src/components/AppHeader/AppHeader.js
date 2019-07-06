import React from 'react'

import './AppHeader.css'

const AppHeader = ({done, total}) =>{
    return (
        <div className="app-header d-flex"> 
            <h1>My todo list</h1>
            <h2>{`${total} things to do, ${done} done`}</h2>
        </div>
    )
}

export default AppHeader;