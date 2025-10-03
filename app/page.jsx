import Link from "next/link";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-slate-900/80" />
        <div className="relative z-10 h-full flex flex-col">
          <NavBar />
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-white text-5xl sm:text-7xl font-bold tracking-tight leading-tight">
                Discover the World with <span className="text-gradient">SaraBell</span>
              </h1>
              <p className="mt-6 text-white/90 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                Experience luxury travel, personalized itineraries, and seamless journeys to the world&apos;s most captivating destinations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Planning
                </Link>
                <Link href="/destinations" className="btn-secondary">
                  Explore Destinations
                </Link>
              </div>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <div className="text-3xl font-bold text-brand-gold">15+</div>
                  <div className="text-sm mt-1 text-white/80">Destinations</div>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <div className="text-3xl font-bold text-brand-gold">500+</div>
                  <div className="text-sm mt-1 text-white/80">Happy Clients</div>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <div className="text-3xl font-bold text-brand-gold">24/7</div>
                  <div className="text-sm mt-1 text-white/80">Support</div>
                </div>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
                  <div className="text-3xl font-bold text-brand-gold">6+</div>
                  <div className="text-sm mt-1 text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IATA Accreditation Badge */}
      <section className="py-8 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-brand-gold font-bold text-xl">IATA Accredited</div>
                <div className="text-white/80 text-sm">International Air Transport Association</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="text-white/90 text-sm max-w-md">
              Certified travel agency ensuring highest standards of service and reliability
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Crafting Unforgettable Journeys</h2>
            <p className="section-subtitle">
              At SaraBell Travel and Tours Ltd, we transform your travel dreams into extraordinary realities. With meticulous attention to detail and personalized service, we create journeys that inspire and delight.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Tailored Experiences</h3>
              <p className="text-slate-600">Every journey is customized to your unique preferences and travel style.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Trusted Expertise</h3>
              <p className="text-slate-600">6+ years of creating seamless travel experiences for discerning travelers.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">24/7 Support</h3>
              <p className="text-slate-600">Round-the-clock assistance ensuring peace of mind throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-luxury-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">From visa assistance to luxury getaways, we handle every detail of your journey.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services" className="group relative rounded-2xl overflow-hidden h-[450px] card-hover">
              <div className="absolute inset-0 bg-[url(/images/uns.webp)] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent group-hover:from-brand-navy/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Personalized Travel</h3>
                <p className="text-white/90 text-sm">Bespoke itineraries crafted to perfection</p>
              </div>
            </Link>
            <Link href="/services" className="group relative rounded-2xl overflow-hidden h-[450px] card-hover">
              <div className="absolute inset-0 bg-[url(/images/visa.webp)] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent group-hover:from-brand-navy/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Visa Assistance</h3>
                <p className="text-white/90 text-sm">Hassle-free visa processing and support</p>
              </div>
            </Link>
            <Link href="/services" className="group relative rounded-2xl overflow-hidden h-[450px] card-hover">
              <div className="absolute inset-0 bg-[url(/images/mecca.webp)] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent group-hover:from-brand-navy/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">Hajj & Umrah</h3>
                <p className="text-white/90 text-sm">Spiritual journeys with complete care</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-subtitle">Explore the world&apos;s most enchanting locations with our expert guidance.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dubai, UAE', img: '/images/dubai.webp', desc: 'Modern luxury meets timeless culture' },
              { name: 'Mecca, Saudi Arabia', img: '/images/mecca.webp', desc: 'The heart of Islamic pilgrimage' },
              { name: 'Paris, France', img: '/images/paris.webp', desc: 'The eternal city of lights and romance' }
            ].map((dest) => (
              <Link key={dest.name} href="/destinations" className="group relative rounded-2xl overflow-hidden h-96 card-hover">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${dest.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.desc}</p>
                  <div className="mt-4 inline-flex items-center text-brand-gold text-sm font-semibold">
                    Explore <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-navy">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let our travel experts create the perfect itinerary for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us Today
            </Link>
            <a href="tel:+2348036600885" className="btn-secondary">
              Call: 08036600885
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mb-12">We&apos;re open Monday to Saturday from 9am - 5pm</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-xl bg-luxury-50 border border-luxury-200">
              <div className="text-brand-gold mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Email Us</h3>
              <a className="text-brand-gold hover:text-brand-gold-dark transition-colors" href="mailto:Sarabelltravelandtours@gmail.com?subject=Contact/Inquiry&body=Hello SBTours.">
                Sarabelltravelandtours@gmail.com
              </a>
            </div>
            <div className="p-8 rounded-xl bg-luxury-50 border border-luxury-200">
              <div className="text-brand-gold mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Call Us</h3>
              <a className="text-brand-gold hover:text-brand-gold-dark transition-colors text-xl font-semibold" href="tel:+2348036600885">08036600885</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
