import { Fragment } from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import UserList from './components/UserList';
import User from './components/User';
function App() {
  return (
    <Fragment>
    <Routes>
      <Route path='/' element={<Navigate to='/users'/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/users/:id' element={<User/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
