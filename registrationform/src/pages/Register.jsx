import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Register.css'
import * as Yup from 'yup'


const Register = () => {

    const [inputFields, setInputFields] = useState({
      name:"",
      email: "",
      password: "",
    });

    const [submitText, setSubmitText] = useState({
      name:"",
      email: "",
      password: "",
    });
    const [error, setError] = useState('');

    const validationSchema = Yup.object({
      name:Yup.string().required('Username is required').min(5,'Username too short'),
      email:Yup.string().required('Email is required').min(5, 'Invalid Email'),
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
        console.log('Form submitted', inputFields);
        const response = await axios.post("http://localhost:3001/register", inputFields);
        }
      catch (error) {
        setInputFields(submitText)
        const errorText = error.inner[0].message
        setError(errorText) 
        }  
    }

  return (
    <>
    <div className="page-container">
      <div className="form-container">
        <div className="form">
        <div className="form-header">
          <h1 className='mt-3'>Register </h1>
        </div>
        <div>
          <div>
              <form onSubmit={handleSubmit}>

                  <div className="mt-4">
                      <label htmlFor="name">
                          <strong>Username</strong>
                      </label>

                      <input type="text" 
                      placeholder='Enter Name' 
                      autoComplete='off' 
                      name='name' 
                      onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                  </div>

                  <div className="">
                      <label htmlFor="email">
                          <strong>Email</strong>
                      </label>
                      <input type="text" 
                      placeholder='Enter Email' 
                      autoComplete='off' 
                      name='email' 
                      onChange={handleChange}
                      />
                      <span class="focus-border"></span>
                  </div>

                  <div className="mb-3">
                      <label htmlFor="password">
                          <strong>Password</strong>
                      </label>
                      <input type="password" 
                      placeholder='Enter Password' 
                      name='password' 
                      onChange={handleChange}

                      />
                      <span class="focus-border"></span>
                  </div>

                    <div className='error-text'>
                      <h2><b>{error}</b></h2>
                    </div>

                  <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
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

export default Register