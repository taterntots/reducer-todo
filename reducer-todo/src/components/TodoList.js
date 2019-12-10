import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

const TodoList = () => {
    const [listState, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>My Todo List</h1>
            {listState.map(task => (
                <Todo key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TodoList;