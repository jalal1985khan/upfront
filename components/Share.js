import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TwitterShareButton,FacebookShareButton, WhatsappShareButton  } from 'react-share';
import { AiFillTwitterSquare,AiFillFacebook,AiOutlineWhatsApp  } from "react-icons/ai";


function Share() {
  return (
<>
<Container className="d-flex flex-column">
              <p>Share This Page</p>
<TwitterShareButton 
url={`https://upfront.global/why-well-being/`}
title="Check out this iHateReading custom repository "
className="my-1 s-button btn btn-primary px-2"
>
<AiFillTwitterSquare size={28} /> Twitter                                     
</TwitterShareButton>

<FacebookShareButton 
url={`https://upfront.global/why-well-being/`}
          title="Check out this iHateReading custom repository "
          className="my-1 s-button btn btn-primary px-2"
>
<AiFillFacebook  size={28} /> Facebook                                     
</FacebookShareButton>              

<WhatsappShareButton 
url={`https://upfront.global/why-well-being/`}
          title="Check out this iHateReading custom repository "
          className="my-1 s-button btn btn-primary px-2"
>
<AiOutlineWhatsApp  size={28} /> Facebook                                      
</WhatsappShareButton>                      
</Container>
<Container className="d-flex flex-column mt-5 mb-5">
<p>More in This Section</p>
<Button className="my-1 s-button">About Us</Button>                      
<Button className="my-1 s-button">Our Reach</Button>                      
<Button className="my-1 s-button">Apparel, Fashion & Textile</Button>                      
<Button className="my-1 s-button">Informal Workforces</Button>                      
</Container>
      </>
  )
}

export default Share