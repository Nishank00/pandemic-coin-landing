import MainNav from "./components/main-nav";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import bg from "../assets/bg.png";
import Image from "next/image";
export default function Home() {
    const HeroSection = () => {
        return (
            <div className="w-10/12 md:w-4/6 lg:w-1/2">
                <h1 className="text-4xl md:text-6xl text-white font-semibold serif tracking-tighter">
                    Unveiling the Hidden Elegance of Modern Underground Living
                </h1>
                <p className="text-slate-400 text-lg font-light w-4/6 mt-6">
                    Embrace the serenity beneath the surface, where the whispers
                    of nature harmonize with the heartbeat of your underground
                    haven.
                </p>
            </div>
        );
    };

    const sliderData = [
        {
            name: "Underground Shelters",
            id: "#01",
        },
        {
            name: "Block chain Security",
            id: "#02",
        },
        {
            name: "Investment and Trading",
            id: "#03",
        },
    ];
    return (
        <main>
            <div className="p-10 md:p-16">
                <HeroSection />
                <Image
                    className="absolute -bottom-1/4 bottt opacity-40  -right-0"
                    src={bg}
                    alt="bg"
                />
            </div>
            <div className="flex flex-col gap-12 p-10 md:p-16 w-fit">
                {sliderData.map((item) => (
                    <button className="flex flex-col text-left" key={item.id}>
                        <p className="text-white serif font-bold text-4xl">
                            {item.id}
                        </p>
                        <div className="border-b-2 mt-2 border-slate-800 w-full" />
                        <span className="w-4/6 mt-3 text-lg font-semibold">
                            {item.name}
                        </span>
                    </button>
                ))}
            </div>

            <div className="p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl mb-16 text-center">
                    Our key features
                </h1>
                <div className="md:columns-3">
                    {sliderData.map((item, i) => (
                        <div
                            className={`p-8 my-8 h-[20rem] mx-auto w-11/12 flex justify-center items-center flex-col rounded-xl ${
                                i % 2 === 0
                                    ? "bg-zinc-800/60"
                                    : "bg-white text-black"
                            }`}
                            key={item.id}
                        >
                            <p className="text-xl">{item.id}</p>
                            <p className="text-3xl mt-6 text-center w-4/6 font-bold serif">
                                {item.name}
                            </p>
                            <p className="mt-4 opacity-50 text-center w-5/6">
                                Lorem ipsum dolor sit amet consectetur. Lorem
                                ipsum dolor sit amet consectetur.{" "}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-fit mx-auto py-16 mt-12 text-center">
                <h1 className="text-3xl md:text-5xl text-center">
                    Live Events
                </h1>
                <div className="border-b mt-3 mb-6 border-slate-700  w-full" />
                <p className="mt-6 text-sm tracking-[10px]">WEBINARS</p>
            </div>
            <div className="w-full h-[30rem] bg-zinc-900"></div>

            <div className="my-16 w-11/12 overflow-hidden md:overflow-visible mx-auto md:pl-16 min-h-[30rem] relative">
                <div className="md:w-1/2">
                    <h1 className="text-5xl serif">Community</h1>
                    <p className="mt-3 md:w-4/6 text-xl">
                        Community Chronicles: Unveiling the Heartbeat of Our
                        Shared Journey
                    </p>
                    <p className="w-5/6 mt-6 text-slate-500">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                        dolor sit amet consectetur. orem ipsum dolor sit amet
                        consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                    <button className="bg-white px-8 p-4 text-black uppercase tracking-widest mt-8 text-sm font-semibold">
                        Learn more
                    </button>
                </div>
                <Image
                    className="absolute -right-1/2 md:right-12 grayscale contrast-125  object-cover md:w-1/2 bottom-0"
                    src={asset1}
                    alt="image"
                />
            </div>

            <div className="my-16 relative min-h-[20rem]">
                <h1 className="text-3xl drop-shadow-md md:text-5xl serif mx-auto text-center w-4/6">
                    Dive into a New Dimension: Explore Our Cutting-edge AR/VR
                    Experience
                </h1>
                <button className="bg-white mx-auto block w-fit px-8 p-4 text-black uppercase tracking-widest mt-16 text-sm font-semibold">
                    Show me
                </button>
                <Image
                    className="absolute bottom-0 bottt opacity-60  object-cover"
                    src={asset2}
                    alt="image"
                />
            </div>

            <div className="my-16 relative">
                <div className="w-fit mx-auto my-16 text-center">
                    <h1 className="text-3xl md:text-5xl text-center">
                        Personal stories
                    </h1>
                    <div className="border-b mt-3 mb-6 border-slate-700  w-full" />
                    <p className="mt-6 text-sm tracking-[10px]">TESTIMONIALS</p>
                </div>
                <div>
                    <div className="w-full min-h-[30rem] bg-zinc-900/50">
                        <div className="md:columns-3 pt-16">
                            {sliderData.map((item, i) => (
                                <div
                                    className={`p-8 h-[20rem] my-8 mx-auto w-11/12 flex justify-center items-center flex-col rounded-xl ${
                                        i % 2 === 0
                                            ? "bg-zinc-800/60"
                                            : "bg-white text-black"
                                    }`}
                                    key={item.id}
                                >
                                    <p className="text-xl">{item.id}</p>
                                    <p className="text-3xl mt-6 text-center w-4/6 font-bold serif">
                                        {item.name}
                                    </p>
                                    <p className="mt-4 opacity-50 text-center w-5/6">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button className="bg-white absolute -bottom-6 right-1/2 translate-x-1/2 px-8 p-4 text-black uppercase tracking-widest mt-16 text-sm font-semibold">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
