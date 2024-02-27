import React from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle";

// Assets
import './home-swiper.scss';
import logo from '../../assets/images/logo.png';
import SlideOne from '../../assets/images/backgrounds/slide-1.png';
import SlideTwo from '../../assets/images/backgrounds/slide-2.png';
import SlideThree from '../../assets/images/backgrounds/slide-3.png';

const HomeSwiper = () => {
  return (
    <div className="home-swiper_container">
      <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 4500, disableOnInteraction: true }} loop={true} modules={[ Autoplay ]}>
        <SwiperSlide>
          <div className='box-slide'>
            <div className="image-contain">
              <div className="gradient-top"></div>
              <div className="gradient-bottom"></div>
              <img src={SlideOne} alt="Sky Gym 1" />
              <div className="details-slide">
                <img src={logo} alt="Sky Gym" />
                <h2>¿Buscás el mejor entrenamiento sin importar dónde estés?</h2>
                <div className="description">
                  <p>
                    Te presentamos nuestra nueva <b>Sede Virtual!</b> <br />
                    Entrenamientos <b>100% online y personalizados.</b> 
                  </p>
                  <p>
                    La cadena <b>líder</b> de gimnasios de La Plata. <br />
                    Ahora en <b>todo el país.</b> Reserva tu lugar ya!
                  </p>
                </div>
                <a href="#homePlans">
                  <motion.button className='btn-plain' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>Ver planes</motion.button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box-slide'>
            <div className="image-contain">
              <div className="gradient-top"></div>
              <div className="gradient-bottom"></div>
              <img src={SlideTwo} alt="Sky Gym 2" />
              <div className="details-slide">
                <img src={logo} alt="Sky Gym" />
                <h2>¿Buscás el mejor entrenamiento sin importar dónde estés?</h2>
                <div className="description">
                  <p>
                    Te presentamos nuestra nueva <b>Sede Virtual!</b> <br />
                    Entrenamientos <b>100% online y personalizados.</b> 
                  </p>
                  <p>
                    La cadena <b>líder</b> de gimnasios de La Plata. <br />
                    Ahora en <b>todo el país.</b> Reserva tu lugar ya!
                  </p>
                </div>
                <a href="#homePlans">
                  <motion.button className='btn-plain' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>Ver planes</motion.button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box-slide'>
            <div className="image-contain">
              <div className="gradient-top"></div>
              <div className="gradient-bottom"></div>
              <img src={SlideThree} alt="Sky Gym 3" />
              <div className="details-slide">
                <img src={logo} alt="Sky Gym" />
                <h2>¿Buscás el mejor entrenamiento sin importar dónde estés?</h2>
                <div className="description">
                  <p>
                    Te presentamos nuestra nueva <b>Sede Virtual!</b> <br />
                    Entrenamientos <b>100% online y personalizados.</b> 
                  </p>
                  <p>
                    La cadena <b>líder</b> de gimnasios de La Plata. <br />
                    Ahora en <b>todo el país.</b> Reserva tu lugar ya!
                  </p>
                </div>
                <a href="#homePlans">
                  <motion.button className='btn-plain' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>Ver planes</motion.button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSwiper;