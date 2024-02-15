import { 
  HomeSwiper, 
  HomeDropdown, 
  HomeFunction, 
  HomeAbout,
  HomeClient,
  HomePlans,
  HomeQuestion
} from '../components/home/';

const HomeContainer = () => {
  return (
    <section className='home'>
      <h1 style={{opacity: 0, height: 0}}>Skay Gym - Gimanasio en La Plata</h1>
      <HomeSwiper />
      <HomeDropdown />
      <HomeFunction />
      <HomeAbout />
      <HomeClient />
      <HomePlans />
      <HomeQuestion />
    </section>
  )
}

export default HomeContainer;