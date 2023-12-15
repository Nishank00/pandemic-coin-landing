import Image from 'next/image'
import React from 'react'
import bg from '../../../assets/bg.png'

const VideoCard = () => {
    return ( 
        <div class="md:pb-4 sm:mb-0 bg-pdc-d-gray flex items-center md:block rounded-[20px] shadow-2xl md:mb-6">
            <div class="rounded-[20px] w-1/2 md:w-full relative overflow-hidden">
                <Image alt="team" width={300} height={300} className="rounded-[20px] w-[110px] h-[110px] md:w-full md:h-full object-cover object-center mb-0 md:mb-4" src={bg} />
            </div>
            <div className='px-2 w-full p-0 md:p-4'>
                <p class="text-md md:text-xl font-semibold title-font text-white md:mt-0">Shooting Stars</p>
                <h2 class="text-xs md:text-base leading-relaxed mt-2 text-[#5F5F5F]">Swag shoindxgoitch literally meditation. Swag shoindxgoitch literally meditation. </h2>
            </div>
        </div>
    )
}

export default VideoCard