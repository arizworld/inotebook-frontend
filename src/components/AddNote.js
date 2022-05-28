import React,{useContext, useState} from 'react'
import NoteContext from '../context/NoteContext'

const AddNote = ({showAlert}) => {
  const context = useContext(NoteContext)
  const {addNote} = context
  const [notes,setNotes] = useState({title : "",description : "",tag: ""})
  const handleSubmit =(e)=>{
    e.preventDefault()
      addNote(notes);
      setNotes({title : "",description : "",tag: ""})
      showAlert('Note has been added','success')
  }
  const onChange=(e)=>{
    setNotes({...notes,[e.target.name]:e.target.value});
  }
  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
              <div className="form-row"> <input type="text" onChange={onChange} value={notes.title} className="form-control" name="title" placeholder="Title" required minLength={3} /> </div>
              <div className="form-row"> <textarea type="text" onChange={onChange} value={notes.description} className="form-control" name="description" placeholder="Description" minLength={6} required ></textarea> </div>
              <div className="form-row"> <input type="text" onChange={onChange} value={notes.tag} className="form-control" name="tag" placeholder="Tag" /> </div>
              <button className='btn btn-primary'>Add Note</button>
        </form>
      </div>
  )
}

export default AddNote
