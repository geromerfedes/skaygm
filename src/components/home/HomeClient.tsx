import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import { motion } from "framer-motion";

// Assets
import "./home-client.scss";

import image01 from "../../assets/images/common/socio01.png";
import image02 from "../../assets/images/common/socio02.png";
import image03 from "../../assets/images/common/socio03.png";

import { appConfig } from "../../config/applicationConfig";
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
              <motion.div
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.1 }}
                className="card-slide_video"
                onClick={() =>
                  handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid01)
                }
              >
                <img src={image01} alt="" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.1 }}
                className="card-slide_video"
                onClick={() =>
                  handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid02)
                }
              >
                <img src={image02} alt="" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.1 }}
                className="card-slide_video"
                onClick={() =>
                  handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid03)
                }
              >
                <img src={image03} alt="" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.1 }}
                className="card-slide_video"
                onClick={() =>
                  handleImageClick(appConfig.CLOUD_VIDEOS_URL.vid04)
                }
              >
                <img src={image01} alt="" />
              </motion.div>
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
