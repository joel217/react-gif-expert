import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('One Punch')
    const onInputChance = (event) => {
        //console.log(event.target.value)
        setInputValue(event.target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim())
        setInputValue('')
        
    };
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar GIF's"
            value={ inputValue }
            onChange={ (event) => onInputChance(event) }
            />
        </form>
        
    )
};