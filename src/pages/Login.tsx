import React from 'react'
import { useState } from 'react'
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export function Login() {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  // display the name 
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <div>
      <h1>This is the log in page</h1>
      <h1>{username}</h1>
      {/* Gets user input */}
      <input onChange={(e) => {setNewUsername(e.target.value)}}/>
      {/* passing in parameter because login requires "action" in store.ts */}
      <button onClick={() => dispatch(login({username: newUsername}))} >Login</button>
      <button onClick={() => dispatch(logout())} >Logout</button>
    </div>
   

  )
}

export default Login