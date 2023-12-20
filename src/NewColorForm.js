import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColor } from './colorSlice';
import { useNavigate } from 'react-router-dom';


function NewColorForm() {
    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState('#ffffff'); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addColor({ name: colorName, value: colorValue }));
        navigate('/colors');
    };

    const handleNameChange = (e) => {
        setColorName(e.target.value);
    };

    const handleValueChange = (e) => {
        setColorValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Color name:</label>
            <input 
                type="text" 
                id="colorName" 
                value={colorName} 
                onChange={handleNameChange} 
                placeholder="Enter color name" 
            />
            <label htmlFor="colorValue">Color value:</label>
            <input 
                type="color" 
                id="colorValue" 
                value={colorValue} 
                onChange={handleValueChange} 
            />
            <button type="submit">Add this color</button>
        </form>
    );
}

export default NewColorForm;
