import React, { useState} from 'react'
import { useNavigate } from "react-router-dom"
const Login = ({showAlert}) => {
    const host = "https://i-note-book-app.herokuapp.com"
    let navigate = useNavigate()
    const [credentials,setCredentials] = useState({email : "", password : ""})
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name] : e.target.value});

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/authentication/login`,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email : credentials.email,password : credentials.password})
        });
        const res = await response.json()
        if(res.success){
          showAlert('Logged in successfully','success')
          localStorage.setItem("token", res.token)
          navigate('/notes');
        }else{
          let error = res.error;
          showAlert(error,'warning')
        }
    }
  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
              <div className="form-row"> <input type="email" onChange={onChange} value={credentials.email} className="form-control" name="email" placeholder="Email" required/> </div>
              <div className="form-row"> <input type="password" onChange={onChange} value={credentials.password} className="form-control" name="password" placeholder="Password" required minLength={5} /> </div>
              <button className='btn btn-primary'>Login</button>
        </form>
      </div>
  )
}

export default Login
