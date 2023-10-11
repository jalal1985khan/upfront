'use client'
import Header from '../../components/Header'
import About from './Form'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "Collaborate to create impact in lives of front-line workers";
  const pageDescription = "Our partners, who are aligned to our vision mission, play an important role in assisting us in every way possible to improve the lives of front line workers";
  const MetaImage = '/images/contact_banner.jpeg';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <About />
      <Footer/>
    </>
  )
}
