import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Header() {
  const router = usePathname();
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
        <li className="nav-item"><Link href="/how-we-work" className= {router == "/how-we-work" ? "active nav-link" : "nav-link"} >HOW WE WORK</Link></li>
            
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ABOUT
          </a>
          <ul class="dropdown-menu">
            <li><Link  className= {router == "/why-well-being" ? "active dropdown-item" : "dropdown-item"} href="/why-well-being">WHY WORKFORCE WELL-BEING?</Link></li>
                <li><Link className= {router == "/apparel-fashion-textile" ? "active dropdown-item" : "dropdown-item"} href="/apparel-fashion-textile">APPAREL, FASHION & TEXTILE</Link></li>
                <li><Link className= {router == "/our-reach" ? "active dropdown-item" : "dropdown-item"} href="/our-reach">OUR WORK WITH INFORMAL WORKFORCES</Link></li>
                <li><Link className= {router == "/our-team" ? "active dropdown-item" : "dropdown-item"} href="/our-team">OUR TEAM</Link></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item"><Link href="/our-programmes" className= {router == "/our-programmes" ? "active nav-link" : "nav-link"}>OUR PROGRAMMES</Link></li>
        <li className="nav-item"><Link href="/communityactioncollab" className= {router == "/communityactioncollab" ? "active nav-link" : "nav-link"}>COMMUNITY ACTION COLLAB</Link></li>
            <li className="nav-item"><Link href="#" className= {router == "/blog" ? "active nav-link" : "nav-link"}>STORIES (BLOG)</Link></li>
            <li className="nav-item"><Link href="#" className= {router == "/tools-resources" ? "active nav-link" : "nav-link"}>MEDIA</Link></li>
            <li className="nav-item"><Link href="#" className= {router == "/contact" ? "active nav-link" : "nav-link"}>CAREERS & CONTACT</Link></li>
      </ul>
    </header>
  </div>

  
  
   

    </>
  )
}

export default Header
