import React, { useState } from 'react'
import publicaciones from '../services/publicaciones';
import "../styles/MenuPu.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Publicar() {
 const [img, setImg] = useState(null);
 const [nombre, setNombre] = useState('');
 const [tours, setTours] = useState('');
 const [descripcion, setDescripcion] = useState('')
 const navigate = useNavigate()

 const handleChange = (e) => {
    console.log(e.target.files);
    const data = new FileReader()
    data.addEventListener('load',()=>{
        setImg(data.result)
    })
    data.readAsDataURL(e.target.files[0])
 };

 function FNnombre(evento) {
    setNombre(evento.target.value)
 }

 function FNtours(evento) {
    setTours(evento.target.value)
 }

 function FNdescripcion(evento) {
    setDescripcion(evento.target.value)
 }

 function agregar() {    
        if(nombre === "" || tours === "" || descripcion ==="" ){
              Swal.fire({
                title: "Por favor complete los campos!",
                icon: "info",
              })    
            }
            else {
              
               publicaciones.postpublications(nombre,tours,descripcion,img)
    
    
                Swal.fire({
                    title: "Editado correctamente!",
                    icon: "success",
                })
                setTimeout(() => {
                  navigate("/")
                  
                }, 300);
    
              
            }
          }
 
  return (

   <div>
      <div>
        <main className='container2'>
            <h2 className='titulo'>Crear Publicación</h2>
          <div>
              <label htmlFor="">Selecionar imagen:</label>
              <input type="file" accept='image/*' onChange={handleChange}/>
          </div>
  
          <div>
               <label htmlFor="Nombre">Nombre:</label>
              <input className='text2' type="text" placeholder='Nombre' value={nombre} onChange={FNnombre} />
            </div>
  
           <div>
                  <select className='text2' id="Tipo" value={tours} onChange={FNtours}>
                     <option value="Pesca">Pesca</option>
                     <option value="Tours Islas">Tours Islas</option>
                     <option value="Recorridos turisticos">Recorridos turisticos</option>
                  </select>
           </div>
  
          <div>
                <label htmlFor="Descripcion">Descripción:</label>
                <textarea className='text2' id="Descripcion" placeholder='Descripción' value={descripcion} onChange={FNdescripcion}></textarea>
           </div>
  
            <button className='btnAgre' onClick={agregar} type='submit'>Publicar</button> 
  
        </main>
            </div>
   
       
   </div>
  )

}

export default Publicar