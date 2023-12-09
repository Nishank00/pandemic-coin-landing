import React from 'react'

const CTA = () => {
    return (
        <section className="text-gray-900 overflow-hidden relative body-font">
            <div className="container mx-auto">
                <div className="w-3/4 px-20 overflow-hidden relative rounded-3xl py-24 bg-white flex flex-col items-center mx-auto">
                    <div className="w-fit mx-auto text-center">
                        <p className="mt-6 text-sm text-gray-950 font-medium tracking-[10px] uppercase">We are social</p>
                        <div className="border-b mt-3 mb-6 border-slate-700 w-full" />
                        <h1 className="text-3xl font-semibold text-center">
                            Follow us on social media</h1>
                    </div>
                    <div className="absolute bg-[#DE1012] w-[200px] h-[220px] -bottom-[50%] right-[-2%] rounded-3xl rotate-45"></div>
                    <div className="absolute bg-[#342CB2] w-[220px] h-[220px] -top-[50%] left-[-2%] rounded-3xl rotate-45"></div>
                </div>
            </div>
        </section>
    )
}

export default CTA