"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/destinations", label: "Destinations" },
    { href: "/services", label: "Services" },
  ];

  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isHomePage = pathname === "/";

  return (
    <nav className={`sticky top-0 z-50 border-b ${isHomePage ? "border-white/20" : "border-luxury-200 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/otherlogo.png"
              alt="SaraBell Travel"
              width={160}
              height={64}
              className="object-contain w-16 h-auto sm:w-32 md:w-28 lg:w-28"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className={`text-sm font-semibold flex items-center gap-8 ${isHomePage ? "text-white" : "text-slate-700"}`}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-brand-gold transition-colors ${isActive(href) ? "text-brand-gold" : ""}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="text-brand-gold hover:text-brand-gold-dark transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/contact" className="btn-primary text-sm">
            Plan Your Trip
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            aria-label="Toggle menu"
            className={`p-2 rounded-md ${isHomePage ? "hover:bg-white/10" : "hover:bg-luxury-100"}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src="/images/menu.webp" width={28} height={28} alt="Menu" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute right-4 top-16 sm:top-20 w-[88%] max-w-xs p-6 shadow-luxury-lg rounded-2xl bg-white ring-1 ring-luxury-200 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="font-semibold hover:text-brand-gold">
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="font-semibold hover:text-brand-gold">
            Contact
          </Link>
          <Link href="/contact" className="mt-2 btn-primary text-sm" onClick={() => setOpen(false)}>
            Plan Your Trip
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
