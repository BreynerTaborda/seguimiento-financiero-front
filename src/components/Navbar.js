import React from 'react'
import {NavLink} from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink 
                className={({isActive}) => (isActive ? "active":"")}    
                to="/">Home</NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive}) => (isActive ? "active":"")} 
                to="/contacts">contactos</NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive}) => (isActive ? "active":"")} 
                to="/dashboard">darshboard</NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive}) => (isActive ? "active":"")} 
                to="/users">users</NavLink>
            </li>
            <li>
                <NavLink 
                className={({isActive}) => (isActive ? "active":"")} 
                to="/user"></NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar