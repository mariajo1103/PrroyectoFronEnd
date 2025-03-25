import React, { useState, useEffect  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/StyLogin.css"
import Llamados from '../services/Llamados'
import Swal from 'sweetalert2'

function ForRegister() {  

  const [nombreUsuario, setNombreUsuario]= useState("")
  const [passwordUsuario, setPassword]= useState("")
  const [correoUsuario, setCorreo]= useState("")
  const [Usuarios, SetUsuarios]= useState([])

  const navigate= useNavigate()

    useEffect(() => {
  
      async function fetchDaraUsers() {
  
        const datos = await Llamados.getUsers()
  
        SetUsuarios(datos)
        
        
      };
  
      fetchDaraUsers();
  
  
    }, []);


  function nombre(evento) {
    setNombreUsuario(evento.target.value.trim())
  }

  function password(evento) {
    setPassword(evento.target.value.trim())
  }

  function correo(evento) {
    setCorreo(evento.target.value.trim())
  }


  function cargar() {

    if(nombreUsuario === "" || passwordUsuario === "" || correoUsuario ==="" ){
          Swal.fire({
            title: "Por favor complete los campos!",
            icon: "info",
          })
    }
    else {
      if((correoUsuario.includes("@"))) {

        const encontrado = Usuarios.filter(usuario => usuario.nombre == nombreUsuario)
        if(encontrado.length > 0) {
          Swal.fire({
            title: "El usuario ya existe, por favor ingrese otro nuevamente!",
            icon: "info",
          })
          setTimeout(() => {
            
            location.reload()
          }, 1000);
          
        }
        else {
          
          Llamados.postUsers(nombreUsuario, correoUsuario, passwordUsuario)

            Swal.fire({
                title: "Usuario registrado correctamente!",
                icon: "success",
            })
            setTimeout(() => {
              navigate("/Login")
              
            }, 3000);

          
        }
      }
        
    }
  }

  return ( 
<section className='ContFather'>

  <div class="form-container">
    <p class="title">Registrarse</p>
        <div class="input-group">
          <label for="name">Nombre</label>
          <input value={nombreUsuario} onChange={nombre} type="text" placeholder='Nombre' /><br />
        </div>

        <div class="input-group">
          <label htmlFor="correo">Correo</label> 
          <input value={correoUsuario} onChange={correo} type="email" placeholder='Correo' /><br />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input value={passwordUsuario} onChange={password} type="password" placeholder='Contraseña'/><br />
        </div><br />

        <div className="btnRegister">

        <button onClick={cargar}>REGISTRARME</button>
        </div>


      <div class="social-message">
        <div class="line"></div>
        <div class="line"></div>
      </div>


      <p>¿Ya tienes cuenta?  <Link to={'/Login'} >Iniciar Sesion</Link></p>
      

  </div>
 </section>
  
  )
}

export default ForRegister
