"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Container from "./Container";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="bg-surface relative z-50 text-on-surface px-1 py-3 text-sm">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image src={Logo} alt="company logo" width={50} height={100} />
              <h1 className="text-primary text-xl font-semibold cursor-pointer">
                Carefinder
              </h1>
            </div>
          </Link>

          {/* mobile nav */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? "✕" : "☰"}
          </button>
          {isOpen && (
            <div className="absolute left-0 top-0 w-3/4 h-screen bg-white backdrop-blur-md flex flex-col items-start gap-4 py-6 px-4 shadow-lg cursor-pointer rounded-r-2xl md:hidden">
          <Link href={"/"}>
            <div className="flex items-center mb-4">
              <Image src={Logo} alt="company logo" width={20} height={50} />
              <h1 className="text-primary text-sm font-semibold cursor-pointer">
                Carefinder
              </h1>
            </div>
          </Link>
              <Link
                className="hover:bg-primary/50 text-on-surface-variant  w-full px-1.5 py-1 hover:font-semibold flex justify-start items-center gap-1.5 rounded-md"
                href="/"
              >
                <span className="material-symbols-outlined text-white-600">local_hospital</span>
                Find Hospital
              </Link>
              <Link
                className="hover:bg-primary/50  text-on-surface-variant  w-full px-1.5 py-1 hover:font-semibold flex justify-start items-center gap-1.5 rounded-md"
                href="/about"
              >
                 <span className="material-symbols-outlined text-white-600">info</span>
                About
              </Link>
              <Link
                className="hover:bg-primary/50  text-on-surface-variant  w-full px-1.5 py-1 hover:font-semibold flex justify-start items-center gap-1.5 rounded-md"
                href="/contact"
              >
                <span className="material-symbols-outlined text-white-600">contact_page</span>
                Contact
              </Link>
              <Link
                className="bg-primary w-full mx-auto text-on-primary px-4 py-2 rounded-md text-center flex justify-center gap-1.5"
                href="/admin/login"
              >
                Admin Login
                <span className="material-symbols-outlined">login</span>
              </Link>
            </div>
          )}

          <div className="hidden md:flex gap-4 items-center cursor-pointer">
            <Link
              className="hover:text-primary hover:font-semibold hover:underline hover:underline-offset-4 decoration-2"
              href="/"
            >
              Find Hospital
            </Link>
            <Link
              className="hover:text-primary hover:font-semibold hover:underline hover:underline-offset-4 decoration-2"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-primary hover:font-semibold hover:underline hover:underline-offset-4 decoration-2"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="bg-primary text-on-primary px-4 py-2 rounded-md text-center"
              href="/admin/login"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
