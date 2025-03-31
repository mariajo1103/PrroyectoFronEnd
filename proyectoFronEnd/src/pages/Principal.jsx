import React from 'react'

import MenuNave from '../components/MenuNave'
import Carrusel from '../components/Carrusel'
import PprincipalUsuario from '../components/PprincipalUsuario'
import Footer from '../components/Footer'

function Principal() {
  return (
    <div>
        <MenuNave/>
        <Carrusel/>
        <PprincipalUsuario/>
        <Footer/>
    </div>
  )
}

export default Principal