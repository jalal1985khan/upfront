import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment';


import { usePathname } from 'next/navigation'

const SuccessStories = () => {
  const pathname = usePathname()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  


  const fetchMovies = async () => {
    let url = "";
    const urlPage = `${page}`;
    //console.log(urlPage)
    //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
    url = `https://beta.upfront.global/wp-json/wp/v2/posts?_embed&production[]=19&categories[]=14&status[]=publish`; //Staging Enviroment
    //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=77&status[]=publish&per_page=${urlPage}`; //Live Enviroment
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  },);




  return (
    <div>
      
     
     
      <Container>
      <Container className="pt-5">
<h1 className="fw-bold">Blog</h1>              
<hr className="h-line"/>              
</Container>
        <Row>

          {

            movies.map((post, index) => {
              console.log(post);
              return (
                
<>
<Col lg={4} key={post.id} className="mb-4">
<div className="card p-3 b-bg border-0">
  <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title" dangerouslySetInnerHTML={{ __html:post['title']['rendered'] }}/>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html:post['excerpt']['rendered'] }}/>
<div className="d-flex justify-content-between">
{post.media_url ? (
                      // Render media URL if not empty
                      <Image src={post.media_url} alt="Media" width={100} height={100} />
                    ) : (
                      // Render post slug if media URL is empty
                      <Link href={post['slug']} target="_blank" className="btn btn-primary b-btn">
                        <AiOutlineArrowRight size={28} />
                      </Link>
                    )}
                          <span>Updated on: <Moment format="D MMM YYYY" withTitle>
                          {post['modified']}
            </Moment></span>                                  
</div>    
  </div>
</div>             
</Col>
                  
                  </>
              )


            })}

        </Row>
      </Container>


   


    </div>
  );
};

export default SuccessStories;