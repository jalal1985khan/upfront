import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'
import Image from 'next/image'
import Share from '../../components/Share'


function Contact() {
  return (
    <>
<Container className="pt-5">
<h1 className="fw-bold">Contact</h1>              
<hr className="h-line"/>              
</Container>
<Container className="mt-5 mb-4">
<Image src="/images/contact_banner.jpeg" width={800} height={300} className="img-fluid c-img"/>
</Container>
      <Container className="pt-5">
        <Row>
          <Col lg={9}>
            <Row>
              <Col>
                <h3 className="fw-bold">Get in Touch</h3>
                <p className="thin h-text">For more information email <Link href="mailto:contactus@upfront.org">contactus@upfront.org</Link> or leave a message below.</p>
              <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
              </Col>
            </Row>
<Row className="pt-5 pb-5">
<h2>Careers</h2>
<h5>Currently Available Positions</h5>
<Col lg={6}>                
<div className="card p-3 b-bg border-0">
<div className="card-body d-flex flex-column justify-content-between">
<h5 className="card-title">Technical Specialist</h5>  
<div className="d-flex justify-content-between">
<Link href="https://upfront.global/parveens-journey-of-hope-empowering-the-street-vendors/" target="_blank" className="btn btn-primary b-btn"><AiOutlineArrowRight size={28} /></Link>
<span>Updated on: 21-June-2022</span>                                  
</div>    
  </div>
</div> 
</Col>
<Col lg={6}>                
<div className="card p-3 b-bg border-0">
<div className="card-body d-flex flex-column justify-content-between">
<h5 className="card-title">Senior Program Manager</h5>  
<div className="d-flex justify-content-between">
<Link href="https://upfront.global/parveens-journey-of-hope-empowering-the-street-vendors/" target="_blank" className="btn btn-primary b-btn"><AiOutlineArrowRight size={28} /></Link>
<span>Updated on: 21-June-2022</span>                                  
</div>    
  </div>
</div> 
</Col>              
</Row>
</Col>
<Col><Share/></Col>
        </Row>
</Container>      
    </>
  )
}

export default Contact
