import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useAppSelector, useAppDispatch } from '../../Store/hooks'
import { addNewNote, allIsDone } from '../../Store/todoSlice';
import { InputForm } from './InputField.styled'

function InputField() {
  const [text, setText] = useState('')

  const isDoneAll = useAppSelector(state => state.todo.isDoneAll)

  const dispatch = useAppDispatch()

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  
  const onSaveNewNote = (e: React.KeyboardEvent<HTMLFormElement>) => {  
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    dispatch(
      addNewNote({
        id: nanoid(),
        text,
        isDone: false,
      })
    )
    setText('')    
  }

  const onAllIsDone = () => {
    dispatch(allIsDone())
  }

return (  
  <InputForm
    onSubmit={onSaveNewNote}
   >
    <input
      className='is-done-all' 
      type="checkbox"    
      checked={isDoneAll}
      onChange={onAllIsDone}          
    ></input>
    <input
      className='input-text'
      value={text}
      onChange={onTextChanged}
      placeholder='What needs to be done?'
    ></input>
  </InputForm>  
  )
}

export default InputField;