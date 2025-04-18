import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Menu.css"

function NavAd() {
  return (
    <div  className='container'>
     <nav className='ContNAV'>

        <div className='H1Nav'>
            <h1>Golfo Tours</h1><br /><br />
        </div>

        <div className='btnsNav'>
            <button className='btnAbout'><Link className='LINK' to="/Info">Sobre nosotros</Link>  </button>
        </div>

            <input type="search" placeholder='Busca tu experencia preferida.' />

        <div className='btnsNAV'>
            <button> <Link className='LINK' to="/">Inicio</Link> </button>
            <button><Link to="/Publi" className='LINK'>Publicar</Link></button>
        </div>
      </nav>
    </div>
  )
}

export default NavAd