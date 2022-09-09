import React from 'react';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';

import { clearCompleted, selectShowFiltered } from '../../Store/todoSlice';

import { ControlPanel, ControlPanelButton, ButtonFilter } from './Header.styled'

export const Header: React.FC = () => {
  const { showFiltered, notes } = useAppSelector(state => state.todo)

  const count = notes.filter(note => !note.isDone).length
  const clearBtn = notes.filter(note => note.isDone).length === 0

  const dispatch = useAppDispatch()

  return (<div>
    <ControlPanel>
      <div 
        className='count'>
        {count} items left
      </div>
      <ControlPanelButton
      >      
        <ButtonFilter
          illuminatebutton={showFiltered === 'all'}
          onClick={() => dispatch(selectShowFiltered('all'))}
        >All</ButtonFilter>
        <ButtonFilter
          className='button'
          illuminatebutton={showFiltered === 'active'}
          onClick={() => dispatch(selectShowFiltered('active'))}
        >Active</ButtonFilter>
        <ButtonFilter
          className='button'
          illuminatebutton={showFiltered === 'completed'}
          onClick={() => dispatch(selectShowFiltered('completed'))}
        >Completed</ButtonFilter>      
      </ControlPanelButton>
      <ButtonFilter        
        className={`${'button'} ${clearBtn ? 'button-clear' : undefined}`}
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </ButtonFilter>
  </ControlPanel>
    </div>
  );
}

export default Header;