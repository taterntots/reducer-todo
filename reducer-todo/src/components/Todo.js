import React from 'react';

const Todo = props => {
    // console.log(props.task.id);
    return (
        <div className= {`task ${props.task.completed ? 'completed' : ''}`} 
        onClick={() => 
            props.dispatch({ type: 'TOGGLE_TASK', payload: props.task.id })}>
            <p>{props.task.item}</p>
        </div>
    )
}

export default Todo;

{/* <div className={`task ${props.task.completed ? 'completed' : ''}`}
            key={props.task.id}
            onClick={event => {
                props.toggleComplete(props.task.id)
            }}></div> */}