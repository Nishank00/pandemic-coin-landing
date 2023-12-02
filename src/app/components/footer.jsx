import { FaArrowRightLong, FaFacebookF, FaLinkedinIn, FaSquareXTwitter, FaTwitter, FaXTwitter } from "react-icons/fa6";

const FooterLink = ({ href, name }) => (
    <li>
        <a className="text-gray-400 hover:text-white" href={href}>
            {name}
        </a>
    </li>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const categories = [
        {
            label: "Product",
            items: [
                { href: "/", name: "Employee Database" },
                { href: "/", name: "Support" },
                { href: "/", name: "Documentation" },
                { href: "/", name: "Pricing" },
            ],
        },
        {
            label: "Information",
            items: [
                { href: "/", name: "Terms" },
                { href: "/", name: "License" },
                { href: "/", name: "Privacy" },
                { href: "/", name: "About Us" },
            ],
        },
        {
            label: "Explore",
            items: [
                { href: "/", name: "Showcase" },
                { href: "/", name: "Roadmap" },
                { href: "/", name: "Languages" },
                { href: "/", name: "Blog" },
            ],
        },
    ];

    return (
        <footer className="text-gray-400 bg-[#161515] body-font">
            <div className="container px-5 pt-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {categories.map((category, index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <p className="font-semibold text-white text-base mb-3">
                                {category.label}
                            </p>
                            <nav className="list-none mb-10">
                                {category.items.map((item, i) => (
                                    <FooterLink key={i} {...item} />
                                ))}
                            </nav>
                        </div>
                    ))}
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <p className="font-semibold text-white text-base mb-3">Subscribe</p>
                        <div className="flex flex-nowrap items-center justify-start ">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <input type="email" id="footer-field" name="footer-field" placeholder="email address" className="w-full bg-[#FFFFFF] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="flex items-center justify-center text-white bg-[#FB2525] border-0 w-[40px] h-[40px] relative">
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#161515] border-t-2 border-[#FFFFFF20]">
                    <div className="py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="ml-3 text-xl">Pandemic</span>
                        </a>
                        <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                            © {currentYear} Pandemic —
                            <a
                                href="https://twitter.com/knyttneve"
                                className="text-gray-500 ml-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @knyttneve
                            </a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 space-x-4 justify-center sm:justify-start">
                            <a className="text-gray-400 w-8 h-8 text-sm border border-white relative rounded-full">
                                <FaLinkedinIn className="absolute text-xs left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" /></a>
                            <a className="text-gray-400 w-8 h-8 text-sm border border-white relative rounded-full">
                                <FaFacebookF className="absolute text-xs left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" /></a>
                            <a className="text-gray-400 w-8 h-8 text-sm border border-white relative rounded-full">
                                <FaXTwitter className="absolute text-xs left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" /></a>
                            {/* Add other social media icons as needed */}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
