import React from 'react';

const Todo = props => {
    return (
        <div>
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