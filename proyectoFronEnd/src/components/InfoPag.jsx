import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Inf.css"

function InfoPag() {
  return (
    <section className='info'>
        <div>
            <h1> Descubre el Golfo de Nicoya con los mejores tours.</h1>

            <p>Explora la belleza del Golfo de Nicoya con una amplia variedad de tours ofrecidos por expertos locales.
             Nuestra plataforma te conecta con guías y operadores de las zonas costeras, brindándote 
             opciones únicas para disfrutar de este paraíso natural.</p>

            <p><strong>Tours por las islas:</strong> Descubre playas escondidas, aguas cristalinas y paisajes impresionantes en recorridos
             personalizados por las islas más visitadas del Golfo de Nicoya.
            
             </p>

                    <img className='img2' src="panga.jpg" alt="Golfo" />

                <p>
                    <strong>Tours de pesca:</strong> Vive la emoción de la pesca en alta mar con guías experimentados que conocen los mejores puntos para una experiencia inolvidable. <br /><br />
                    <strong>Variedad de opciones:</strong> Encuentra el tour perfecto según tu presupuesto, intereses y disponibilidad, todo en un solo lugar. <br />
                </p>

            <p>
                <h2>
                Conecta con la naturaleza, relájate y vive aventuras inolvidables con los mejores tours del Golfo de Nicoya. ¡Reserva ahora y empieza tu viaje!
                </h2>
            </p>

        </div>
    </section>
  )
}

export default InfoPag