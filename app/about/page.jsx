import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const About = () => {
  // const style = {}
  return (
    <div>
      <NavBar />
      <section className="min-h-96 m-auto flex-center flex-col w-11/12 rounded-xl shadow-2xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-3xl  max-sm:text-2xl font-semibold text-slate-700 py-5">About Us</h1>
        </div>
        <p className="w-4/5 lg:py-20 lg:px-10 max-sm:w-full max-sm:px-4 m-auto py-5 pb-16 text-center text-xl max-sm:text-[18px] tracking-wide leading-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours Ltd, we believe that travel is not just about reaching
          destinations; it&apos;s about embarking on a journey of discovery, self-discovery, and
          enriching experiences. Our story began 2019, fueled by a shared passion for exploration
          and a vision to create unparalleled travel experiences for wanderlust souls like you.
        </p>
      </section>
      <section className="min-h-96 m-auto flex-center flex-col w-11/12 rounded-xl shadow-xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-3xl  max-sm:text-2xl font-semibold text-slate-700 py-5">
            Our Mission
          </h1>
        </div>
        <p className="w-4/5 lg:py-20 lg:px-10  max-sm:w-full max-sm:px-4 m-auto py-5 pb-16 text-center text-xl max-sm:text-[18px] tracking-wide leading-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          SaraBell Travel and Tours Ltd was born with a mission - to curate the most personalized
          and unforgettable travel adventures that cater to your unique desires. We believe that
          travel should be a seamless blend of awe-inspiring destinations, cultural immersions, and
          moments that touch the heart. Our mission is to craft itineraries that make your travel
          dreams come alive, leaving you with cherished memories to last a lifetime.
        </p>
      </section>
      <section className="min-h-96 m-auto flex-center flex-col w-11/12 rounded-3xl  shadow-xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-3xl  max-sm:text-2xl font-semibold text-slate-700 py-5">
            What Sets Us Apart
          </h1>
        </div>
        <p className="w-4/5  lg:py-20 lg:px-10  max-sm:w-full max-sm:px-4 m-auto py-5 pb-16 text-center text-xl  max-sm:text-[18px] tracking-wide leading-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          What truly sets us apart is our unwavering commitment to putting you - our valued
          travelers - at the heart of everything we do. Our team of seasoned travel experts is
          passionate about creating journeys that reflect your aspirations, interests, and
          preferences. With attention to every detail, we go the extra mile to ensure that your
          travel experience surpasses expectations, leaving you with stories to tell and memories to
          treasure.
        </p>
      </section>
      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-3xl shadow-2xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-3xl  max-sm:text-2xl font-semibold text-slate-700 py-5">
            Customer-Centric Focus
          </h1>
        </div>
        <p className="w-4/5  lg:py-20 lg:px-10  max-sm:w-full max-sm:px-4 m-auto py-5 pb-16 text-center text-xl max-sm:text-[18px] tracking-wide leading-6  bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          Your satisfaction is our utmost priority. With a customer-centric approach, we take the
          time to understand your travel aspirations and create tailored itineraries that resonate
          with your wanderlust. Every journey is a collaborative effort, and we work tirelessly to
          ensure that your travel dreams become reality.assionate about travel and dedicated to
          providing erience in the industry, our team of travel aries to suit your individual
          preferences. Our detail, and personal touch sets us apart. Trust us
        </p>
      </section>
      <div className="text-black text-center text-2xl px-5 py-5 mt-5">
        <h1 className="text-3xl max-sm:text-2xl font-semibold text-slate-700 py-5">
          Get in Touch Now
        </h1>
      </div>

      <section className="h-auto w-11/12 bg-amber-500 px-2 py-5 my-5 m-auto rounded-3xl shadow-2xl">
        <h1 className="w-4/5   max-sm:w-full max-sm:px-4 m-auto py-5 pb-16 text-center text-2xl max-sm:text-[18px] tracking-wide leading-6  bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900 ">
          We&apos;d love to hear from you! Reach out to our passionate team.
          <div className="mt-4 text-center w-11/12 m-auto text-lg max-sm:text-[15px] text-slate-600">
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
        </h1>
      </section>

      <Footer />
    </div>
  );
};

export default About;
