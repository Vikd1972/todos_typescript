import React, { useState } from 'react';
import { useAppDispatch } from '../../Store/hooks';

import { deleteNote, noteIsDone, changeNote, Notes } from '../../Store/todoSlice';

import { DeleteButton, Record, RecordNote, TextOrEdit } from './Note.styled'

type Props = {
  note: Notes;
};

export const Note: React.FC<Props> = (props) => {

  const [changingNote, setChangingNote] = useState(false); 
  const [text, setText] = useState('');

  const dispatch = useAppDispatch()

  const onDeleteNote = () => {
    dispatch(deleteNote(props.note.id))   
  }

  const onNoteIsDone = () => {
    dispatch(noteIsDone(props.note.id))  
  }

  function preparigChange() {    
    setText(props.note.text)
    setChangingNote(!changingNote);
  }
  
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  function writingNewText(e: InputEvent) {
    setText(e.target.value);
  }

  type ButtonEvent = React.KeyboardEvent<HTMLFormElement>;
  function onChangeNote(e: ButtonEvent) {
    e.preventDefault()
    dispatch(changeNote({ id: props.note.id, text: text }));
    setChangingNote(!changingNote);
  }
  
  return (
    <Record /*theme={{font_color: 'red'}}*/>
      <RecordNote>
        <input
          className='note-is-done'
          type="checkbox"          
          onChange={onNoteIsDone}
          checked={props.note.isDone}>
          </input>
        <TextOrEdit>
          {changingNote ?
            <form
              className='edit'  
              onSubmit={onChangeNote}>
              <input
                className='edit-field'  
                value={text}
                onChange={writingNewText}/>
            </form>
          :
            <div  
              className={`${'note-text'} ${props.note.isDone ? 'record-is-done' : undefined}`}
              onDoubleClick={preparigChange}
            >{props.note.text}
            </div>
          }
        </TextOrEdit>
      </RecordNote>
      <DeleteButton
        onClick={onDeleteNote}
      ></DeleteButton>
    </Record>
  )
}

export default Note