import React from 'react'

const CTA = () => {
    return (
        <section className=" text-pdc-l-gray overflow-hidden relative body-font">
            <div className="container px-4 md:mx-auto mt-8">
                <div className="w-full md:w-4/5 px-4 md:px-20 overflow-hidden relative rounded-t-[320px] py-24 bg-gradient-to-r from-[#111327] to-[#9C9C9C50] flex flex-col items-center mx-auto">
                    <div className="w-fit mx-auto text-center">
                        <p className="mt-6 text-xs mb-4 font-medium tracking-[10px] uppercase">We are social</p>
                        <h1 className="text-3xl font-semibold text-center">
                            Follow us on social media</h1>
                    </div>
                    <div className="absolute bg-pdc-red w-[150px] h-[150px] bottom-[15%] right-[-2%] rounded-[45px] rotate-45"></div>
                    <div className="absolute bg-pdc-blue w-[20px] h-[20px] top-[20%] right-[20%] rounded-[45px] rotate-45"></div>
                    <div className="absolute bg-pdc-red w-[20px] h-[20px] bottom-[20%] left-[20%] rounded-[45px] rotate-45"></div>
                    <div className="absolute bg-pdc-blue w-[150px] h-[150px] top-[-10%] left-[5%] rounded-[45px] rotate-12"></div>
                </div>
            </div>
        </section>
    )
}

export default CTA