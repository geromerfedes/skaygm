import { motion } from 'framer-motion';

import './footer.scss';
import logo from '../assets/images/logo.png';
import copyrightlogo from '../assets/images/common/copyright.png';

const Footer = () => {
  return (
    <motion.footer className='footer' id='skayFooter'
      initial={{y:'-300px'}}
      whileInView={{y:0}}
      viewport={{once:true}}
      transition={{duration:1.5}}
    >
      <div className="footer-container">
        <img src={logo} alt="Skay Gym Logo" />
        <h6><span><img src={copyrightlogo} alt="copyright" /> {new Date().getFullYear()}</span> <br /> <b>|</b> <article>Skay Gym - Todos los derechos reservados</article></h6>
        <p>Desarrolado por <a href="https://www.fedesagency.com" target='_blank' rel="noreferrer">Fedes Agency</a></p>
      </div>
      <span className='footer_circle'></span>
    </motion.footer>
  )
}

export default Footer