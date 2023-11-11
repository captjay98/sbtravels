import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const Services = () => {
  return (
    <div>
      <NavBar />
      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-xl shadow-2xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-2xl text-slate-700 py-5">Discover Our Travel Services</h1>
        </div>
        <p className="w-4/5 max-sm:w-full max-sm:px-4  m-auto py-5 pb-16 text-center text-xl max-sm:text-[18px] bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours Ltd, we are your ultimate gateway to a world of extraordinary
          travel experiences. Our expert team is committed to curating the perfect journey for you,
          blending adventure, culture, and relaxation into unforgettable memories. Explore our range
          of services tailored to suit your unique wanderlust:
        </p>
      </section>

      <section className="flex flex-wrap rounded-3xl justify-between w-11/12 mt-16 m-auto px-5 py-5 ">
        <div className="bg-[url(/images/family.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-amber-900 text-xl py-16 text-center">Family Friendly Vacations</h1>
        </div>
        <div className="bg-[url(/images/tour.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-16 text-center">Customized Tours</h1>
        </div>
        <div className="bg-[url(/images/mecca.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-2 text-center">Hajj & Umrah Visa</h1>
        </div>
        <div className="bg-[url(/images/lux.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-2 text-center">Luxury Getaways</h1>
        </div>
        <div className="bg-[url(/images/dubai.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-16 text-center">Group Adventures</h1>
        </div>
        <div className="bg-[url(/images/paris.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-16 text-center">HoneyMoon Escapes</h1>
        </div>
        <div className="bg-[url(/images/tour.jpg)] m-auto mt-5 w-80  h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-slate-900 text-xl py-16 text-center">Corporate Travel</h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] m-auto mt-5 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5 shadow-2xl">
          <h1 className="text-amber-900 text-xl py-16 text-center">Cruise Packages</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
