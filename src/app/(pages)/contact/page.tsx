import type { Metadata } from "next"
import styles from "./contact.module.css"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"

export const metadata: Metadata = {
    title: "Contact Us | Blessed Hands Catering | #1 Rated Catering for Kansas City, Mo",
    description: "Food to Make the Soul Happy | #1 Rated Catering for Kansas City, Mo"
}

export default function ContactPage(){
    return(
        <>
            <PageTitle pageTitle="Contact" />
            <ContactInfo />
        </>
    )
}