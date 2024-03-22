import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Services from "@/app/(mainsite)/components/servicespage/Catering/Services"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | Blessed Hands Catering | #1 Rated Catering for Kansas City, Mo",
    description: "Food to Make the Soul Happy | #1 Rated Catering for Kansas City, Mo"
}

export default function ServicesPage(){
    return(
        <>
            <PageTitle pageTitle="Ready To Make Memories?" />
            <Services />
        </>
    )
}