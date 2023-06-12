import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logo from "../img/2.png";
import { UilPower } from '@iconscout/react-unicons'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <img className="nav-logo" src={logo} alt="logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className='user-name'>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout<UilPower size="15px" color="red"/></button>
      </div>
    </div>
  )
}

export default Navbar