import React, { useContext } from 'react'
import { NoteContext } from '../../Context/NotesContext'

function AllNotes() {
  const { notes } = useContext(NoteContext);
  return (
    <div className='AllNotes'>
          {notes.map((note) => {
              <a key={note.id} {...notes}></a>
          })}
    </div>
  )
}

export default AllNotes