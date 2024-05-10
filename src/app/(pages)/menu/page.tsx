import Menu from "@/app/(mainsite)/components/menupage/Menu/Menu"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: "Menu",
	  description: "Menu"
}

export default function MenuPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Our Menu" />
			<Menu />
	 	 </>
	 )
}