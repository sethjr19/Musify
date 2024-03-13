import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/register", { name, email, password })
    .then(result => {console.log(result)
    })
    .catch(err => console.log(err))
}

  const getUsers = () => {
    axios.get("http://localhost:3001/getusers")
    .then(result => {
      console.log(result.data); // Assuming data contains the users
    })
    .catch(err => console.log(err.message));
  }

  return (
    <>
      GET USERS 
      <button onClick={getUsers}></button>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2><center>Sign Up</center></h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Name' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Sign Up
                </button>
                </form>
                <p>Already have an account?</p>
            
        </div>
    </div>
    </>
  )
}

export default App
