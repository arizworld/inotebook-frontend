import React,{useState} from 'react'
import Navbar from './Navbar';
import '../App.css';
import Home from './Home';
import NoteState from '../context/NoteState';
import About from './About';
import Footer from './Footer';
import Notes from './Notes';
import Login from './Login';
import SignUp from './SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route
}
from "react-router-dom";
import Alert from './Alert';
import ShowUser from './ShowUser';
const Views = () => {
  const [alert,setAlert] = useState(null);
  const showAlert = (msg,type)=>{
    setAlert({
      msg : msg,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  return (
    <Router>
       <NoteState>
      <Navbar />
      <Alert alert={alert}/>
      <ShowUser/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/notes" element={<Notes showAlert={showAlert} />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}/>
      </Routes>
      <Footer/> 
      </NoteState>
    </Router>
  )
}

export default Views
