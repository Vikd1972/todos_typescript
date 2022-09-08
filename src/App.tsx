import React from 'react';

import Todolist from './Components/todolist/Todolist';

import {TodoField} from './App.styled'

function App() {
  return (
    <TodoField>
      <div className='todo-name'>
        TODOS
      </div>
      <Todolist />      
    </TodoField>
  );
}

export default App;
