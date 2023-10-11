'use client'
import Header from '../../components/Header'
import Hero from '../how-we-work/HeroBanner'
import Content from '../how-we-work/Content'
import Footer from '../../components/Footer'

export default function about() {
  const pageTitle = "Resolving complex problems and ensuring workforce well-being";
  const pageDescription = "Ensuring social development opportunities for front line workers by creating impactful collaborations, empowering workforces and promoting social security.";
  const MetaImage = '/images/apparel_banner.jpeg';

  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}
