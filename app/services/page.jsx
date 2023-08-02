import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const Services = () => {
  return (
    <div>
      <NavBar />
      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-3xl bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-2xl text-slate-700 py-5">Discover Our Travel Services</h1>
        </div>
        <p className="w-4/5 m-auto py-5 pb-16 text-center text-xl bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours, we are your ultimate gateway to a world of extraordinary
          travel experiences. Our expert team is committed to curating the perfect journey for you,
          blending adventure, culture, and relaxation into unforgettable memories. Explore our range
          of services tailored to suit your unique wanderlust:
        </p>
      </section>

      <section className="flex flex-wrap justify-between w-11/12 mt-16 m-auto px-5 py-5 bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Customized Tours</h1>
        </div>
        <div className="bg-[url(/images/luxury.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">Luxury Getaways</h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Group Adventures</h1>
        </div>
        <div className="bg-[url(/images/dubai.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">HoneyMoon Escapes</h1>
        </div>
        <div className="bg-[url(/images/egypt.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">Corporate Travel</h1>
        </div>
        <div className="bg-[url(/images/paris.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Family Friendly Vacations</h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Cruise Packages</h1>
        </div>
        <div className="bg-[url(/images/luxury.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">Eco-Tourism</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
