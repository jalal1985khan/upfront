import { useState} from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import configData from "config.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'
import Share from '../../components/Share'




function ContainerExample() {

    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [success, setSuccess] = useState(true);

    
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        alert(setName);

    };

    function createPost() {

        setSpinner(true);
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/a2fdf88/feedback`,
            {
                'your-name': { yourName },
                'your-email': { yourEmail },
                'your-subject': { yourSubject },
                'your-message': { yourMessage },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
            .then((response) => {
                setPost(response.data.message);
                
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);

                }
                
                else{
                 //setErrName(response.data['invalid_fields'][0]['message']);
                 //setErrEmail(response.data['invalid_fields'][1]['message']);
                 //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    setLoading(true);
            }
                 console.log(response.data)
            });
    }


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
{success &&
                    <form
                        onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourName" className="form-label text-white"><span className="errors">*</span>Your Name:</label> */}
                            <input
                                //required
                                type='text'
                                className="form-control"
                                id="yourName"
                                name='yourName'
                                placeholder="Ravi Kumar"
                                value={yourName}
                                onChange={event => setName(event.target.value)}
                            />
                            <span className="r_error">{errrname}</span>
                        </div>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourEmail" className="form-label text-white"><span className="errors">*</span>Your Email:</label> */}
                            <input
                                //required
                                type='email'
                                className="form-control"
                                id="yourEmail"
                                name='yourEmail'
                                placeholder="test@test.com"
                                value={yourEmail}
                                onChange={event => setEmail(event.target.value)}

                            /><span className="r_error">{errremail}</span></div>

                            <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourSubject" className="form-label text-white"><span className="errors">*</span>Subject:</label> */}
                                <input
                                    //required
                                    type='text'
                                    className="form-control"
                                    id="yourSubject"
                                    name='yourSubject'
                                    placeholder="your subject"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}

                                /><span className="r_error">{errrsubject}</span>
                                </div>

                                <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourMessage" className="form-label text-white"><span className="errors">*</span>Message:</label> */}
                                <textarea
                                    //required
                                    rows="4" 
                                    cols="50"
                                    className="form-control"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder="your Message"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}

                                />
                                </div>
                                {spinner && <div className="spinner-border text-light" role="status"/>}
                            <button type='submit' className='btn btn-primary register ' onClick={createPost}>Send Message</button>
                            

                    </form>
                          }
                          
{loading && <h1 className="reg-success mt-4">{post}</h1>}                  
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
  );
}

export default ContainerExample;