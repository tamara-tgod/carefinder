import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import HospitalList from "@/components/HospitalList";
import Cta from "@/components/Cta";
import MapPanel from "@/components/MapPanel";



export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <section className="flex flex-row h-200 overflow-hidden">
        <div className="w-full md:w-5/12 min-w-0 ">
          <HospitalList />
        </div>
        <div className="hidden md:block md:w-7/12 h-full">
          <MapPanel />
        </div>
      </section>

      <Features />
      <Cta />
    </div>
  );
}
