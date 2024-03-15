import { useState } from 'react'
import './App.css'
import './pages/Register'
import axios from 'axios'
import Register from './pages/Register'
import Login from './pages/Login'
import Users from './pages/Users'

function App() {


  return (
    <>
    <h1 className='site-logo'>Musify</h1>
      <Register/>
      <Login/>
      <h1>Users</h1>
      <Users/>
    </>
  )
}

export default App
