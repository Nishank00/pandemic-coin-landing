import Image from "next/image";
import logo from "../../assets/logo-HQ.png";
import { teamData } from "@/data/team-data";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
export default function About() {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl serif mt-16 text-center w-1/2 mx-auto">
                We are people who make up white paper_pandemic coin
            </h1>
            <p className="text-center w-4/6 mx-auto mt-8">
                Embrace the serenity beneath the surface, where the whispers of
                nature harmonize with the heartbeat of your underground haven
            </p>

            <Image
                className="mx-auto bg-white mt-8 rounded-xl"
                width={300}
                src={logo}
                quality={100}
                alt="logo"
            />

            <div className="grid grid-cols-3 mt-12">
                {teamData.map((item, index) => (
                    <div key={index} className="bg-zinc-900 rounded-xl m-6">
                        <Image src={item.img} className="w-full " alt="team" />
                        <div className="p-6 px-8">
                            <div className="">
                                <h1 className="text-2xl">{item.name}</h1>
                                <p className="opacity-60">{item.role}</p>
                            </div>
                            <p className="mt-4">{item.desc}</p>
                            <div className="flex gap-3 mt-6">
                                <Link
                                    className="bg-white uppercase rounded-lg tracking-widest font-semibold text-xs w-fit text-black p-2 px-6"
                                    href={item.link}
                                >
                                    Connect
                                </Link>
                                <Link
                                    className="bg-zinc-800 flex w-12 rounded-lg justify-center items-center "
                                    href={item.link}
                                >
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
