import Image from "next/image";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Logo from "../assets/Logo.png"

export default function HeroSection() {
  return (
    <div className="relative w-full h-full py-10 text-on-primary">
      <Container>
        <div>
          <Image
            src="/HeroBg.png"
            alt="Hospital scene"
            fill
            className="object-cover fixed"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 flex flex-col justify-center items-center gap-3">
               <Image
                       src={Logo}
                       alt="company logo"
                       width={100}
                       height={100}
                       />
            <h1 className="text-3xl font-bold w-full md:w-2/4 text-center">Bridging the gap to essential health services in Nigeria.</h1>
            <p className="text-center md:w-[40%]">
              Access verified healthcare providers in your local community.
              Fast, relaible and human-centric
            </p>
            <div>
              <SearchBar />

              <div id="tags" className="flex gap-2 mt-4 justify-center">
                <p className="bg-gray-400 px-2 rounded-full text-center text-sm">Lagos</p>
                <p className="bg-gray-400 px-2 rounded-full text-center text-sm">Abuja</p>
                <p className="bg-gray-400 px-2 rounded-full text-center text-sm">Ibadan</p>
                <p className="bg-gray-400 px-2 rounded-full text-center text-sm">PortHarcourt</p>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
