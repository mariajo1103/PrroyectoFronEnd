import React, { useEffect, useState } from 'react'
import publicaciones from '../services/publicaciones';
import "../styles/Detalles.css"

function Detalles() {

  const [publication, Setpublication] = useState([])
  const IdPublicacion = JSON.parse(localStorage.getItem("IdPublicacion"))
  
   useEffect(() => {
  
      async function fetchDaraUsers() {
  
        const datos = await publicaciones.getpublications()
  
        Setpublication(datos)
        
        
      };
  
      fetchDaraUsers();
  
  
    }, []);
  return (
    <div className='conteP1'>

      {publication.filter(ItemPublic => ItemPublic.id === IdPublicacion).map((Public, index) => (
        <section key={index}>

          <h2 className='name'>{Public.nombre}

          <p className='T'>{Public.tours}</p>
          </h2>


          <main id='main'>

            <div className='conImg'>
              <img className='img3' src={Public.img} alt="" />
            </div>

            <div className='conDes'>
              <p className='des'>{Public.descripcion}</p>
            </div>  

          </main>

        </section>

      ))}
    </div>
  )
}

export default Detalles