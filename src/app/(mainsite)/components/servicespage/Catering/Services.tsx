"use client"
import Link from "next/link"
import styles from "./services.module.css"

export default function Services() {
  return (
    <section className={styles.section}>
        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/catering.webp" width={360} height={600} alt="Image of catering food" />
          </div>
          

          <div className={styles.content}>
              <h2>Catering</h2>

              <p>At Blessed Hands Catering, we believe that food is more than just sustenance—it's an expression of love, creativity, and culture. Our dedicated team of chefs combines passion and skill to create exquisite menus that tantalize the taste buds and leave a lasting impression.
<br /><br />
From intimate dinner parties to lavish weddings and corporate events, we approach each occasion with the same level of care and attention to detail. Whether you're planning an elegant cocktail reception or a formal sit-down dinner, we work closely with you to customize a menu that reflects your unique tastes and preferences.
              </p>
              <Link className='main-link' href='/contact'><span>Inquire</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"/></g></svg></Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/event-planning.webp" width={360} height={600} alt="Image of catering food" />
          </div>
          

          <div className={styles.content}>
              <h2>Event Planning</h2>

              <p>We don't just provide exceptional food; we create unforgettable experiences. Our event planning services are designed to take the stress out of organizing your special occasion, allowing you to relax and enjoy every moment.
<br /><br />
With years of experience in the industry, our dedicated team of event planners possesses the expertise and creativity to bring your vision to life. Whether you're hosting a wedding, corporate event, birthday party, or any other special gathering, we'll work closely with you to understand your unique preferences and requirements.
              </p>
              <Link className='main-link' href='/contact'><span>Inquire</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"/></g></svg></Link>
          </div>
        </div>

        <div className={styles.itemWrapper}>
          <div className={styles.imgWrapper}>
              <img className={styles.img} src="/img/cooking-lessons.webp" width={360} height={600} alt="Image of catering food" />
          </div>
          

          <div className={styles.content}>
              <h2>Cooking Lessons</h2>

              <p>Our cooking lessons offer a hands-on experience like no other. Whether you're a novice in the kitchen or a seasoned home cook looking to expand your repertoire, our classes are designed to inspire and empower you to create delicious dishes with confidence.
<br /><br />
From mastering the basics of knife skills to exploring the intricate flavors of various cuisines, our diverse range of cooking lessons caters to all skill levels and interests. Each session is carefully crafted to provide you with valuable insights, techniques, and insider tips that will elevate your culinary prowess.
              </p>
              <Link className='main-link' href='/contact'><span>Inquire</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"/></g></svg></Link>
          </div>
        </div>

    </section>
  )
}
