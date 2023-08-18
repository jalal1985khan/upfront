import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Col, Container, Row} from 'react-bootstrap'



function Header() {
  const router = usePathname();
  return (
    <>
<nav class="navbar bg-body-tertiary m-line">
<div class="container-fluid up-bg">
<Link href="/" className="navbar-brand">
<img src="/images/logo.svg"
className="img-fluid"/>
</Link>
<div className="d-none d-lg-block">
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
            <li className="nav-item"><Link href="/blog" className= {router == "/blog" ? "active nav-link" : "nav-link"}>STORIES (BLOG)</Link></li>
            <li className="nav-item"><Link href="/tools-resources" className= {router == "/tools-resources" ? "active nav-link" : "nav-link"}>MEDIA</Link></li>
            <li className="nav-item"><Link href="/contact" className= {router == "/contact" ? "active nav-link" : "nav-link"}>CAREERS & CONTACT</Link></li>
            </ul></div>
<div className="d-block d-lg-none d-xl-none d-xxl-none">
<button class="btn btn-humburger" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <AiOutlineAlignLeft size={30} />
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>
                
</div>
  </div>
</nav>  

    </>
  )
}

export default Header
