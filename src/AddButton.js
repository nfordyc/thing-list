import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
    return <button className="add-thing" onClick={props.click}>Add Thing</button>
}

export default AddButton