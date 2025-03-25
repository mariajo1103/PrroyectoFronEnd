import React, { useState } from 'react'
import publicaciones from '../services/publicaciones';

function Publicar() {
 const [img, setImg] = useState(null);
 const [nombre, setNombre] = useState('');
 const [tours, setTours] = useState('');
 const [descripcion, setDescripcion] = useState('')
 

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
    publicaciones.postpublications(img,nombre,tours,descripcion)
 }

 
  return (
    <div>
        <h2>Crear Publicación</h2>

        <div>
            <label htmlFor="">Selecionar imagen:</label>
            <input type="file" accept='image/*' onChange={handleChange}/>
        </div>

        <div>
             <label htmlFor="Nombre">Nombre:</label>
            <input type="text"  placeholder='Nombre' value={nombre} onChange={FNnombre} />
          </div>

         <div>
             <label htmlFor="Tipo">Tipo de tours:</label>
                <select id="Tipo" value={tours} onChange={FNtours}>
                   <option value="Pesca">Pesca</option>
                   <option value="Tours">Tours Islas</option>
                   <option value="Vuelta">Recorridos turisticos</option>
                </select>
         </div>

        <div>
              <label htmlFor="Descripcion">Descripción:</label>
              <textarea id="Descripcion" placeholder='Descripción' value={descripcion} onChange={FNdescripcion}></textarea>
         </div>

          <button onClick={agregar} type='submit'>Publicar</button> 
 
    </div>
  )
}

export default Publicar