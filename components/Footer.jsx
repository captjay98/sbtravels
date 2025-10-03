import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-brand-gold">SaraBell Travel & Tours</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Creating extraordinary travel experiences since 2019. Your journey to the world&apos;s most captivating destinations begins here.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-brand-gold/30">
              <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-brand-gold font-semibold text-sm">IATA Accredited</span>
            </div>
            <div className="flex gap-4">
              <a href="mailto:Sarabelltravelandtours@gmail.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="tel:+2348036600885" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/80 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link href="/destinations" className="text-white/80 hover:text-brand-gold transition-colors">Destinations</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-white/80">
              <li className="text-sm">Monday - Saturday</li>
              <li className="text-sm">9:00 AM - 5:00 PM</li>
              <li className="mt-4">
                <a href="tel:+2348036600885" className="text-brand-gold hover:text-brand-gold-light transition-colors font-semibold">
                  08036600885
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} SaraBell Travel and Tours Ltd. All rights reserved.
          </p>
          <a 
            href="https://thecodecaptain.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-gold hover:text-brand-gold-light transition-colors text-sm"
          >
            Designed by thecodecaptain
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
