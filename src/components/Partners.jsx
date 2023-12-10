import React from 'react'
import Image from 'next/image'

const Partners = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#FB2525]">Partners</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-4 m-4 my-12">
                    <div className="h-full flex items-center justify-center border-gray-800 border overflow-hidden rounded-lg">
                        <div className="flex items-center justify-center flex-col">
                            <Image src="/assets/partner1.png" alt="partners" width={400} height={120} className="w-full" />
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center border-gray-800 border overflow-hidden rounded-lg">
                        <div className="flex items-center justify-center flex-col">
                            <Image src="/assets/partner1.png" alt="partners" width={400} height={120} className="w-full" />
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center border-gray-800 border overflow-hidden rounded-lg">
                        <div className="flex items-center justify-center flex-col">
                            <Image src="/assets/partner1.png" alt="partners" width={400} height={120} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners