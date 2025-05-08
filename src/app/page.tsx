import React from "react";
import { Button } from "@/components/ui/button";
import {
  anton,
  fugaz_one,
  lilita_one,
  sanchez,
  teko,
} from "@/components/google-fonts";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col bg-amber-400">
      <header className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-4 items-center">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="profile.jpg" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl flex flex-col">
            <span className={sanchez.className}>Hi I'm</span>
            <span className={anton.className}>Lawrence Jeremy Poliquit</span>
          </h1>

          <h3 className="text-2xl">
            <span className={fugaz_one.className}>
              Computer Science student
            </span>
          </h3>

          {/* Bible Verse */}
          <div className="flex flex-col justify-center gap-12 max-w-md lg:max-w-lg">
            <h6 className="flex flex-col gap-1 mt-12">
              <span className="font-bold">Proverbs 21:19</span>
              <span className="italic ms-6">
                "It is better to dwell in the wilderness than with a contentious
                and angry woman."
              </span>
            </h6>
            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              {/* Facebook */}

              <Link href="https://www.facebook.com/jeremy.poliquit">
                <button className="btn btn-circle bg-[#1A77F2] text-white border-[#005fd8]">
                  <svg
                    aria-label="Facebook logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="white"
                      d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
                    ></path>
                  </svg>
                </button>
              </Link>

              {/* Instagram */}
              <button className="btn btn-circle bg-black text-white border-black">
                <svg
                  aria-label="X logo"
                  width="16"
                  height="12"
                  viewBox="0 0 300 271"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default page;
