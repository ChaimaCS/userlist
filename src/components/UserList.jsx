import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import UserItem from './UserItem'
const UserList = () => {
  const [users, setUsers]= useState(null);
  const [loading, setLoading]= useState (true)
  const [error, setError]= useState ("")
  useEffect(()=> {
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //     console.log(res.data);
  //   setUsers(res.data);
  //   setLoading(false);
  // })
  //   .catch(error => {console.log(error.message);
  //   });

  const getUsers =  async () => {
    try {
      const res= await axios.get("https://jsonplaceholder.typicode.com/users")
  
  setUsers(res.data);
  setLoading(false);
    } catch (error) {
      console.log(error.message)
      setError(error.message)
      setLoading(false)

    } 
    };
    getUsers();
  },[]);
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
    <div className='container'><center><h1 className='p-5'> User's list</h1></center>
<div className='row'>{users.map(user=> <UserItem user={user} key={user.id}/>)}</div>
    </div>
  )
}

export default UserList