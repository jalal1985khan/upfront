'use client'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'

function HeroBanner() {
  return (
    <>
<Container className="up-bg" fluid>
<Row className="d-flex flex-column">
<Col className="d-flex justify-content-center mb-2 mt-2">
                      <Image
                          src="/images/hero_banner.png"
                          width={500}
                          height={410}
                          
                      />
</Col>
<Col >
<Container className='fs-5 text-white thin text-center mt-2 mb-5'>
Millions of front line workers contribute immense value to our society, economy and planet. They keep our farms, factories, markets and businesses steady and growing. However, they themselves live a hand-to-mouth existence, with poor & unsafe working and living conditions, with fragile financial security and an inefficient ecosystem in which they exist and operate. We believe this must change and we will change it—with you and them.
</Container>
</Col>  
<Col className="d-flex justify-content-center mt-5 mb-5">
<div className='icon-scroll'></div>
</Col>                  
</Row>
                  


</Container>
    </>
  )
}

export default HeroBanner
