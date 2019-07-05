import React from 'react';

import './AddItem.css'

const AddItem = ({addItem}) => {
    return (
        <form className='add-item-panel d-flex'>
            <input className="add-input form-control" placeholder="What we need to do?" />
            <button type="submit" className="btn btn-outline-primary" 
                onClick={(e)=>{
                    e.preventDefault(); 
                    addItem('Add new function')}
                }>Add
            </button>

        </form>
    )
}

export default AddItem;