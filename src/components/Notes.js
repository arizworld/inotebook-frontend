import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteItems from './NoteItems';
import NoteContext from '../context/NoteContext';
import AddNote from './AddNote';

const Notes = ({showAlert}) => {
  const navigate = useNavigate()
  const context = useContext(NoteContext);
  const { notes, getAllNotes, editNote } = context;
  const [note,setNote] = useState({id: "",etitle : "",edescription : "",etag: ""})
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      getAllNotes();
    }else{
        navigate('/login')
        showAlert('You need to login first','warning')
    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refclose = useRef();
  const updateNote = (currentNote)=>{
      ref.current.click()
      setNote({ 
        id : currentNote._id,
        etitle: currentNote.title,
        edescription : currentNote.description,
        etag: currentNote.tag,
      });
  }
  const handleClick =(e)=>{
    e.preventDefault()
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refclose.current.click()
    showAlert('Note has been updated','success')      
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value});
  }
  return (
    // form
    <>
      <AddNote showAlert={showAlert}/>


      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                    <div className="form-row"> <input type="text" onChange={onChange} className="form-control" name="etitle" value={note.etitle} placeholder="Title" /> </div>
                    <div className="form-row"> <textarea type="text" onChange={onChange} className="form-control" name="edescription" value={note.edescription} placeholder="Description" ></textarea> </div>
                    <div className="form-row"> <input type="text" onChange={onChange} className="form-control" name="etag" value={note.etag} placeholder="Tag" /> </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length < 3 || note.edescription.length<5} className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="notes-container">
        {/* notes */}
        {notes.length === 0 && <div className='notes no-notes'>No Notes available</div>}
        {notes.map((note) => {
          return (
            <NoteItems key={note._id} updateNote={updateNote} note={note} showAlert={showAlert} ></NoteItems>
          )
        })
        }
      </div>
    </>
  )
}

export default Notes
