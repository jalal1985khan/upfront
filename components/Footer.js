import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Image from 'next/image';

function Footer() {
    return (
        <Container className="up-bg pb-5 pt-5" fluid>
            <Container className="text-center">
                <Image
                    src="/images/logo.svg"
                    width={400}
                    height={150}
                />
                <p className="text-white thin pt-3">UpFront is an initiative of the Catalyst Group. Copyright © 2022-23. All Rights Reserved.</p>
                <hr className="line"/>
            </Container>
            <Container >
                <Row className="d-flex justify-content-center pt-3">
                    <Col className="text-white thin" lg={2}>Home Page</Col>
                    <Col className="text-white thin" lg={2}>Why Workforce Well-Being?</Col>
                    <Col className="text-white thin" lg={2}>#COVIDActionCollab</Col>
                    <Col className="text-white thin" lg={2}>Media</Col>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Col className="text-white thin" lg={2}>How We Work</Col>
                    <Col className="text-white thin" lg={2}>Our Reach</Col>
                    <Col className="text-white thin" lg={2}>Labour of Love Fund</Col>
                    <Col className="text-white thin" lg={2}>Careers & Contact</Col>
                </Row>
                <Row className="d-flex justify-content-center pt-3">
                    <Col className="text-white thin" lg={2}>Apparel, Fashion & Textile</Col>
                    <Col className="text-white thin" lg={2}>Our Stories (Blogs)</Col>
                    <Col className="text-white thin" lg={2}>Our Work with Informal Workforces</Col>
                    <Col className="text-white thin" lg={2}>Our Team</Col>
                </Row>
            </Container>
        </Container>
    )
}
    export default Footer;
