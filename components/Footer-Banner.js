'use client'
import React from 'react'
import Image from 'next/image'
import { Container, Row ,Col} from 'react-bootstrap'

function FooterBanner() {
  return (
    <Container fluid className="up-bg">
          <div className="d-flex flex-wrap">
              <Col className="mcol"><Image
                  src="/images/f-banner-1.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col ><Image
                  src="/images/f-banner-2.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col ><Image
                  src="/images/f-banner-3.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-4.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-5.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-6.png"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-7.jpeg"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-8.jpeg"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-9.jpeg"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>
              <Col className=""><Image
                  src="/images/f-banner-10.jpeg"
                  width={151}
                  height={151}
                  className="mimg"
              />
              </Col>

      </div>
    </Container>
  )
}

export default FooterBanner
