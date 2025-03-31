import { useEffect, useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Pprincipal.css"
import publicaciones from '../services/publicaciones';
import Swal from 'sweetalert2';


function Pprincipal() {

    const [Opciones, SetOpciones]=useState([])
    
      useEffect(() => {
    
        async function fetchDaraUsers() {
    
          const datos = await publicaciones.getpublications()
    
          SetOpciones(datos)
          
          
        };
    
        fetchDaraUsers();
    
    
      }, []);

      function Eli(id) {
       publicaciones.deletepublications(id)

        setTimeout(() => {
          location.reload()
        }, 300)
      }
    
      async function btnEdit(id) { 
        Swal.fire({
          title: 'Editar Publicación',
          html: `
              <input id="nombreEdit" class="swal2-input" placeholder="Nuevo titulo"/>
              <select id="TipoEdit">
                     <option value="Pesca">Pesca</option>
                     <option value="Tours Islas">Tours Islas</option>
                     <option value="Recorridos turisticos">Recorridos turisticos</option>
                  </select>
              <textarea id="Descripcion" class="swal2-textarea" placeholder="Nueva descripción"></textarea>
          `,
          confirmButtonText: 'Enviar',
          showCancelButton: true,
          focusConfirm: false,
          preConfirm: () => {

              const nombreEdit = document.getElementById('nombreEdit').value;
              const TipoEdit = document.getElementById('TipoEdit').value;
              const Descripcion = document.getElementById('Descripcion').value;


              if (!nombreEdit || !TipoEdit || !Descripcion) {
                  Swal.showValidationMessage('Por favor, complete el campo.');
              }
              setTimeout(() => {

                Opciones.map((opt) => {
                  
                    console.log(opt);
                    console.log(id);
                    publicaciones.updatepublications(nombreEdit,TipoEdit,Descripcion,opt.img,id);
                    location.reload();

                  
                })
              }, 500);
              return { nombreEdit, TipoEdit, Descripcion };
          }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Publicación Actualizada',
                    icon: 'success',
                    showConfirmButton: false
                })
            }
        });
      }

  return (
    <div className='ContCards'>

        {Opciones.map((publications,index)=>(  
            <article key={index}  >

               <div className='card'>
                 <img onClick={e => FunctionDatails(publications.id)} className='img1' src={publications.img} alt="" />
         
                 <div>
                  <marquee scrolldelay="150"><p className='textNombre'>{publications.nombre}</p></marquee>
                   <p className='text'>{publications.tours}</p><br />
   
                   <div className='btns'>
                     <button onClick={e => btnEdit(publications.id)}>Editar</button>
                     <button onClick={e => Eli(publications.id)}>Elimnar</button>
                   </div>

                  </div>

               </div>
            </article>
         ))}
       
    </div>
  )
}

export default Pprincipal