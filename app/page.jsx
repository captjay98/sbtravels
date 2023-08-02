import Image from "next/image";
import Link from "next/link";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <section className="rounded-md pt-2 bg-[url(/images/plane.jpg)]  bg-cover bg-no-repeat border-black w-screen h-screen m-auto ">
        <NavBar />
        <h1 className=" text-5xl text-center mt-9 font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-900 to-yellow-900">
          Welcome to SaraBell Travel and Tours <br></br>
        </h1>
        <div className="px-5  mt-7 m-auto w-2/4">
          <p className="px-5 text-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-900 from-0% via-slate-900 via-80% to-slate-900 ">
            Your gateway to extraordinary travel experiences! Discover the world's most captivating
            destinations, immerse yourself in unique cultures, and create unforgettable memories.
            Whether you're seeking an adventurous escapade, a luxurious getaway, or a relaxing
            retreat, our expert team is here to curate your dream vacation. Start your journey today
            and let us take you places you've only dreamed of!
          </p>
        </div>
        {/* <h3 className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-900 to-yellow-900 px-5 py-5"> */}
        {/*   Experience Hassle Free Travel */}
        {/* </h3> */}
      </section>

      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-3xl bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-2xl text-slate-700 py-5">About Us</h1>
        </div>
        <p className="w-4/5 m-auto py-5 pb-16 text-center text-xl bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours, we are passionate about travel and dedicated to providing
          exceptional service. With years of experience in the industry, our team of travel
          enthusiasts curates tailor-made itineraries to suit your individual preferences. Our
          commitment to excellence, attention to detail, and personal touch sets us apart. Trust us
          to make your travel dreams a reality.
        </p>
      </section>

      <div className="text-black text-center text-2xl px-5 py-5 mt-5">
        <h1 classname="text-2xl text-slate-700">What we Offer</h1>
      </div>

      <section className="flex flex-wrap justify-between w-11/12 m-auto px-5 py-5 bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">
            Personalized Travel Adventures
          </h1>
        </div>
        <div className="bg-[url(/images/luxury.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">
            Exclusive Access to Luxury Escapes
          </h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Hassle-Free Escapes</h1>
        </div>
      </section>
      <div className="text-black text-center text-2xl px-5 py-5 mt-5">
        <h1 classname="text-2xl text-slate-700">Top Destinations</h1>
      </div>

      <section className="flex flex-wrap justify-between  rounded-3xl w-11/12 m-auto px-5 py-5 bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="bg-[url(/images/dubai.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Dubai</h1>
        </div>
        <div className="bg-[url(/images/egypt.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">Egypt</h1>
        </div>
        <div className="bg-[url(/images/paris.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Paris</h1>
        </div>
      </section>
      <div className="text-black text-center text-2xl px-5 py-5 mt-5">
        <h1 classname="text-2xl text-slate-700">Reach Out Now</h1>
      </div>

      <section className="h-56 w-11/12 bg-amber-500 px-5 py-5 my-5 m-auto rounded-3xl">
        <h1 className="w-4/5 m-auto py-5 pb-16 text-center text-2xl bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900 ">
          We are open Monday to Saturday from 9am - 5pm
        </h1>
        <div className="text-center text-xl text-slate-900">
          <p>Email: Sarabelltravel@tours@gmail.com</p>
          <p>Phone: 08909809809</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;