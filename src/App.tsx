import React from 'react';
import Todolist from './Components/todolist/Todolist';
import { ThemeProvider } from 'styled-components'
import { myTheme } from './baseTheme';

import { TodoField } from './App.styled'

function App() {
  return (    
    <ThemeProvider theme={myTheme}>
    <TodoField>
      <div className='todo-name'>
        TODOS
      </div>
        <Todolist />   
     </TodoField>
    </ThemeProvider>
  );
}

export default App;
