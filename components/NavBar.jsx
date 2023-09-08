"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex justify-between">
      <div className="logo border-3 mx-5">
        <Link href="/" className="flex ">
          <Image
            src="/otherlogo.png"
            alt="SBTRAVEL logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="md:flex hidden">
        <div className="text-xl font-thin flex gap-6 px-16 py-16 text-amber-500 relative">
          <Link href="/">
            <p className="hover:border-b-2 hover:border-amber-500 hover:px-1 hover:py-1 hover:rounded-2xl">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="hover:border-b-2 hover:border-amber-500 hover:px-1 hover:py-1 hover:rounded-2xl">
              About
            </p>
          </Link>
          <Link href="/destinations">
            <p className="hover:border-b-2 hover:border-amber-500 hover:px-1 hover:py-1 hover:rounded-2xl">
              Destinations
            </p>
          </Link>
          <Link href="/services">
            <p className="hover:border-b-2 hover:border-amber-500 hover:px-1 hover:py-1 hover:rounded-2xl">
              Services
            </p>
          </Link>
          {/* <Link href="/about">Testimonnials</Link> */}
          {/* <Link href="/blog">Blog</Link> */}
          <Link href="/contact">
            <p className="hover:border-b-2 hover:border-amber-500 hover:px-1 hover:py-1 hover:rounded-2xl">
              Contact
            </p>
          </Link>
        </div>
      </div>

      <div className="md:hidden flex relative">
        <div className="flex mx-5">
          <Image
            src="/images/menu.png"
            width={30}
            height={0}
            className="mr-6 mt-12 mb-10 "
            alt="X"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="absolute text-xl right-0 top-24 w-full p-5 rounded-3xl bg-amber-500 text-slate-700 min-w-[210px] flex flex-col gap-2 justify-end items-end; ">
              <Link href="/">HomePage</Link>
              <Link href="/about">About</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/services">Services</Link>
              {/* <Link href="/about">Testimonnials</Link> */}
              {/* <Link href="/blog">Blog</Link> */}
              <Link href="/contact">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
