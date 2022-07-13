import React from 'react'
import {Link} from 'react-router-dom' 
                 //(props)
const UserItem = ({user}) => {
return (
    <div>
{/* <Link to={`/users/${user.id}`} >{user.username} </Link> */}
            {/* (props.user.id)   (props.user.name) */}
            <ol class="list-group ">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold ">
        <Link to={`/users/${user.id}`} className='link-dark' > {user.username} 
      </Link>
</div>
      {user.company.name}
    </div>
    <span class="badge bg-dark rounded-pill">id : {user.id}</span>
    </li></ol>
   
</div>
)
}

export default UserItem