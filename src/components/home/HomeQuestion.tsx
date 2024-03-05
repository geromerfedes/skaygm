import React from 'react'

import { CiInstagram } from "react-icons/ci";
import { ImHammer2 } from "react-icons/im";

import './home-question.scss'

const HomeQuestion = () => {
  return (
    <section id='homeQuestion'>
      <div className='question_container'>
        <h5>¿Dudas o preguntas?</h5>
        <p>
          Desde Skaygym valoramos tu opinión y estamos comprometidos a brindarte el mejor servicio posible. Es por eso que estamos constantemente 
          disponibles para responder a todas tus preguntas y brindarte el apoyo que necesitas, como asi también te proporcionamos la información necesaria 
          para que tengas total claridad sobre nuestras políticas y condiciones. Conversemos!
        </p>
        <div className="social-media">
          <div className="social_container">
            <a href="https://www.instagram.com/skaygym/" target="_blank" rel="noreferrer">
              <p><CiInstagram /></p>
              <b>@skaygym</b>
            </a>
          </div>
          <div className="social_container">
            <a href="/docs/SkayGym_TerminosYCondiciones.pdf" download="SkayGym | Términos y Condiciones.pdf">
              <p><ImHammer2 /></p>
              <b>Términos y condiciones</b>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeQuestion