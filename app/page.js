'use client'
import Header from '../components/Header'
import Hero from '../components/HomePage/HeroBanner'
import Who from '../components/HomePage/Who-We'
import How from '../components/HomePage/How-we'
import Banner from '../components/Footer-Banner'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Who />
      <How />
      <Banner/>
      <Footer/>
    </>
  )
}
