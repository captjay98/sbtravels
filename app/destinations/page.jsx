import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const Destination = () => {
  return (
    <div>
      <NavBar />
      <section className="h-auto m-auto flex-center flex-col w-11/12 rounded-xl shadow-2xl ">
        <div className="text-black text-center text-2xl px-5 pt-3 mt-9">
          <h1 className="text-2xl text-slate-700 py-5">Discover Our Travel Services</h1>
        </div>
        <p className="w-4/5 max-sm:w-full max-sm:px-4  m-auto py-5 pb-16 text-center text-xl max-sm:text-[18px] bg-clip-text text-transparent bg-gradient-to-br from-slate-900  to-amber-900  ">
          At SaraBell Travel and Tours Ltd, we take you on a journey to the world&apos;s most
          enchanting destinations, each brimming with unique wonders and cultural treasures. Whether
          you crave the adrenaline rush of adventure, the serenity of pristine landscapes, or the
          allure of vibrant cityscapes, our carefully curated list of featured destinations promises
          to leave you spellbound.
        </p>
      </section>
      <section className="flex flex-wrap rounded-3xl  justify-between w-full mt-16 m-auto px-5 py-5 ">
        <div className="bg-[url(/images/dubai.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-10 w-80  h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py-2 font-semibold tracking-wide text-center">
            Good Vibes in Dubai, UAE.
          </h1>
        </div>
        <div className="bg-[url(/images/mecca.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-12 w-80  h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py- font-semibold tracking-wide text-center">
            Tranquility & Worship, Mecca & Medina.
          </h1>
        </div>
        <div className="bg-[url(/images/paris.webp)]  hover:translate-x-2 hover:translate-y-2 m-auto mt-14 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl py- font-semibold text-center">
            Romance and Art in Paris, France.
          </h1>
        </div>
        <div className="bg-[url(/images/egypt.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-16 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl  font-semibold  py-1 text-center">
            The Pyramids in Alexandria, Egypt.
          </h1>
        </div>

        <div className="bg-[url(/images/maldives.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-10 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl  font-semibold tracking-wide py-2 text-center">
            Beach Bliss in Maldives.
          </h1>
        </div>

        <div className="bg-[url(/images/tanzania.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-12 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 text-xl font-semibold tracking-wide pt-28 ">
            WildLife Safari in Serengeti, Tanzania.
          </h1>
        </div>
        <div className="bg-[url(/images/morocco.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-14 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className=" text-slate-900 font-semibold text-xl tracking-wide text-right">
            Cultural Fusion in Marrakech, Morocco.
          </h1>
        </div>
        <div className="bg-[url(/images/qatar.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-16 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 font-semibold text-xl py-2 text-center">
            Modernity and Art in Kusail, Qatar.{" "}
          </h1>
        </div>
        <div className="bg-[url(/images/uns.webp)]  hover:translate-x-2 hover:translate-y-2  m-auto mt-10 w-80 h-96 rounded-3xl bg-cover bg-no-repeat flex-col px-5 py-5">
          <h1 className="text-amber-900 font-semibold text-xl py-16 text-center">
            And Many More.....
          </h1>
        </div>
      </section>
      <Footer />{" "}
    </div>
  );
};

export default Destination;
