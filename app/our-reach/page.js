'use client'
import Header from '../../components/Header'
import Hero from './HeroBanner'
import About from './Content'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Our work with informal workforces - Upfront Global";
  const pageDescription = "We work factory workers in the textile industry and clothing manufacturers in India to build their resilience through empowerment programmes Know more";
  const MetaImage = '/images/f-banner-6.png';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <About />
      <Footer/>
    </>
  )
}
