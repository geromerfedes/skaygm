import React from 'react'

// Assets
import './home-function.scss'
import stepone from '../../assets/images/common/step-1.png'
import steptwo from '../../assets/images/common/step-2.png'
import stepthree from '../../assets/images/common/step-3.png'

const HomeFunction = () => {
  return (
    <section className='home_function main-container' id='homeFunction'>
      <div className="separator_line">
        <span className='circle'></span>
        <span className='line'></span>
      </div>
      <div className='title_function'>
        <h2>¿Cómo funciona?</h2>
        <p className='description_function'>
          Nuestra sede virtual tiene como objetivo acercarte a tu viaje de  <br />
          acondicionamiento físico de una manera intuitiva y accesible. Te  <br />
          proporcionamos una plataforma donde podrás descubrir, explorar y  <br />
          comprometerte con nuestros programas de entrenamiento de la manera que <br />
          mejor se adapte a tu vida ocupada.
        </p>
      </div>
      <div className="step_function">
        <div className="step-container">
          <div className='image_container'><img src={stepone} alt="check" /></div>
          <span className='line'></span>
          <div className='image_container'><img src={steptwo} alt="approve" /></div>
          <span className='line'></span>
          <div className='image_container'><img src={stepthree} alt="started" /></div>
        </div>
      </div>
      <div className="step_description">
        <div className='step step_one'>
          <h3>
            <b>1</b>
            Elegí uno de <br /> nuestros planes
          </h3>
          <p>
            El primer paso es definir tu objetivo <br /> 
            principal. Una vez que lo tengas <br /> 
            claro, contratá el plan que mejor se <br />
            adapte a él.
          </p>
        </div>
        <div className='step step_two'>
          <h3>
            <b>2</b>
            Registrate en <br /> la plataforma
          </h3>
          <p>
            Una vez hayas adquirido el plan, se <br /> 
            te enviará un correo con un usuario <br /> 
            y contraseña que podrás utilizar  <br />
            para registrarte en nuestra app.
          </p>
        </div>
        <div className='step step_two'>
          <h3>
            <b>3</b>
            Comenzá a <br />entrenar 
          </h3>
          <p>
            Te asesoraremos con el ingreso a la  <br />
            sede y con tu rutina para que <br /> 
            puedas comenzar a  entrenar de  <br />
            inmediato.
          </p>
        </div>
      </div>
      <button className='btn-started'>Comencemos!</button>
      <div className="separator_line_bottom">
        <span className='line'></span>
        <span className='circle'></span>
      </div>
    </section>
  )
}

export default HomeFunction