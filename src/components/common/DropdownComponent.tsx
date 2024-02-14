import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";

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
    <div className="dropdown">
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
      {isOpen && (
        <div className="dropdown-content animate__animated animate__fadeIn">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
