"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="logo border-3 ">
        <Link href="/" className="flex ">
          <Image
            src="/logo.jpg"
            alt="SBTRAVEL logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="">
        <div className="text-xl flex gap-6 px-16 py-16  text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/services">Services</Link>
          {/* <Link href="/about">Testimonnials</Link> */}
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
