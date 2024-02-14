import React from 'react'
import DropdownComponent from '../common/DropdownComponent'

import './home-dropdown.scss'

const HomeDropdown = () => {
  return (
    <div className='section-dp'>
      <div className="subtitle">
        <h2>¿para quién es?</h2>
        <p>
          Ya seas un profesional ocupado que busca flexibilidad en tus entrenamientos o un entusiasta del fitness que  <br />
          busca explorar nuevas experiencias, nuestra Sede Virtual es el espacio digital que se adapta a tu estilo de vida. <br />
          Si sos alguna de estos tipos de personas, la Sede Virtual es el lugar perfecto para vos!
        </p>
      </div>
      <div className="dropdown-container">
        <div className="grid-container">
          <div className='first_row'>
            <DropdownComponent title="profesionales remotos" isOpenInitially={false} description="Profesionales que trabajan desde casa y desean incorporar fácilmente sesiones de entrenamiento en su rutina diaria." />
            <DropdownComponent title="viajeros frecuentes" isOpenInitially={false} description="Dropdown description" />
            <DropdownComponent title="padres / personas mayores" isOpenInitially={false} description="Dropdown description" />
          </div>
          <div className='second_row'>
            <DropdownComponent title="amantes del home training" isOpenInitially={false} description="Dropdown description" />
            <DropdownComponent title="deportistas amateur" isOpenInitially={false} description="Dropdown description" />
            <DropdownComponent title="seguidores de la comunidad"isOpenInitially={false}description="Dropdown description" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDropdown