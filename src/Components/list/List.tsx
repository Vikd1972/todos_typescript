import React from 'react';
import { useAppSelector } from '../../Store/hooks';

import Note from '../note/Note';
import { getShowNotes } from '../../Store/selector';


function List() {
  const noteList  = useAppSelector(getShowNotes)
  return (
    <div>
      {noteList.map(note => (
        <div key={note.id}>
          <Note
            note={note}
          />
        </div>
      ))}
    </div>

  )
}

export default List;