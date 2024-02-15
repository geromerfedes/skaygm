import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/bundle";

// Assets
import './home-client.scss';

import image01 from '../../assets/images/common/socio01.png';
import image02 from '../../assets/images/common/socio02.png';
import image03 from '../../assets/images/common/socio03.png';


const HomeClient = () => {
  return (
    <section className='main-container' id='homeClient'>
      <div className='subtitle_client'>
        <h2>Nuestros Socios</h2>
        <p>
          Miles de clientes eligen Skaygym día a día por su gran propuesta de valor: gracias a ella  <br />
          ha logrado posicionarse como la <b>Cadena de Gimnasios Líder</b> de la Ciudad de La Plata.  <br />
          Descubrí por qué nos eligen nuestros socios!
        </p>
      </div>
      <div className="slide_client-container">
      <Swiper 
        spaceBetween={50} 
        slidesPerView={3} 
        autoplay={{ delay: 4500, disableOnInteraction: true }} 
        loop={true} 
        modules={[ Autoplay ]}>
          <SwiperSlide>
            <div className='card-slide_video'>
              <img src={image01} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-slide_video'>
              <img src={image02} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-slide_video'>
              <img src={image03} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-slide_video'>
              <img src={image01} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="separator_line_bottom">
        <span className='line'></span>
        <span className='circle'></span>
      </div>
    </section>
  )
}

export default HomeClient