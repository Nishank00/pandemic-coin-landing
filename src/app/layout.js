import Head from "next/head";
import SideNav from "./components/side-nav";
import Footer from "./components/footer";
import MainNav from "./components/main-nav";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="flex h-screen font-archivo">
        {/* <section className="md:w-16">
          <SideNav />
        </section> */}
        <section className="relative flex-grow flex-col">
          <MainNav />
          <div className="bg-[#1A1B25]">{children}</div>
          <Footer />
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
