import Catering from "@/app/(mainsite)/components/homepage/Catering/Catering";
import Deserves from "@/app/(mainsite)/components/homepage/Deserves/Deserves";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import More from "@/app/(mainsite)/components/homepage/More/More";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Unique from "@/app/(mainsite)/components/homepage/Unique/Unique";



export default function Home() {
  return (
    <>
      <Header />
      <Catering />
      <Unique />
      <Deserves />
      <More />
      <ServiceArea />
    </>
  )
}
