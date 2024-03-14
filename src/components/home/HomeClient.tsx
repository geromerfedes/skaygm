import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import { appConfig } from "../../config/applicationConfig";

// Assets
import "./home-client.scss";

import image01 from "../../assets/images/clients/Gala01.png";
import image02 from "../../assets/images/clients/Skay01.jpg";
import image03 from "../../assets/images/clients/Testimonios01.jpg";
import image04 from "../../assets/images/clients/Testimonios02.jpg";
import image05 from "../../assets/images/clients/Viernes01.jpg";
import { FaPlay } from "react-icons/fa";

import ModalVideo from "../modals/ModalVideo";

const HomeClient = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");

  const handleImageClick = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedVideoUrl("");
    setModalOpen(false);
  };

  return (
    <>
      <section className="main-container" id="homeClient">
        <div className="subtitle_client">
          <h2>Nuestros Socios</h2>
          <p>
            Miles de clientes eligen Skaygym día a día por su gran propuesta de
            valor: gracias a ella <br />
            ha logrado posicionarse como la <b>Cadena de Gimnasios Líder</b> de
            la Ciudad de La Plata. <br />
            Descubrí por qué nos eligen nuestros socios!
          </p>
        </div>
        <div className="slide_client-container">
          <Swiper
            spaceBetween={10}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              724: {
                slidesPerView: 1,
              },
              847: {
                slidesPerView: 2,
              },
              1265: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <article className="card-slide_video">
                <img src={image01} alt="Imagen de Gala Skay" />
                <FaPlay className="icon_play" onClick={() => handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid01)} />
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card-slide_video">
                <img src={image02} alt="Skay presentacion" />
                <FaPlay className="icon_play" onClick={() => handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid02)} />
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card-slide_video">
                <img src={image03} alt="Testimonios Skay" />
                <FaPlay className="icon_play" onClick={() => handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid03)} />
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card-slide_video">
                <img src={image04} alt="Testimonios Skay" />
                <FaPlay className="icon_play" onClick={() => handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid04)} />
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="card-slide_video">
                <img src={image05} alt="Viernes en Skay" />
                <FaPlay className="icon_play" onClick={() => handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid05)} />
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="separator_line_bottom">
          <span className="line"></span>
          <span className="circle"></span>
        </div>
      </section>
      {modalOpen && (
        <ModalVideo
          isOpen={modalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedVideoUrl}
        />
      )}
    </>
  );
};

export default HomeClient;
