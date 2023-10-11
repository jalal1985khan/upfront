'use client'
import Header from '../../components/Header'
import About from './community'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "#CovidActionCollab - Upfront Global";
  const pageDescription = "";
  const MetaImage = '/images/community_banner.jpeg';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <About />
      <Footer/>
    </>
  )
}
