import Image from 'next/image'
import React from 'react'
import ball1 from '../../assets/ball-1.png'
import ball2 from '../../assets/ball-2.png'
import ball3 from '../../assets/ball-3.png'
import web from '../../assets/web.png'
import webBg from '../../assets/web-bg.png'

const Deepdive = () => {
    return (
        <section class="relative text-gray-400 body-font">
            <div class="container relative mx-auto flex pr-10 py-24 md:flex-row flex-col items-center z-10">
                <div class=" w-2/3 flex flex-col px-16 py-32 bg-black min-h-[30rem] md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="text-3xl md:text-[42px] mb-4 font-medium text-white">Dive into a New Dimension:
                        <br class="hidden lg:inline-block" /> Explore Our Cutting-edge
                        <br class="hidden lg:inline-block" />
                        AR/VR Experience
                    </h1>
                    <button class="inline-flex text-[#FB2525] font-semibold text-lg mt-6">Show me</button>
                </div>
                <div className='flex-grow relative z-10 max-w-[600px]'>
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720" />
                </div>
                <Image
                    className="absolute top-20 left-[34%] z-0 max-w-[135px]"
                    src={ball1}
                    alt="image"
                />
                <Image
                    className="absolute bottom-20 z-0 max-w-[135px]"
                    src={ball2}
                    alt="image"
                />
                <Image
                    className="absolute top-[55%] left-[30%] z-0 max-w-[135px]"
                    src={ball3}
                    alt="image"
                />
                <Image
                    className="absolute bottom-[20%] left-[45%] max-w-[250px] z-0"
                    src={web}
                    alt="image"
                />
            </div>
            <Image
                className="absolute top-16 z-0 max-h-[500px]"
                src={webBg}
                alt="image"
            />

        </section>
    )
}

export default Deepdive