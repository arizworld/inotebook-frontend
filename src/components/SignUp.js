import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
  
const SignUp = ({showAlert}) => {
  const host = "https://i-note-book-app.herokuapp.com"
  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({
    name : '',
    email : '',
    userName : '',
    password : '',
    cpassword : '',
  })
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name] : e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(credentials.password === credentials.cpassword){
        // Api call
        const response = await fetch(`${host}/api/authentication/createuser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name : credentials.name,email : credentials.email,userName: credentials.userName,password : credentials.password})
        });
        const res = await response.json()
        if(res.errors){
          res.errors.forEach(err => {
            showAlert(`${err.param}:${err.msg}`,'warning')
          });
        }else{
          if(res.success){
            // final code
            showAlert('Account Created successfully','success')
            localStorage.setItem("token",res.token);
            navigate("/login");
          }
        }
    }else{
      showAlert('password and confirm password doesnt match','warning')
    }
  }
  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit}>
        <div className="form-row"> <input type="name" onChange={onChange} value={credentials.name} className="form-control" name="name" placeholder="Name" required minLength={3}/> </div>
              <div className="form-row"> <input type="email" onChange={onChange} value={credentials.email} className="form-control" name="email" placeholder="Email" required/> </div>
              <div className="form-row"> <input type="text" onChange={onChange} value={credentials.userName} className="form-control" name="userName" placeholder="Username" required /> </div>
              <div className="form-row"> <input type="password" onChange={onChange} value={credentials.password} className="form-control" name="password" placeholder="Password" required minLength={5} /> </div>
              <div className="form-row"> <input type="password" onChange={onChange} value={credentials.cpassword} className="form-control" name="cpassword" placeholder="Confirm Password" required minLength={5} /> </div>
              <button className='btn btn-primary'>Sign Up</button>
        </form>
      </div>
  )
}

export default SignUp
