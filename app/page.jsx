"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import images
import Logo from "@/public/logo.svg";
import eyeIcon from "@/public/show.png";
import hideIcon from "@/public/hide.png";

export default function LoginPage() {
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/loginFailed");
  };

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => emailRef.current?.focus(), []);

  // Rendered JSX for the login page
  return (
    <div className="bg-[#f0f2f5]">
      <div className="pb-8 pt-4 md:grid md:grid-cols-2 md:overflow-x-hidden md:py-24 md:pb-28 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2">
        <header className="grid grid-cols-1 items-center justify-items-center md:relative lg:relative ">
          <div className="flex md:absolute md:left-5 md:top-20 md:pt-1 lg:absolute lg:left-16 lg:justify-between lg:pl-1">
            <Image
              className="h-24 w-full flex-1 scale-105"
              src={Logo}
              alt="Facebook"
              priority
            />
            <div className="md:invisible md:flex-1"></div>
          </div>
          <div className="w-96 text-center md:absolute md:left-10 md:top-44 md:w-80 md:text-left lg:absolute lg:left-20 lg:top-44 lg:-ml-1 lg:w-auto lg:scale-95 lg:text-left">
            <h1 className="mb-4 text-2xl leading-7 md:leading-7 lg:text-3xl lg:leading-8 ">
              Connect with friends and the world around you on Facebook.
            </h1>
          </div>
        </header>

        <main className="mb-24 grid grid-cols-1 justify-items-center md:scale-x-105">
          <form
            className="mt-4 w-96 rounded-lg border-2 bg-white p-4 pb-6 shadow-xl md:mt-8"
            onSubmit={handleSubmit}
          >
            {/* Input field for email */}
            <label className="block text-sm font-medium text-gray-600">
              <input
                type="text"
                id="email"
                className="w-full rounded-md border-2 p-3 text-[1.05rem] focus:outline-0 focus:ring-1 focus:ring-blue-500"
                placeholder="Email or phone number"
                ref={emailRef}
                autoComplete="on"
              />
            </label>

            {/* Input field for password with show/hide functionality */}
            <label className="mt-2 block text-xs font-medium text-gray-600">
              <div className="relative flex items-center justify-end">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="placeholder:text-md mt-1 w-full rounded-md border-2 p-3 text-[1.05rem] focus:outline-0 focus:ring-1 focus:ring-blue-500 "
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                {/* Toggle password visibility button */}
                {password && (
                  <div
                    className="absolute mr-4 mt-1 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Image
                      src={showPassword ? eyeIcon : hideIcon}
                      alt=""
                      className="h-[1.7rem] w-full rounded-full p-[0.35rem] hover:bg-gray-100 active:bg-gray-300"
                    />
                  </div>
                )}
              </div>
            </label>

            {/* Submit button for the login form */}
            <button type="submit" className="invisible"></button>
            <Link
              href="/loginFailed"
              className="mt-4 inline-block w-full rounded-md bg-[#0866ff] p-2 py-3 pt-2 text-center font-sans text-xl font-bold text-white transition-all hover:bg-[#1877f2] focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:ring-0 active:transition-none"
            >
              Log In
            </Link>

            <Link
              href="/maintenance"
              className="mt-3 block text-center text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
            <div className="mt-5 border-t"></div>

            <div className="grid w-full place-items-center">
              <Link
                href="/maintenance"
                className="text-md mx-auto mt-6 inline-block rounded-md border-0 bg-[#42b72a] px-4 py-3 font-bold tracking-wider text-white hover:bg-[#36a420] hover:transition-colors focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:bg-[#2b9217]"
                type="submit"
              >
                Create new account
              </Link>
            </div>
          </form>
          <div className="mx-auto mt-6">
            <p className="text-center text-sm">
              <Link
                href="/maintenance"
                className="font-semibold tracking-wider hover:underline"
              >
                <strong>Create a Page</strong>
              </Link>
              &nbsp;for a celebrity, brand or business.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
