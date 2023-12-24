
import Image from 'next/image'
import Hero from './components/home/Hero'
import BrandSlider from './components/home/BrandSlider'
import AboutUs from './components/home/AboutUs'
import Courses from './components/home/Courses'
import HomeGallery from './components/home/HomeGallery'
import Team from './components/home/Team'

export default function Home() {
  return (
    <main className="">

      <Hero />
      <BrandSlider />
      <AboutUs />
      <Courses  />
      <Team />
      <HomeGallery />
    </main>
  )
}
