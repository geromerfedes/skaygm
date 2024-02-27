import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './modal-video.scss';
import { AiOutlineClose } from 'react-icons/ai';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "back",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalVideo = ({
  isOpen,
  onClose,
  videoUrl
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) => {

  const handleClose = () => {
    onClose(); // Llama a la función onClose cuando se hace clic en el botón de cerrar
  };

  const handleAnimationComplete = () => {
    if (!isOpen) {
      onClose(); // Llama a la función onClose solo cuando la modal está cerrada
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-video" 
          variants={dropIn} 
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={handleAnimationComplete}
        >
          <div className="modal-video__content">
            <button onClick={handleClose}><AiOutlineClose /></button>
            <video src={videoUrl} controls autoPlay></video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalVideo;
