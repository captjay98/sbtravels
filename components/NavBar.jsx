"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex justify-between">
      <div className="logo border-3 mx-3">
        <Link href="/" className="flex ">
          <Image
            src="/otherlogo.png"
            alt="SBTRAVEL logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="md:flex hidden">
        <div className="text-lg font-normal flex gap-6 px-16 py-10 text-slate-900 relative">
          <Link href="/">
            <p className="hover:underline-offset-4  hover:underline hover:text-blue-900">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:underline-offset-4  hover:underline hover:text-blue-900">About</p>
          </Link>
          <Link href="/destinations">
            <p className="hover:underline-offset-4  hover:underline hover:text-blue-900">
              Destinations
            </p>
          </Link>
          <Link href="/services">
            <p className="hover:underline-offset-4  hover:underline hover:text-blue-900">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="hover:underline-offset-4  hover:underline hover:text-amber-500">
              Contact
            </p>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex relative">
        <div className="flex mx-4">
          <Image
            src="/images/menu.png"
            width={30}
            height={0}
            className="mr-6 mt-10 mb-10 "
            alt="X"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="absolute text-lg leading-7 tracking-wide right-0 top-24 w-full p-5 shadow-xl rounded-xl bg-amber-500 text-slate-700 min-w-[180px] flex flex-col gap-2 justify-end items-end; ">
              <Link href="/">HomePage</Link>
              <Link href="/about">About</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
