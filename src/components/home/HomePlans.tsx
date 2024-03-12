import React from "react";
import { motion } from "framer-motion";
// Assets
import { FaCheck } from "react-icons/fa6";
import "./home-plans.scss";

const HomePlans = () => {
  return (
    <section className="main-container" id="homePlans">
      <div className="subtitle_plains">
        <h2>Planes</h2>
        <p>
          Tres planes disponibles, decenas de rutinas adaptadas, cientos de
          ejercicios, un único <br />
          objetivo: <b>subir de nivel</b>
        </p>
      </div>
      <div className="grid-card_container">
        <motion.div
          className="card_plains"
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>Inicial</h5>
          <p>
            Destinado a personas con ganas de mantenerse en movimiento por una
            cuestión de salud.
          </p>
          <div className="checkbox-container">
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>48 videos</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Rutinas de calentamiento</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Rutinas aeróbicas</p>
              </span>
            </div>
          </div>
          <div className="price">
            <div className="price_old"><h5>$ 17.000</h5></div>
            <div className="discount_title">Descuento <br />por lanzamiento</div>
            <div className="price_new"><h5>$ 15.000</h5> <b>p/ mes</b></div>
          </div>
          <motion.button
            className="btn_buy-plain"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send?phone=542216554482&text=${encodeURIComponent(
                  "Hola. Me gustaría adquirir el Plan Inicial para la sede virtual. Mi nombre completo es … y tengo … años."
                )}`,
                "_blank"
              );
            }}
          >
            Comprar
          </motion.button>
        </motion.div>

        <motion.div
          className="card_plains advanced"
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>Avanzado</h5>
          <p>
            Destinado a gente que quiere ganar masa muscular, volverse fuerte y
            mejorar su físico.
          </p>
          <div className="checkbox-container">
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>48 videos</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Rutinas de calentamiento</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Rutinas de musculación</p>
              </span>
            </div>
          </div>
          <div className="price">
            <div className="price_old"><h5>$ 17.000</h5></div>
            <div className="discount_title">Descuento <br />por lanzamiento</div>
            <div className="price_new"><h5>$ 15.000</h5> <b>p/ mes</b></div>
          </div>
          <motion.button
            className="btn_buy-plain"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send?phone=542216554482&text=${encodeURIComponent(
                  "Hola. Me gustaría adquirir el Plan Avanzado para la sede virtual. Mi nombre completo es … y tengo … años."
                )}`,
                "_blank"
              );
            }}
          >
            Comprar
          </motion.button>
        </motion.div>

        <motion.div
          className="card_plains"
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h5>Deportista</h5>
          <p>
            Destinado a deportistas o personas con intención de mejorar su
            rendimiento deportivo.
          </p>
          <div className="checkbox-container">
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>48 videos</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Todas las rutinas</p>
              </span>
            </div>
            <div className="checkbox_list">
              <span>
                <FaCheck />
                <p>Plan de alimentación</p>
              </span>
            </div>
          </div>
          <div className="price">
            <div className="price_old"><h5>$ 20.900</h5></div>
            <div className="discount_title">Descuento <br />por lanzamiento</div>
            <div className="price_new"><h5>$ 18.900</h5> <b>p/ mes</b></div>
          </div>
          <motion.button
            className="btn_buy-plain"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send?phone=542216554482&text=${encodeURIComponent(
                  "Hola. Me gustaría adquirir el Plan Deportista para la sede virtual. Mi nombre completo es … y tengo … años."
                )}`,
                "_blank"
              );
            }}
          >
            Comprar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePlans;
