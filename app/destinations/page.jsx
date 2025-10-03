import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Link from "next/link";

const destinations = [
  { name: "Dubai, UAE", img: "/images/dubai.webp", desc: "Good Vibes in Dubai - Modern luxury meets timeless culture" },
  { name: "Mecca & Medina", img: "/images/mecca.webp", desc: "Tranquility & Worship - The heart of Islamic pilgrimage" },
  { name: "Paris, France", img: "/images/paris.webp", desc: "Romance and Art in Paris - The eternal city of lights" },
  { name: "Alexandria, Egypt", img: "/images/egypt.webp", desc: "The Pyramids - Ancient wonders and rich history" },
  { name: "Maldives", img: "/images/maldives.webp", desc: "Beach Bliss - Paradise islands and crystal waters" },
  { name: "Serengeti, Tanzania", img: "/images/tanzania.webp", desc: "Wildlife Safari - Experience nature at its finest" },
  { name: "Marrakech, Morocco", img: "/images/morocco.webp", desc: "Cultural Fusion - Vibrant markets and rich traditions" },
  { name: "Kusail, Qatar", img: "/images/qatar.webp", desc: "Modernity and Art - Where tradition meets innovation" },
  { name: "And Many More", img: "/images/uns.webp", desc: "Explore countless destinations around the world" },
];

const Destination = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <section className="relative py-32 bg-gradient-to-br from-brand-navy to-slate-900">
        <div className="absolute inset-0 bg-[url(/images/plane.webp)] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore <span className="text-gradient">Destinations</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the world&apos;s most enchanting destinations, each brimming with unique wonders and cultural treasures.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.name} className="group relative rounded-2xl overflow-hidden h-96 card-hover">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${dest.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.desc}</p>
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
            Ready to Explore?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let us help you plan your dream destination.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Planning
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destination;
