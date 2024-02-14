import React from 'react'
import HomeSwiper from '../components/home/HomeSwiper';
import HomeDropdown from '../components/home/HomeDropdown';
import HomeFunction from '../components/home/HomeFunction';

const HomeContainer = () => {
  return (
    <section className='home'>
      <h1 style={{opacity: 0, height: 0}}>Skay Gym - Gimanasio en La Plata</h1>
      <HomeSwiper />
      <HomeDropdown />
      <HomeFunction />
    </section>
  )
}

export default HomeContainer;