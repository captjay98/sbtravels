import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const Destination = () => {
  return (
    <div>
      <NavBar />
      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-3xl bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-2xl text-slate-700 py-5">Discover Our Travel Services</h1>
        </div>
        <p className="w-4/5 m-auto py-5 pb-16 text-center text-xl bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours, we take you on a journey to the world's most enchanting
          destinations, each brimming with unique wonders and cultural treasures. Whether you crave
          the adrenaline rush of adventure, the serenity of pristine landscapes, or the allure of
          vibrant cityscapes, our carefully curated list of featured destinations promises to leave
          you spellbound
        </p>
      </section>
      <section className="flex flex-wrap justify-between w-11/12 mt-16 m-auto px-5 py-5 bg-gradient-to-r from-amber-300 via-amber-600 to-slate-500">
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">Good Vibes in Dubai, UAE.</h1>
        </div>
        <div className="bg-[url(/images/luxury.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">Beach Bliss in Maldives.</h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">
            Serenity in Santorini, Greece.
          </h1>
        </div>
        <div className="bg-[url(/images/dubai.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">
            WildLife Safari in Serengeti, Tanzania.
          </h1>
        </div>
        <div className="bg-[url(/images/egypt.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">
            Cultural Fusion in Marrakech, Morocco.
          </h1>
        </div>
        <div className="bg-[url(/images/paris.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">
            Romance and Art in Paris, France.
          </h1>
        </div>
        <div className="bg-[url(/images/uns.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-16 text-center">
            The Pyramids in Alexandria, Egypt.
          </h1>
        </div>
        <div className="bg-[url(/images/luxury.jpg)] mt-5 w-96 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-slate-400 text-xl py-16 text-center">
            Modernity and Art in Kusail, Qatar.{" "}
          </h1>
        </div>
      </section>
      <Footer />{" "}
    </div>
  );
};

export default Destination;
