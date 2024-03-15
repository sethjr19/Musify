import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Register.css'
import * as Yup from 'yup'

const Login = () => {

    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
      });

    const [error, setError] = useState('');
    
    const validationSchema = Yup.object({
      email:Yup.string().required('Email is required').min(5, 'Username is too short'),
      password:Yup.string().required('Password is required').min(8, 'Password must be 8 characters')

    })
  
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
        setError('');
      };
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      try{
        await validationSchema.validate(inputFields, {abortEarly: false});
        setError('');
        setInputFields({email: '', password: ''});
        console.log('Form submitted', inputFields);
        const response = await axios.post("http://localhost:3001/register", inputFields);
      } catch (error) {
        const errorText = error.inner[0].message
        setError(errorText)
      }
        
      }
        // Handle success scenario
      
    

  return (
    <>
    <div className="page-container">
      <div className="form-container">
        <div className="form">
        <div className="form-header">
          <h1 className='mt-3'>Log in  </h1>
        </div>
        <div>
          <div>
              <form onSubmit={handleSubmit}>
                  <div className="mt-5">
                      <label htmlFor="email">
                          <strong>Email</strong>
                      </label>
                      <input type="text" 
                      placeholder='Enter Email' 
                      autoComplete='off' 
                      name='email' 
                      onChange={handleChange}
                      required
                      />
                      <span class="focus-border"></span>
                  </div>

                  <div className="mb-2">
                      <label htmlFor="password">
                          <strong>Password</strong>
                      </label>
                      <input type="password" 
                      placeholder='Enter Password' 
                      name='password' required
                      onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                      
                  </div>
                    <div className='error-text'>
                      <h2><b>{error}</b></h2>
                  </div>
                  <button type="submit" className="btn btn-success w-100 rounded-0 mt-2 mb-2">
                      Sign Up
                  </button>
                
              </form>
                <span className='d-flex'>
                    <b><p className='mx-1'>Already have an account?</p></b>
                    <p><b>Log In</b></p>
                </span>
               
                 
              
          </div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login;