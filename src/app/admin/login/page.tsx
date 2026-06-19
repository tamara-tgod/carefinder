"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";



export default function LoginPage() {
const router = useRouter();
const supabase = createClient()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });


    if (error) {
      setError(error.message);
      setLoading(false)
      return;
    }
   
    router.replace("/admin")

  }

  return (
    <div className="bg-surface h-screen relative">
      <Container>
        <div className="bg-white w-3/4 py-5 px-5 mx-auto rounded-md flex flex-col justify-center gap-6 text-on-surface-variant">
          {/* logo section */}
          <div className="flex flex-col items-center text-center gap-2">
            <Image src={Logo} alt="company logo" width={100} height={200} />
            <h1 className="text-primary font-semibold text-xl">Carefinder</h1>
            <p>ADMINISTRATOR PORTAL</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold">Welcome Back</h2>
            <p className="text-sm w-3/4">
              Please enter your credentials to manage civic health data.
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col items-start">
              <label htmlFor="">Email Address</label>

              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  mail
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-3 py-1.5 rounded-lg border-2 border-gray-500 pl-10 pr-3 "
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <label
                htmlFor="password"
                className="w-full flex justify-between "
              >
                Password
                <span className="text-primary font-semibold">
                  Forgot Password?
                </span>
              </label>

              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  lock
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full pl-10 pr-3 py-1.5 rounded-lg border-2 border-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                id="login"
                name="stay loggedin"
                value="yes"
                className=" px-3 py-1.5 rounded-lg border"
              />
              <label htmlFor="login">Stay logged in for 30 days</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-on-primary flex items-center justify-center w-full px-3 py-1.5 rounded-lg font-semibold "
            >
              {loading ? "Signing in..." : "Access Admin Panel"}
              <span className="material-symbols-outlined">login</span>
            </button>
          </form>
          <hr />
          <div className="flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_left_alt</span>
            <Link href={"/"}>Back to Search</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
