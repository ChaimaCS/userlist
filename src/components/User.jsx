import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
const User = () => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState (true)
    const [error, setError]= useState ("")
const {id}= useParams();
const navigate=useNavigate()
useEffect(()=>{
    const getUserDetail= async () =>{
        try {
            const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setLoading(false)
        }
    }
    getUserDetail()
},[id])
const handleClick=()=> navigate ('/users')
if (loading) {
    return(
        <div class="d-flex justify-content-center pt-5 m-5 text-primary">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  if (error) {
    return(
    <div class="d-flex justify-content-center alert alert-secondary" role="alert">
        {error}
    </div>
    )
  }
  return (
    <div> <center><h1 className='p-5'> User's details</h1></center>
        <table class="table  table-dark table-hover">
        <tbody>
        <tr>
      <th scope="row"></th>
      <td>id</td>
      <td>{user.id}</td>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>Name</td>
      <td>{user.name}</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>email</td>
      <td>{user.email}</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td >Phone</td>
      <td>{user.phone}</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td >Address</td>
      <td>{user.address.street}</td>
    </tr>
    <tr>
      <th scope="row">E</th>
      <td >Website</td>
      <td>{user.website}</td>
    </tr>
    <tr>
      <th scope="row">F</th>
      <td >Company name</td>
      <td>{user.company.name}</td>
    </tr>
    <tr>
      <th scope="row">G</th>
      <td >Company catchPhrase</td>
      <td>{user.company.catchPhrase}</td>
    </tr>
  </tbody>
</table>
        
<button className='btn btn-dark m-4' onClick={handleClick}>go back</button>

    </div>
  )
}

export default User