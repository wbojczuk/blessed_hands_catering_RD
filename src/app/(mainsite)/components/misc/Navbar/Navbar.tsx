"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const menuRef: any = useRef()
  const servicesRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/services"],
      ref: servicesRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    },
    {
      triggers: ["/menu"],
      ref: menuRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)
    
    if(window.scrollY > 10){
      navbarAnimIn()
    }else{
      navbarAnimOut()
    }

    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 10){
        navbarAnimIn()
      }else{
        navbarAnimOut()
      }
    })

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])

  function navbarAnimIn(){
  
  }

  function navbarAnimOut(){
   
  }


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--spin"

  return (
    <nav ref={navRef} className={styles.mainNav}>

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img src="/img/logo.webp" className={styles.logoImg} width={500} height={250} alt="Logo" />
        
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          ref={homeRef}
          />

          <NavOption
          title="About Us"
          url="/about"
          ref={aboutRef}
          />

        <NavOption
          title="Services"
          url="/services"
          ref={servicesRef}
          />

        <NavOption
          title="Menu"
          url="/menu"
          ref={menuRef}
          />

          
          <Link href={"/contact"} className={styles.cta}>
            <span>Inquire</span>
          </Link>
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
