'use client'
import Header from '../../components/Header'
import Team from './Team'
import Footer from '../../components/Footer'


export default function about() {
  const pageTitle = "A team built on years of experience empowering workers";
  const pageDescription = "Our Core staff is founded on years of experience and they provide a wealth of knowledge and understanding on how to ensure worker well being Know more";
  const MetaImage = '/images/reach.png';
  return (
    <>
      <Header title={pageTitle} description={pageDescription} MetaImage={MetaImage} />
      <Team />
      <Footer/>
    </>
  )
}
