"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="bg-[#f0f2f5] pb-[20rem]">
          <div className="flex justify-center pt-9">
            <Image className="h-[5rem] w-full " src={Logo} alt="Facebook" />
          </div>
          <div className="mt-10 grid place-items-center leading-6">
            <h1 className="mb-3 text-8xl">
              <strong>404</strong>
            </h1>
            <p className="mx-auto mb-3 max-w-96 text-2xl">
              Oops! We can&apos;t seem to find the page you&apos;re looking for.
            </p>
            <button
              onClick={() => router.back()}
              className="underline hover:text-blue-600"
            >
              Go Back.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
