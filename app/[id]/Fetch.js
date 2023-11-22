import React, { useEffect, useState } from 'react';
import useParams from 'next/router'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AiFillLinkedin } from "react-icons/ai";
import Link from 'next/link'
import Image from 'next/image'
import Share from '../../components/Share'

const Post = () => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://beta.upfront.global/wp-json/wp/v2/posts?_embed&slug=empowering-the-fisherfolk-entrepreneurs-in-uppada-the-journey-of-jagamani-and-durga`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  },);

  console.log('Fetched data:', data);

  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <>
         <Container className="pt-5">
            <h1 className="fw-bold">{post.title.rendered}</h1>              
         <hr className="h-line"/>              
         </Container>
                   <Container>
                       <Row>
<Col lg={9}>
<p className="thin h-text" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
                               
                       </Col>
                           <Col>
                               <Share/>
                           </Col>
                       </Row>          
          </Container>
          <Container className="mb-4"><Link href="/blog" className="btn btn-upfront">View All Stories</Link></Container>
          </>
      ))}
    </div>
  );
};

export default Post;