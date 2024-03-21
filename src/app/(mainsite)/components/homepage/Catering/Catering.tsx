"use client"
import Link from "next/link"
import styles from "./catering.module.css"

export default function Catering() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/catering-bg.png" width={360} height={600} alt="Image of catering food" />
        </div>
        

        <div className={styles.content}>
            <h4>Blessed Hands</h4>
            <h2>Catering And Events</h2>

            <p>Whether you're planning a corporate event, a wedding celebration, or an intimate gathering with friends, Blessed Hands Catering is here to cater to your every need.
              <br /><br />
              From carefully curated menus to the flawless delivery, we ensure that every detail is tailored to perfection, leaving you free to breathe in the moment.
            </p>
            <Link className='main-link' href='/contact'><span>Inquire</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"/></g></svg></Link>
        
            <img src="/icons/abstract.svg" aria-hidden className={styles.abstract} />
        </div>
    </section>
  )
}
