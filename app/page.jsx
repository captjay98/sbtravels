import Image from "next/image";
import Link from "next/link";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <section className="rounded-md  bg-[url(/images/plane.jpg)]  bg-cover bg-no-repeat border-black w-screen h-screen m-auto ">
        <div className="bg-[hsla(0,0%,0%,0.5)] h-full">
          <NavBar />
          <h1 className="pt-28 text-5xl max-sm:text-3xl text-center  bg-clip-text text-transparent bg-gradient-to-br from-amber-300 to-slate-300 ">
            Welcome to <span class="text-amber-400 font-semibold tracking-wider">SaraBell</span>{" "}
            Travel and Tours Ltd<br></br>
          </h1>
          <div className="px-5  mt-7 m-auto max-sm:w-full w-3/4">
            <p className=" px-4 text-center font-semibold max-sm:text-sm text-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-slate-300 tracking-wide leading-7">
              Your gateway to extraordinary travel experiences! Discover the world&apos;s most
              captivating destinations, immerse yourself in unique cultures, and create
              unforgettable memories. Whether you&apos;re seeking an adventurous escapade, a
              luxurious getaway, or a relaxing retreat, our expert team is here to curate your dream
              vacation. Start your journey today and let us take you places you&apos;ve only dreamed
              of!
            </p>
          </div>
          {/* <h3 className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-900 to-yellow-900 px-5 py-5"> */}
          {/*   Experience Hassle Free Travel */}
          {/* </h3> */}
        </div>
      </section>

      <div className="text-black mt-20 text-center text-2xl px-5 pt-3 ">
        <h1 className="text-3xl font-semibold text-slate-700 py-5">About Us</h1>
      </div>

      <section className="min-h-96 h-auto py-20 m-auto w-11/12 rounded-lg shadow-2xl ">
        <p className="w-4/5 max-sm:w-full max-sm:px-8 m-auto  px-16  lg:py-10 text-center text-xl max-sm:text-[18px] bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900 tracking-wide leading-7 ">
          At SaraBell Travel and Tours Ltd, we are passionate about travel and dedicated to
          providing exceptional service. With years of experience in the industry, our team of
          travel enthusiasts curates tailor-made itineraries to suit your individual preferences.
          Our commitment to excellence, attention to detail, and personal touch sets us apart. Trust
          us to make your travel dreams a reality.
        </p>
      </section>

      <div className="text-black text-center text-2xl px-5 py-5 mt-20">
        <h1 className="text-3xl font-semibold text-slate-700 py-5">What we Offer</h1>
      </div>

      <section className="flex flex-wrap  rounded-lg justify-between w-11/12 m-auto px-5 py-5 ">
        <div className="bg-[url(/images/uns.jpg)] m-auto mt-12 w-80 h-96 rounded-lg shadow-2xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-900 font-semibold tracking-wide text-xl py-2 text-center">
            Personalized Travel & Luxury Adventures
          </h1>
        </div>
        <div className="bg-[url(/images/visa.jpg)] m-auto mt-12 w-80 h-96 rounded-lg shadow-2xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-white text-xl font-semibold  tracking-wide  py-12 text-center">
            Visa Help
          </h1>
        </div>
        <div className="bg-[url(/images/mecca.jpg)] m-auto mt-12 w-80 h-96 rounded-lg shadow-2xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-900 font-semibold  tracking-wide  text-xl py-2 text-center">
            Hajj & Umrah Packages
          </h1>
        </div>
      </section>
      <div className="text-black text-center text-2xl px-5 py-5 mt-28">
        <h1 className="text-3xl font-semibold text-slate-700 py-5">Top Destinations</h1>
      </div>

      <section className="flex flex-wrap justify-between  rounded-3xl w-11/12 m-auto px-5 py-5 ">
        <div className="bg-[url(/images/dubai.jpg)] m-auto mt-12 w-80 h-96 rounded-xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-900 text-xl py-2 font-semibold tracking-wide text-center">
            Dubai
          </h1>
        </div>
        <div className="bg-[url(/images/mecca.jpg)] m-auto mt-12 w-80 h-96 rounded-xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-900 text-xl py-2  font-semibold tracking-wide text-center">
            Mecca
          </h1>
        </div>
        <div className="bg-[url(/images/paris.jpg)] m-auto mt-12  w-80 h-96 rounded-xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-900 text-xl py-2  font-semibold tracking-wide text-center">
            Paris
          </h1>
        </div>
      </section>
      <div className="text-black text-center text-2xl px-5 py-5 mt-20">
        <h1 className="text-3xl font-semibold text-slate-700 py-5">Reach Out Now</h1>
      </div>

      <section className="h-auto w-11/12 shadow-2xl px-5 py-5 my-5 m-auto rounded-xl " id="contact">
        <h1 className="w-11/12 m-auto py-5 pb-6 text-center tracking-wide text-2xl text-slate-700 ">
          We are open Monday to Saturday from 9am - 5pm
        </h1>
        <div className="text-center w-11/12 m-auto text-l text-slate-600">
          <p class="text-md tracking-wide  leading-7 ">
            <span class="text-xl font-semibold">Email:</span> <br></br>
            <a href="mailto:Sarabelltravelandtours@gmail.com?subject=Contact/Inquiry&body=Hello SBTours.">
              Sarabelltravelandtours@gmail.com
            </a>
          </p>
          <p class=" tracking-wide leading-7 ">
            <span class="text-xl font-semibold">Phone:</span> <br></br>
            <a href="tel:+2348036600885">08036600885</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
