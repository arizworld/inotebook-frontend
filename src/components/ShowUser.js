import React, { useContext,useEffect,useState } from 'react'
import NoteContext from '../context/NoteContext'
const ShowUser =  () => {
    const [user, setUser] = useState({ email: '', name: '', userName: '' })
    const {showUser,isLogin} = useContext(NoteContext)
    useEffect(()=>{
        const res =  showUser();
        res.then(results=>{
            if(results){
                setUser(results)
            }else{
                setUser({ email: '', name: '', userName: '' })  
            }
        }).catch(err=>{console.log(err)})
    },[isLogin])
    
  return (
    <div className="user">
        <h3> Hello!!! {user.name}</h3>
    </div>
  )
}

export default ShowUser
