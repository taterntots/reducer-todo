import React from 'react';

const Todo = props => {
    return (
        <div className={`task ${props.task.completed ? 'completed' : ''}`}
            key={props.task.id}
            onClick={event => {
                props.toggleComplete(props.task.id)
            }}>
            <p>{props.task.item}</p>
        </div>
    )
}

export default Todo;