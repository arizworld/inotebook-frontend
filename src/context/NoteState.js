import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "https://energetic-ray-tunic.cyclic.app"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  const [isLogin,setIslogin]= useState(false);

  const showUser = async () => {
    if (localStorage.getItem('token')) {
      try {
        const user = await fetch(`${host}/api/authentication/showuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
          }
        });
        const res = await user.json();
        return res
      } catch (error) {
        console.log(error.message);
      }

    }
  }


  // getAllNotes
  const getAllNotes = async () => {
    //  Api call 
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        }
      });
      const res = await response.json()
      setNotes(res)
    } catch (error) {
      console.log(error.message);
    }

  }


  // Add a Note 
  const addNote = async ({ title, description, tag }) => {
    //  Api call 
    try {
      const response = await fetch(`${host}/api/notes/createnewnote`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const res = await response.json()
      console.log(res)
      const note = {
        "_id": res._id,
        "title": title,
        "description": description,
        "tag": tag,
      }
      setNotes(notes.concat(note))
      console.log('new note added')
    } catch (error) {
      console.log(error.message);
    }
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //  Api call 
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const res = await response.json()
      console.log(res);
      // Logic to edit client side
      const newNotes = notes.map((note) => {
        if (note._id === id) {
          note.title = title
          note.description = description
          note.tag = tag
        }
        return({note,success: true})
      })
      setNotes(newNotes)

    } catch (error) {
      console.log(error.message);
      return({success: false,msg: error.message})
    }
  }
  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        }
      });
      const res = await response.json()
      console.log(res)
      const newNotes = notes.filter((note) => {
        return note._id !== id
      })
      setNotes(newNotes);
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getAllNotes, showUser,isLogin,setIslogin }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
