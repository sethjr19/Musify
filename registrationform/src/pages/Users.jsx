import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Users.css'

const Users = () => {
const [users,setUsers] = useState([])

    useEffect(()=> {
        fetchUsers();
    }, [])

    
    const fetchUsers = () => {
        axios.get('http://localhost:3001/getusers')
        .then(users => setUsers(users.data))
        .catch(err => console.log(err))
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
        .then(() => {
            // If deletion is successful, fetch the updated list of users
            fetchUsers();
        })
        .catch(err => console.log(err))
    }

  return (

    <div>
        <button onClick={fetchUsers}>Fetch new Users</button>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(users => {
                      return  <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.password}</td>
                            <td>{users._id}</td>
                            <td><button onClick={() => deleteUser(users._id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Users