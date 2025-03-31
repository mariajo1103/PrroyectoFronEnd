import { useEffect, useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/PrincipalUsu.css"
import publicaciones from '../services/publicaciones';
import {useNavigate } from 'react-router-dom';


function Pprincipal() {

    const [Opciones, SetOpciones]=useState([])
    const navigate = useNavigate()
    
      useEffect(() => {
    
        async function fetchDaraUsers() {
    
          const datos = await publicaciones.getpublications()
    
          SetOpciones(datos)
          
          
        };
    
        fetchDaraUsers();
    
    
      }, []);

      function Ir(id) {
        localStorage.setItem("IdPublicacion", JSON.stringify(id))
        console.log(id);
        
        navigate("/Detalles")
      }

  return (
    <div className='ContCards1'>

        {Opciones.map((publications,index)=>(  
            <article key={index}  >

               <div className='card1'>
                 <img onClick={e => Ir(publications.id)} className='img1' src={publications.img} alt="" />
         
                 <div>
                 <marquee scrolldelay="150"><p className='textNombre1'>{publications.nombre}</p></marquee>
                   <p className='text1'>{publications.tours}</p><br />

                 </div>

               </div>
            </article>
         ))}
       
    </div>
  )
}

export default Pprincipal