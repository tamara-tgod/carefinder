import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-outline-variant text-on-surface-variant w-full dark:bg-black py-6 mt-auto">
 <Container>
    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start gap-5">
      <div>
        <div id="footer-logo" className="flex items-center">
          <Image src={Logo} alt="company logo" width={50} height={100} />
          <h1 className="text-on-surface text-xl font-semibold cursor-pointer">
            Carefinder
          </h1>
        </div>
        <p>&copy; {new Date().getFullYear()} Carefinder Nigeria.</p>
        <p>Human Centric Care for every citizen.</p>
      </div>
      <div className="flex gap-4">
        <div>
          <h4 className="text-blue-950 font-semibold">PRODUCT</h4>
          <ul className="flex flex-col">
            <Link href="#">Resources</Link>
            <Link href="#">Find Hospital</Link>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-950 font-semibold">COMPANY</h4>
          <ul className="flex flex-col">
            <Link href="">Contact Us</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
          </ul>
        </div>
      </div>
    </div>
    </Container>
</div>
  );
}
