import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import "../styles/StyLogin.css"
import Llamados from '../services/Llamados'
import Swal from 'sweetalert2'

function InicioSesion() {

  const [nombreUsuario,SetNombreUsuario]=useState()
  const [passwordUsuario,SetPasswordusuario]=useState()
  const [usuarios, SetUsuarios]=useState()

  const navigate = useNavigate()

  useEffect(() => {

    async function fetchDaraUsers() {

      const datos = await Llamados.getUsers()

      SetUsuarios(datos)
      
      
    };

    fetchDaraUsers();


  }, []);

  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
  }

  function password(evento) {
    SetPasswordusuario(evento.target.value)
  }

  function iniciar() {

    
    const encontrado = usuarios.filter(usuario => usuario.nombre === nombreUsuario && usuario.contraseña === passwordUsuario)
    
    
    if (encontrado.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrecto",
      });
    } 
    if (encontrado[0].rol === "admin") {
      navigate("/Admi")
      localStorage.setItem("UserAutenticado", JSON.stringify(nombreUsuario))

    } else {
      navigate("/")
      localStorage.setItem("UserAutenticado", JSON.stringify(nombreUsuario))

    }

  
  }
    

  
  return (
    <section className='ContFather'>

      <div class="form-container">
        <p class="title">Inicio</p>
      
          <div class="input-group">
            <label for="username">Usuario</label>
            <input value={nombreUsuario} onChange={nombre} type="text" placeholder='Nombre'/><br /><br />
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input value={passwordUsuario} onChange={password} type="password" placeholder='Contraseña'/><br /><br />
            <div class="forgot">
            </div>
          </div>

          <div className="btnRegister">
           <button onClick={iniciar} className='btnIni'>INICIAR</button>
          </div>


      <div class="social-message">
        <div class="line"></div>
        <div class="line"></div>
      </div>


          <p class="signup">¿No estas registrado?
         <Link to="/Register">Registrate</Link>
          </p>

        </div>
    </section>
  )
}

export default InicioSesion



