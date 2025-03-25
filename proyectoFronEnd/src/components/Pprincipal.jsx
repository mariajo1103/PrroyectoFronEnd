import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Pprincipal.css"
import { useNavigate } from 'react-router-dom';

function Pprincipal() {
    let navigate = useNavigate()

    function detalles() {
        navigate("/Rastour")
    }
    function detalles2() {
        navigate("/Candytour")
    }

  return (
    <div className='ContCards'>
        <div className='cont'>
            <h3>El niño del Mar Tours</h3>
            <img src="NiñoMar.jpg" alt="" className='img' />
            <p className='text'>Viajes</p>
            <p>₡</p>
        </div> <br />

        <div className='cont'>
            <h3>Ocean Tours</h3>
            <img src="Ocean.jpg" alt="" className='img'/>
            <p className='text'>Viajes</p>
            <p>₡</p>
        </div> <br />

        <div className='cont' onClick={detalles2}>
            <h3>Candy Tours</h3>
            <img src="Candy.jpg" alt="" className='img'/>
            <p className='text'>Viajes</p>
            <p>₡</p>
        </div> <br />

        <div className='cont' onClick={detalles}>
            <h3>Rasta Tours CR</h3>
            <img src="Rasta.jpg" alt="" className='img'/>
            <p className='text'>Viajes</p>
            <p>₡</p>
        </div> <br />
       
    </div>
  )
}

export default Pprincipal