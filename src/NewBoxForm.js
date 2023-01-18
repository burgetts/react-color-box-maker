import React, {useState} from 'react';
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) => {
    const initialState = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(formData)
        setFormData(initialState)
    }
    return (
        <form onSubmit={handleSubmit} className="NewBoxForm"> 
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="200px"
                value={formData.width}
                onChange={handleChange}
                >
            </input>
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="200px"
                value={formData.height}
                onChange={handleChange}
                >
            </input>
            <label htmlFor="backgroundColor">Background Color</label>
            <select 
                id="backgroundColor"
                name="backgroundColor"
                onChange= {handleChange}
                value={formData.backgroundColor}>
                <option value="">Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select> 
            <button> Add Box </button>
        </form>
    )
}

export default NewBoxForm;