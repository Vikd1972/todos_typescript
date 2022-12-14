import React from 'react';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';

import { clearCompleted, selectShowFiltered } from '../../Store/todoSlice';

import { ControlPanel, ControlPanelButton } from './Header.styled'


export const Header: React.FC = () => {
  const { showFiltered, notes } = useAppSelector(state => state.todo)

  const count = notes.filter(note => !note.isDone).length
  const clearBtn = notes.filter(note => note.isDone).length === 0

  const dispatch = useAppDispatch()
  
  

  return (<div>
    <ControlPanel
      illuminatebutton={showFiltered}>

      <div 
        className='count'>
        {count} items left
      </div>
      <ControlPanelButton
      >      
        <div
          className="button button-all"
          onClick={() => dispatch(selectShowFiltered('all'))}
        >All</div>
        <div
          className="button button-active"
          onClick={() => dispatch(selectShowFiltered('active'))}
        >Active</div>
        <div
          className="button button-completed"
          onClick={() => dispatch(selectShowFiltered('completed'))}
        >Completed</div>      
      </ControlPanelButton>
      <div       
        className={`button ${clearBtn ? 'button-clear' : ''}`}
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </div>
  </ControlPanel>
    </div>
  );
}

export default Header;