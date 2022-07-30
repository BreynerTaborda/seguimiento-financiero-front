import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
        <p>INICIAR SESION</p>
      </div>
      <div className='row'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="FaUserAlt"><FaUserAlt /></span>
          <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="FaUserAlt" />
        </div>
      </div>
      <div className='row'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="FaUserAlt"><RiLockPasswordFill /></span>
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="FaUserAlt" />
        </div>
      </div>
      <div className='row'>
        <div className="input-group mb-3" id="iniciarSesion">
        <button type="button" className="btn btn-primary">Iniciar Sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Login