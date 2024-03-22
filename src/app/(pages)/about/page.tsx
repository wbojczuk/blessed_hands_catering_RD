import AboutUs from "@/app/(mainsite)/components/aboutpage/AboutUs/AboutUs"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | Blessed Hands Catering | #1 Rated Catering for Kansas City, Mo",
    description: "Food to Make the Soul Happy | #1 Rated Catering for Kansas City, Mo"
}

export default function AboutPage(){
    return(
        <>
            <PageTitle pageTitle="Taking care of all our customers" />
            <AboutUs />
        </>
    )
}