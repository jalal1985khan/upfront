'use client'
import Header from '../../components/Header'
import Hero from '../our-programmes/HeroBanner'
import Content from '../our-programmes/Content'
import Footer from '../../components/Footer'



export default function about() {
  const pageTitle = "Sophisticated programmes to ensure the well-being of workers";
  const pageDescription = "We work to ensure the workforce well being in the global supply chain by providing training for frontline workers, like community health workers Know more";
  const MetaImage = '/images/how-banner-2.jpeg';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}
