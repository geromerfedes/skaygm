import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";

import { motion } from 'framer-motion';

import checklist from '../../assets/images/common/checklist.png'
import './dropdown-component.scss'

const DropdownComponent = ({ 
    title, 
    isOpenInitially, 
    description 
  } : { 
    title: string, 
    isOpenInitially: boolean, 
    description: string 
  }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      className={`dropdown ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="sub-item">
          <div className="contain-checklist">
            <img src={checklist} alt="checklist" />
          </div>
          <h3>{title}</h3>
        </div>
        <p>
          { isOpen ? <FiMinus /> : <FiPlus /> }
        </p>
      </div>
      <motion.div 
        className="dropdown-content"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
      >
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default DropdownComponent;
