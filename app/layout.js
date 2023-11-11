import "@styles/globals.css";
// import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Lato } from "next/font/google";
// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const lato = Lato({
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
    <html lang="en" className=" bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400">
      <body>
        {/* <NavBar /> */}
        <div className="main"></div>
        <main className={poppins.className}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
