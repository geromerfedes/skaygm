import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Assets
import './home-about.scss'
import aboutImage from '../../assets/images/common/about-img.png'

const HomeAbout = () => {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(1);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (inView && count < 70) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 80);
    }

    return () => {
      clearInterval(timer);
    };
  }, [inView, count]);

  return (
    <section className='main-container' id='homeAbout'>
      <div className='subtitle_about'>
        <h2>¿Quienes somos?</h2>
      </div>
      <div className='container_about'>
        <div className='image_about-container'>
          <img src={aboutImage} alt="¿Quienes somos?" />
        </div>
        <div className='text_about-container'>
          <p>
            En Skaygym, nuestra historia es un testimonio del poder <br /> 
            transformador del fitness y la dedicación de aquellos que <br /> 
            comparten nuestra visión.
          </p>
          <p>
            Desde nuestro modesto inicio en 2017, hemos <br /> 
            experimentado un crecimiento extraordinario, gracias a la <br /> 
            pasión y dedicación de nuestros socios y el incansable <br /> 
            trabajo de nuestro equipo. Con el compromiso y el  <br /> 
            objetivo de proporcionar un espacio donde la salud y el  <br />
            bienestar se fusionan de manera armoniosa.
          </p>
          <h4>Contamos actualmente con</h4>
          <motion.span ref={ref}>
            <p>5 <b>sedes</b></p>
            <p>+{count}<b>profesionales</b></p>
          </motion.span>
        </div>
      </div>
      <div className="separator_line_bottom">
        <span className='circle'></span>
        <span className='line'></span>
      </div>
    </section>
  )
}

export default HomeAbout