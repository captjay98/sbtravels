import "@styles/globals.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaraBell Travel and Tours",
  description: "Experience Hassle Free Travel",
};

const RootLayout = ({ children }) => {
  return (
    // <html lang="en" className="h-screen w-screen bg-gradient-to-br from-slate-500 to-slate-900 ">
    <html lang="en" className=" bg-gradient-to-r from-amber-300 via-amber-700 to-slate-900">
      <body>
        {/* <NavBar /> */}
        <div className="main"></div>
        <main className={roboto.className}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
