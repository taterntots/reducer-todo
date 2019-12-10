import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [listState, dispatch] = useReducer(reducer, initialState);
  console.log(listState);
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm dispatch={dispatch} />
        <TodoList listState={listState} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;