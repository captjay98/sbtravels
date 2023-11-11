import Link from "next/link";
const Footer = () => {
  return (
    <footer className="h-56 w-11/12 my-8 p-5 m-auto rounded-3xl shadow-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400">
      <h1 className="text-slate-900 text-xl px-5 py-5">
        SaraBell Travel and Tours ltd
        <br></br>2023 All Rights Reserved
      </h1>
      <a href="www.thecodecaptain.vercel.app">
        <p className="text-right mt-12 text-cyan-800">built by thecodecaptain</p>
      </a>
    </footer>
  );
};

export default Footer;
