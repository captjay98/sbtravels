import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-brand-navy to-slate-900">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">SaraBell</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Creating exceptional travel experiences since 2019. Your journey, our passion.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At SaraBell Travel and Tours Ltd, we believe that travel is not just about reaching destinations—it&apos;s about embarking on a journey of discovery, self-discovery, and enriching experiences.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our story began in 2019, fueled by a shared passion for exploration and a vision to create unparalleled travel experiences for wanderlust souls like you.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We&apos;ve helped over 500 travelers discover the world&apos;s most captivating destinations, and we&apos;re just getting started.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-luxury-lg">
              <div className="absolute inset-0 bg-[url(/images/dubai.webp)] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* IATA Badge */}
      <section className="py-12 bg-brand-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border-2 border-brand-gold/30">
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-brand-gold font-bold text-lg">IATA Accredited Agency</div>
              <div className="text-white/80 text-sm">Certified by International Air Transport Association</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-luxury-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              To curate the most personalized and unforgettable travel adventures that cater to your unique desires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-luxury">
              <div className="w-16 h-16 mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Excellence</h3>
              <p className="text-slate-600">We craft itineraries that make your travel dreams come alive, leaving you with cherished memories to last a lifetime.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-luxury">
              <div className="w-16 h-16 mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Personalization</h3>
              <p className="text-slate-600">Every journey is tailored to reflect your aspirations, interests, and preferences with meticulous attention to detail.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-luxury">
              <div className="w-16 h-16 mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Trust</h3>
              <p className="text-slate-600">Your satisfaction is our utmost priority. We work tirelessly to ensure that your travel dreams become reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">
              Our unwavering commitment to putting you—our valued travelers—at the heart of everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-xl">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Seasoned Travel Experts</h3>
                <p className="text-slate-600">Our team of passionate travel professionals brings years of experience and insider knowledge to every journey we plan.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-xl">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Attention to Detail</h3>
                <p className="text-slate-600">We go the extra mile to ensure that your travel experience surpasses expectations, from planning to execution.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-xl">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Customer-Centric Focus</h3>
                <p className="text-slate-600">Every journey is a collaborative effort. We take time to understand your aspirations and create resonant itineraries.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-brand-gold font-bold text-xl">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">Lasting Relationships</h3>
                <p className="text-slate-600">We build relationships that extend beyond your trip, ensuring you have a trusted partner for all future adventures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-navy">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let&apos;s create unforgettable memories together.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
