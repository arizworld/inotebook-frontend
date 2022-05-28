import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';


const NoteItems = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote,showAlert } = props
  return (
    <div className="notes" >
      <div className="notes-header">
        <div className="header">
          <h4>{note.title}</h4>  
        </div>
        <div className="notes-icon">
          <i className="fa-solid fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
          <i className="fa-solid fa-trash" onClick={() => { deleteNote(note._id); showAlert('Note has been deleted','success') }}></i>
        </div>
      </div>
      <hr />
      <div className="notes-content">
        <p>{note.description}</p>
      </div>
    </div>

  )
}

export default NoteItems
