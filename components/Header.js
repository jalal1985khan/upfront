import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <>
  <div className="container-fluid up-bg">
    <header className="d-flex align-items-center">
      <Link href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <Image src="/images/logo.svg"
              width="350"
              height="100"
              className="img-fluid"
            />
      </Link>

      <ul className="nav nav-pills menu">
        <li className="nav-item"><Link href="/how-we-work" className="nav-link active" >HOW WE WORK</Link></li>
            
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ABOUT
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="/why-well-being">WHY WORKFORCE WELL-BEING?</Link></li>
                <li><Link class="dropdown-item" href="/apparel-fashion-textile">APPAREL, FASHION & TEXTILE</Link></li>
                <li><Link class="dropdown-item" href="/our-reach">OUR WORK WITH INFORMAL WORKFORCES</Link></li>
                <li><Link class="dropdown-item" href="/our-team">OUR TEAM</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item"><Link href="/our-programmes" className="nav-link">OUR PROGRAMMES</Link></li>
        <li className="nav-item"><Link href="/communityactioncollab" className="nav-link">COMMUNITY ACTION COLLAB</Link></li>
            <li className="nav-item"><Link href="#" className="nav-link">STORIES (BLOG)</Link></li>
            <li className="nav-item"><Link href="#" className="nav-link">MEDIA</Link></li>
            <li className="nav-item"><Link href="#" className="nav-link">CAREERS & CONTACT</Link></li>
      </ul>
    </header>
  </div>

  
  
   

    </>
  )
}

export default Header
