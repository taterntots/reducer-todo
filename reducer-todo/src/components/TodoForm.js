import React, { useState } from 'react';

const TodoForm = (props) => {  
    const [inputText, setInputText] = useState('');

    const handleChanges = event => {
        event.preventDefault();
        // props.dispatch({ type: 'ADD_TASK' });
        setInputText(event.target.value);
    }

    return (
        <div>
            <form>
                <input 
                    className='inputBar' 
                    type='text' 
                    name='task' 
                    placeholder='...add task' 
                    autoComplete='off' 
                    onChange={handleChanges}
                />
                <button 
                    className='buttons'
                    onClick={(event) => {
                        event.preventDefault();
                        props.dispatch({ type: 'ADD_TASK', payload: inputText });
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm;