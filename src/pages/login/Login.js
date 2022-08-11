import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const registerUsuarioSchema = Yup.object().shape({
    usuario: Yup.string().trim()
        .max(60, 'Máximo 60 caracteres')
        .required('Este campo es obligatorio'),
    clave: Yup.string()
        .required('Este campo es obligatorio')
        .matches('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,20}$', 'La clave debe tener al entre 8 y 20 caracteres, un dígito, una letra minúscula y una letra mayúscula.'),
  });

  const login = () =>{
    console.log("Buenas");
  }

  const formik = useFormik({
    initialValues: {
      usuario: '',
        clave: '',
    },
    validationSchema: registerUsuarioSchema,
    onSubmit: login,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='container'>
        <div className="card">
          <h5 className="card-header">INICIAR SESION</h5>
          <div className="card-body">
            <div className="container">
              <div className='row'>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="FaUserAlt"><FaUserAlt /></span>
                  <input type="text" className="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="FaUserAlt" 
                    {...formik.getFieldProps('usuario')}
                  />
                  {formik.touched.usuario && formik.errors.usuario ? (<div className="invalid">{formik.errors.usuario}</div>) : null}
                </div>
              </div>
              <div className='row'>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="FaUserAlt"><RiLockPasswordFill /></span>
                  <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="FaUserAlt" 
                    {...formik.getFieldProps('clave')}
                  />
                  {formik.touched.clave && formik.errors.clave ? (<div className="invalid">{formik.errors.clave}</div>) : null}
                </div>
              </div>
              <div className='row'>
                <div className="input-group mb-3" id="iniciarSesion">
                <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Iniciar Sesión</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login