import Image from 'next/image'
import Hero from './components/home/Hero'
import BrandSlider from './components/home/BrandSlider'
import AboutUs from './components/home/AboutUs'

export default function Home() {
  return (
    <main className="">

      <Hero />
      <BrandSlider />
      <AboutUs />
    </main>
  )
}
