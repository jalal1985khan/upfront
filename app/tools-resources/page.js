'use client'
import Header from '../../components/Header'
import About from './Media'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Committed to enhance the lives of front-line workers";
  const pageDescription = "Learn more about our work and how we utilise our tools and resources to create impact and provide social security to front line workers";
  const MetaImage = '/images/hero_banner.png';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <About />
      <Footer/>
    </>
  )
}
