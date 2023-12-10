import Footer from "./footer";
import MainNav from "./main-nav";

const Layout = ({ children }) => {
    return (
        <html>
            <body className="flex min-h-screen font-archivo">
                <section className="relative bg-[#1A1B25] flex-grow flex-col">
                    <MainNav />
                    <div className="p-5 md:p-0" >{children}</div>
                    <Footer />
                </section>
            </body>
        </html>
    );
};

export default Layout;