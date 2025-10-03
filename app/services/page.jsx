import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Link from "next/link";

const services = [
  { name: "Family Friendly Vacations", img: "/images/family.webp", desc: "Create lasting memories with packages designed for all ages" },
  { name: "Customized Tours", img: "/images/tour.webp", desc: "Tailor-made itineraries crafted to your unique preferences" },
  { name: "Hajj & Umrah Packages", img: "/images/mecca.webp", desc: "Spiritual journeys with complete guidance and support" },
  { name: "Luxury Getaways", img: "/images/lux.webp", desc: "Indulge in premium accommodations and exclusive experiences" },
  { name: "Group Adventures", img: "/images/dubai.webp", desc: "Exciting group travel experiences for teams and friends" },
  { name: "Honeymoon Escapes", img: "/images/paris.webp", desc: "Romantic destinations for the perfect honeymoon" },
  { name: "Corporate Travel", img: "/images/tour.webp", desc: "Professional travel management for your business needs" },
  { name: "Cruise Packages", img: "/images/uns.webp", desc: "Explore the seas with luxurious cruise experiences" },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <section className="relative py-32 bg-gradient-to-br from-brand-navy to-slate-900">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From visa assistance to luxury getaways, we handle every detail of your journey with care and expertise.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.name} className="group relative rounded-2xl overflow-hidden h-96 card-hover">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent group-hover:from-brand-navy/90 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-brand-navy">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let our experts create the perfect itinerary for you.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
