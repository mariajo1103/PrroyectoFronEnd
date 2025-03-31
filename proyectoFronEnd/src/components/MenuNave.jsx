import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Menu.css"
import {useNavigate } from 'react-router-dom';

function MenuNave() {

  const navigate = useNavigate()

  return (
    <div className='container'>
      <nav className='ContNAV'>

        <div className='H1Nav'>
          <h1>Golfo Tours</h1><br /><br />
        </div>

        <div id='btnsNav1'>
          <button> <Link className='LINK' to="/">Inicio</Link> </button>
          <button className='btnAbout'> <Link className='LINK' to="/Islas">Información islas</Link></button>
        </div>

        <input type="search" placeholder='Busca tu experencia preferida.' />

        <div className='btnsNAV'>
          <button> <Link className='LINK' to="/Register">Registrate</Link> </button>
          <button> <Link className='LINK' to="/Login">Iniciar Sesión</Link> </button>
        </div>
        
        
      </nav>
    </div>
  )
}

export default MenuNave