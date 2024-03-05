import React from 'react'
import DropdownComponent from '../common/DropdownComponent'

import './home-dropdown.scss'

const HomeDropdown = () => {
  return (
    <div className='main-container section-dp' id='sectionDp'>
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
            <DropdownComponent title="Profesionales ocupados" isOpenInitially={false} description="Personas con agendas apretadas que buscan flexibilidad para hacer ejercicio en cualquier momento y lugar." />
            <DropdownComponent title="Amantes del fitness en casa" isOpenInitially={false} description="Individuos que prefieren entrenar en la comodidad de su hogar en lugar de ir a un gimnasio." />
            <DropdownComponent title="Viajeros frecuentes" isOpenInitially={false} description="Aquellos que están constantemente en movimiento y desean mantenerse en forma mientras viajan." />
            <DropdownComponent title="Papas y Mamás ocupadas" isOpenInitially={false} description="Madres que buscan soluciones convenientes para hacer ejercicio en casa mientras cuidan de sus hijos." />
            <DropdownComponent title="Freelancers y trabajadores remotos" isOpenInitially={false} description="Profesionales que trabajan desde casa y desean incorporar fácilmente sesiones de entrenamiento en su rutina diaria." />
          </div>
          <div className='second_row'>
            <DropdownComponent title="Entusiastas del aire libre" isOpenInitially={false} description="Personas que disfrutan de actividades al aire libre y desean combinar entrenamientos virtuales con su amor por la naturaleza." />
            <DropdownComponent title="Personas mayores" isOpenInitially={false} description="Individuos mayores que buscan programas de ejercicio adaptados a sus necesidades y preferencias desde la comodidad de su hogar." />
            <DropdownComponent title="Deportistas amateur"isOpenInitially={false}description="Aquellos que participan en deportes recreativos y desean complementar su entrenamiento con sesiones virtuales específicas." />
            <DropdownComponent title="Personas introvertidas"isOpenInitially={false}description="Individuos que prefieren evitar entornos sociales como gimnasios, optando por entrenamientos más privados en casa." />
            <DropdownComponent title="Amantes de la Comunidad"isOpenInitially={false}description="Personas que buscan ser parte de nuestra hermosa Comunidad Skaygym pero se encuentran a cientos de kilómetros de distancia: no se preocupen, acá llegó la solución perfecta." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDropdown