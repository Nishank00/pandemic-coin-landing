import Image from 'next/image'
import React from 'react'

const Build = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-10 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-5xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <Image width={1000} height={1000} src="https://dummyimage.com/720x720" className='rounded-3xl' alt="" />
                    </div>
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <Image width={1000} height={1000} src="https://dummyimage.com/720x720" className='rounded-3xl' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Build