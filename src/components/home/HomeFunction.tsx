import React from 'react'
import { motion } from 'framer-motion';
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
          <motion.div className='image_container' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}><img src={stepone} alt="check" /></motion.div>
          <motion.span className='line' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}></motion.span>
          <motion.div className='image_container' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}><img src={steptwo} alt="approve" /></motion.div>
          <motion.span className='line' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}></motion.span>
          <motion.div className='image_container' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}><img src={stepthree} alt="started" /></motion.div>
        </div>
      </div>
      <div className="step_description">
        <motion.div className='step step_one' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
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
        </motion.div>
        <motion.div className='step step_two' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}>
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
        </motion.div>
        <motion.div className='step step_two' initial={{ opacity: 0 }} animate={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.1 }}>
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
        </motion.div>
      </div>
      <motion.button className='btn-started' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>Comencemos!</motion.button>
      <div className="separator_line_bottom">
        <span className='line'></span>
        <span className='circle'></span>
      </div>
    </section>
  )
}

export default HomeFunction