import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Jost, Libre_Caslon_Text } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"


const primaryFont = Libre_Caslon_Text({ subsets: ['latin'], weight: ["400", "700"], display: "swap", variable: "--primary-font" })
const secondaryFont = Jost({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "700", "800",], display: "swap", variable: "--secondary-font" })

export const metadata: Metadata = {
  title: 'Blessed Hands Catering | #1 Rated Catering for Kansas City, Mo',
  description: 'Food to Make the Soul Happy | #1 Rated Catering for Kansas City, Mo'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>

      {(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID != "0000000") && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script></>}

        <Navbar />

        {children}

        <Footer />
        
        </body>
    </html>
  )
}
