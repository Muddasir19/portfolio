import FeaturedProjects from "@/components/FeaturedProjects";
import InfoSection from "@/components/InfoSection";
import MainSection from "@/components/MainSection";
import MovingCards from "@/components/MovingCards";
import UpcomingEvent from "@/components/UpcomingEvent";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased  text-white ">
    
        <MainSection/>
        <FeaturedProjects/>
        <MovingCards/>
        <UpcomingEvent/>
        <InfoSection/>
     
    </main>
  );
}
