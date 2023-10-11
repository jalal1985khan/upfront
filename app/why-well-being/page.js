'use client'
import Header from '../../components/Header'
import Hero from './HeroBannerWell'
import About from './About'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Strengthening ecosystems to protect workers’ rights";
  const pageDescription = "We ensure an improved balanced approach to protect front line workers, providing them social security, while making sure business and human rights co exist";
  const MetaImage = '/images/about_us_banner.jpeg';


  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <About />
      <Footer/>
    </>
  )
}
