import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <>
  <div className="container-fluid up-bg">
    <header className="d-flex align-items-center">
      <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <Image src="/images/logo.svg"
              width="350"
              height="100"
              className="img-fluid"
            />
      </a>

      <ul className="nav nav-pills menu">
        <li className="nav-item"><a href="#" className="nav-link active" >HOW WE WORK</a></li>
            
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ABOUT
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">WHY WORKFORCE WELL-BEING?</a></li>
                <li><a class="dropdown-item" href="#">APPAREL, FASHION & TEXTILE</a></li>
                <li><a class="dropdown-item" href="#">OUR WORK WITH INFORMAL WORKFORCES</a></li>
                <li><a class="dropdown-item" href="#">OUR TEAM</a></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item"><a href="#" className="nav-link">OUR PROGRAMMES</a></li>
        <li className="nav-item"><a href="#" className="nav-link">COMMUNITY ACTION COLLAB</a></li>
            <li className="nav-item"><a href="#" className="nav-link">STORIES (BLOG)</a></li>
            <li className="nav-item"><a href="#" className="nav-link">MEDIA</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CAREERS & CONTACT</a></li>
      </ul>
    </header>
  </div>

  
  
   

    </>
  )
}

export default Header
