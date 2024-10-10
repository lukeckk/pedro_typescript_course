import React from 'react'
import { useSelector } from 'react-redux'

export function Home() {

  // redux example
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>This is home page</h1>
      <h1>This name is {username}</h1>
    </div>

  )
}

export default Home