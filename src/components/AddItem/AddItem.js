import React, { useState } from 'react';

import './AddItem.css'

const AddItem = ({addItem}) => {
    const [newItem, addNewItem] = useState('');

    const onButtonClick = () => {
        if (!newItem) {
            return
        } 
        addItem(newItem)
        addNewItem('')
    }

    return (
        <form className='add-item-panel d-flex' onSubmit={(e)=>{
                e.preventDefault(); 
                onButtonClick()}
            }>
            <input className="add-input form-control" placeholder="What we need to do?" onChange={(e)=>addNewItem(e.target.value)} value={newItem}/>
            <button type="submit" className="btn btn-outline-primary" >Add</button>

        </form>
    )
}

export default AddItem;