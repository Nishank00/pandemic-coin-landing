import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[739px] w-full items-stretch pb-12 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b01d819b71a496455c48a2fa57f08026c079e17f0e03564433eecbf8f4c23c05?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative justify-center items-center bg-orange-100 flex w-full flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1040px] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
              <div className="justify-between items-stretch flex gap-0">
                <div className="text-slate-700 text-lg grow whitespace-nowrap">
                  Locations
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f372d083cf6f9cec23df15e44da8f3bfe6d4be0d4d9c2497390f00bcd7db8b?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                />
              </div>
              <div className="text-slate-700 text-lg">Our Services</div>
              <div className="text-slate-700 text-lg">Our Team</div>
              <div className="text-slate-700 text-lg grow whitespace-nowrap">
                Membership
              </div>
            </div>
            <div className="items-stretch self-stretch flex justify-between gap-5">
              <div className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-slate-500 grow px-14 py-3.5 rounded-[86px] max-md:px-5">
                Book a Visit
              </div>
              <div className="justify-center items-center border-[color:var(--Accent,#74A7B3)] flex aspect-square flex-col w-[50px] h-[50px] px-3.5 rounded-[71px] border-2 border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62dac478c8dbe5235545059a7f1a0258e59e0991d852cc6b52dec93afead26f?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-[511px] max-w-full flex-col items-stretch ml-56 mt-24 mb-9 self-start max-md:mt-10">
          <div className="text-orange-100 text-6xl leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Veterinary Care  re-imagined <br />
            <span className="text-orange-100">by pet lovers </span>
          </div>
          <div className="text-white text-2xl mt-10 max-md:max-w-full">
            Book a visit to one of our clinics right now. Which friend will we
            meet?
          </div>
          <div className="mt-9 max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl max-md:mt-4">
                  <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                    Dog
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e2dfcd1dfeb4573ba49c856442a90d4acddca6d19aa052145d0a7ebc5bf2af?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                    className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                  />
                  <div className="text-white text-xs font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                    Book a visit
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl max-md:mt-4">
                  <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                    Cat
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f58a989316fdc5670722b81f75d43504d8db9e4331cd444cd500c5b5f6d4daa?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                    className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                  />
                  <div className="text-white text-xs font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                    Book a Visit
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl max-md:mt-4">
                  <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                    Bird
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7b1d353f8a15abcc83cdf79b96105e5c56b7a0af69f49805f21f5326ed6e53?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                    className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                  />
                  <div className="text-white text-xs font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                    Book a Visit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
        Veterinary care, redesigned to be better
      </div>
      <div className="self-center w-full max-w-[1044px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/767e5407349bd1c538fc19e3606135728b37c497196bd4a45ff0c709720e0d6b?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                A clinic that feels like home
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                Our modern clinics make you feel like you never left home,
                making visits stress-free for you and your pet
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                See Our Clinics
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-[1044px] max-w-full mt-16 px-px max-md:mt-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                Memberships that work
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                Our memberships provide great value care and provide all the
                services you’re likely to need. Even if you’re facing an
                emergency, our memberships cover you.
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-slate-400 mt-6 px-8 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                Become a Member
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd975a479eb309bcbd2cd0014898a44134777c2a023fa5fcfbbac57e46239d58?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1044px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7bbaf467585d582d0d1d519e4b22fa3639772813c564cbabc2e6fddf03c32f0?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                Doctors that care
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                We’re in the business of looking after your best friend. We’ll
                listen and answer all your questions and treat your pet like our
                own
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-slate-500 mt-6 px-14 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-[1044px] max-w-full mt-16 px-px max-md:mt-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                Everything in your control
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                Book appointments in a few taps, and always stay updated and
                informed on your pet’s health with our app
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-slate-400 mt-6 px-8 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                Become a Member
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c913ff62c54433d981660c50b3aad3a4d2ead20cece0f24564c353cb250350?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1044px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03f9f169802d7fe859be6c1eca99c51b48e809a12e2ca2bf7172e0b0541c37e4?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                Only the necessary care
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                We’re pet-lovers first and business-people second. No
                over-testing, prescribing unnecessary medicines, or pushing
                procedures that are not needed
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-slate-500 mt-6 px-14 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-[1044px] max-w-full mt-16 px-px max-md:mt-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                All the services you need, under one roof
              </div>
              <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                Aside from our world-class veterinary care, our clinics offer
                grooming, boarding, sitting, nutritionist, and training services
              </div>
              <div className="text-white text-base font-bold justify-center items-stretch bg-stone-400 mt-6 px-10 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                See Our Services
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/268f99516b61879326b1426cc323f0cbf7cf266da2519bbe48c7bfa693bd19a0?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.49] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
          </div>
        </div>
      </div>
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center max-w-[301px] mt-28 max-md:mt-10">
        Check out the places we call home
      </div>
      <div className="self-center w-full max-w-[1040px] mt-9 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d872006e3db4a1097d79e791176dd1275438bcd4dbddb6a72301502e151339d1?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b27358f65db498d3a6e91e257a932cdfdb52043ee9883a2fcfb98f8d6b797f0?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1040px] mt-5 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c37e2f4997a9b35b49b856f94d2f68991e50e945edda107e7c0368ca7fb5076?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c707ca7538a754688b4fd4f246a2f1a6eeb9fa09b6a91aa163f5c9281c5d30d6?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4964c09c13c48dfe1583890673c88eba608984d3a34139918af4592ed7a65bcd?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6312ec1aa2b06903d9bae50521c36b1e5c3abc67f1051771a22193e173e0f89c?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <div className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </div>
              <div className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center max-w-[331px] mt-48 max-md:mt-10">
        Whatever your pet needs, we’re there
      </div>
      <div className="text-slate-700 text-center text-sm self-center max-w-[521px] mt-6 max-md:max-w-full">
        Discover our most commonly requested services. For anything not listed,
        please get in touch with your local clinic
      </div>
      <div className="self-center w-[964px] max-w-full mt-14 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col">
              <div className="text-white text-lg font-bold capitalize whitespace-nowrap justify-center border-l-[color:var(--Primary-1,#33495F)] bg-slate-500 pl-7 pr-16 py-5 border-l-[5px] border-solid items-start max-md:px-5">
                Planned Check-Ups
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center items-stretch bg-white pl-7 pr-16 py-5 max-md:pl-5 max-md:pr-7">
                Sickness & Emergency
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center bg-white pl-7 pr-16 py-5 items-start max-md:px-5">
                Diagnostics
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center bg-white pl-7 pr-16 py-5 items-start max-md:px-5">
                Planned surgeries
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center bg-white pl-7 pr-16 py-5 items-start max-md:px-5">
                Dental
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center bg-white pl-7 pr-16 py-5 items-start max-md:px-5">
                Grooming
              </div>
              <div className="text-slate-700 text-lg capitalize whitespace-nowrap justify-center bg-white pl-7 pr-16 py-5 items-start max-md:px-5">
                Pet Services
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-center bg-orange-100 flex grow flex-col w-full px-16 py-10 max-md:max-w-full max-md:px-5">
              <div className="text-slate-700 text-2xl capitalize self-stretch max-md:max-w-full">
                Planned check-ups
              </div>
              <div className="justify-center self-stretch mt-8 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col max-md:mt-4">
                      <div className="justify-between flex gap-2.5 items-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Vaccinations
                        </div>
                      </div>
                      <div className="justify-between items-center flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3035879011bacadfa26d5d795d3a6fd99d9a8b5ef96d8815bb22845a9a8db600?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Deworming
                        </div>
                      </div>
                      <div className="justify-between items-center flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf547f474c68b57424b3842a4375228190a215798f79c19e4d15478e9181cdfb?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Nutritional Counselling
                        </div>
                      </div>
                      <div className="justify-between items-center flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/686067d3a5ab7568a30a5a77815b39eb55eff705df121e862a62e6b8dff5a812?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Behavioural Counselling
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col max-md:mt-4">
                      <div className="justify-between flex gap-2.5 items-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3529b9fd372e4c5275c660ff2c90ec253d6ca4807166a5b4d14a18e4d258404?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Vaccinations
                        </div>
                      </div>
                      <div className="justify-between items-center flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3fd7c16edc95a1c7e7ea971356d5a37e9756b2a056e744a9b52366abcece79?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Deworming
                        </div>
                      </div>
                      <div className="justify-between items-center flex gap-2.5 mt-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fc2bf21c46570bd030c4b414de770a2d670a9d343cfdb95e755c4ef1ee8b40?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                          className="aspect-[1.09] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-slate-700 text-lg capitalize self-stretch grow whitespace-nowrap">
                          Nutritional Counselling
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-stone-400 mt-20 px-12 py-3.5 rounded-[86px] max-md:mt-10 max-md:px-5">
                View Services
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center w-[630px] mt-44 max-md:mt-10">
        Reviews
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1e91fc-efd6-4f29-8838-50c9ce22988f?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[2.28] object-contain object-center w-full fill-stone-400 overflow-hidden self-center max-w-[1078px] mt-14 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-40 max-md:max-w-full max-md:mt-10">
        Our vets bring the magic to Dr. Paws
      </div>
      <div className="self-center w-full max-w-[1045px] mt-14 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73e058fe73dda6144ed562e65f3a2b813c833640e29658406a22acba855517a7?apiKey=7336283b61084b1fb8ff25f74a29682d&"
              className="aspect-[1.27] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col mt-8 max-md:max-w-full max-md:mt-10">
              <div className="flex justify-between gap-3.5 items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                  <div className="text-slate-700 text-xl capitalize">
                    Animals first. Always.
                  </div>
                  <div className="text-slate-700 text-sm mt-2.5">
                    Unlike other clinics, we evaluate our vets based on customer
                    satisfaction over revenue. This ensure we never
                    over-medicate or suggest unnecessary treatments.
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                  <div className="text-slate-700 text-xl capitalize">
                    Highly qualified, trained on the latest methods
                  </div>
                  <div className="text-slate-700 text-sm mt-2.5">
                    We only hire vets from the best veterinary schools, and make
                    sure they are supported to attend courses and learn new
                    techniques across the world
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                  <div className="text-slate-700 text-xl capitalize">
                    Your best friend is our best friend
                  </div>
                  <div className="text-slate-700 text-sm mt-2.5">
                    All our vets are passionate about animals, and love being
                    around them. Rest assured your animal will feel comfortable
                    and at home with us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-700 text-center text-2xl font-semibold leading-6 tracking-tight self-center mt-40 max-md:max-w-full max-md:mt-10">
        Still have questions?
      </div>
      <div className="text-slate-700 text-center text-2xl self-center max-w-[632px] mt-6 max-md:max-w-full">
        If your question is still not answered, please get in touch and we’d be
        happy to help
      </div>
      <div className="text-slate-700 text-base font-bold leading-6 self-center mt-24 max-md:max-w-full max-md:mt-10">
        About BearHug
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          What makes BearHug different?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          How much do you charge for your services?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto max-md:max-w-full">
          <span className="">What animals does BearHug treat?</span>
          <br />
          <span className=" text-slate-700">
            Dr. Paws is a versatile veterinarian, offering expert care to a
            variety of animals, including cats, dogs, hamsters, unicorns (just
            kidding, we wish!), and many more. Whether your pet has fur,
            feathers, or scales, Dr. Paws is here to provide top-notch
            veterinary services.
          </span>
          <br />
          <br />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3150f9f44a13d77ec84f3317935f808b6e431e4f9a8c28123f95e1c9ce78bc?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.9] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfccad067e0bce2847abb0c977b3a61bc78c921e95f0ec792c0ab2f586bcf844?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-11 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-slate-700 text-base font-bold leading-6 self-center mt-20 max-md:max-w-full max-md:mt-10">
        At the clinic
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-7 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          What makes BearHug different?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          How much do you charge for your services?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto max-md:max-w-full">
          <span className="">What animals does BearHug treat?</span>
          <br />
          <span className=" text-slate-700">
            Dr. Paws is a versatile veterinarian, offering expert care to a
            variety of animals, including cats, dogs, hamsters, unicorns (just
            kidding, we wish!), and many more. Whether your pet has fur,
            feathers, or scales, Dr. Paws is here to provide top-notch
            veterinary services.
          </span>
          <br />
          <br />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3150f9f44a13d77ec84f3317935f808b6e431e4f9a8c28123f95e1c9ce78bc?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.9] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfccad067e0bce2847abb0c977b3a61bc78c921e95f0ec792c0ab2f586bcf844?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-11 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-slate-700 text-base font-bold leading-6 self-center mt-20 max-md:max-w-full max-md:mt-10">
        Membership
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          What makes BearHug different?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-full max-w-[1001px] items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto">
          How much do you charge for your services?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf5c4ff1e60bf7ceabb0fedb8744b67de844834c728ecea6727c341c06c0378?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.73] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31667808b7c4fd4797045f4b144a5eb74cf1e20f627a7df5b38a8fa0a0f9ae06?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-6 max-md:max-w-full"
      />
      <div className="self-center flex items-stretch justify-between gap-5 mt-7 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-slate-700 text-base font-bold leading-6 grow shrink basis-auto max-md:max-w-full">
          <span className="">What animals does BearHug treat?</span>
          <br />
          <span className=" text-slate-700">
            Dr. Paws is a versatile veterinarian, offering expert care to a
            variety of animals, including cats, dogs, hamsters, unicorns (just
            kidding, we wish!), and many more. Whether your pet has fur,
            feathers, or scales, Dr. Paws is here to provide top-notch
            veterinary services.
          </span>
          <br />
          <br />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa3150f9f44a13d77ec84f3317935f808b6e431e4f9a8c28123f95e1c9ce78bc?apiKey=7336283b61084b1fb8ff25f74a29682d&"
          className="aspect-[1.9] object-contain object-center w-[19px] fill-slate-700 stroke-[2px] stroke-slate-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfccad067e0bce2847abb0c977b3a61bc78c921e95f0ec792c0ab2f586bcf844?apiKey=7336283b61084b1fb8ff25f74a29682d&"
        className="aspect-[1106] object-contain object-center w-full fill-slate-700 stroke-[1px] stroke-slate-400 overflow-hidden self-center max-w-[1106px] mt-11 max-md:max-w-full max-md:mt-10"
      />
      <div className="bg-orange-100 self-stretch flex w-full flex-col justify-center mt-40 px-16 py-12 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-[904px] max-w-full ml-32 my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27918b16449735935daf8eb4924841a6d566702d8ebba0aac63e69645f5c83ee?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                  className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden max-w-full"
                />
                <div className="text-slate-700 text-2xl leading-6 tracking-tight self-stretch whitespace-nowrap mt-6">
                  hello@bearhug.co
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight self-stretch whitespace-nowrap mt-7">
                  +91 9307491737
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col py-7 max-md:mt-10">
                <div className="text-slate-700 text-2xl font-semibold leading-6 capitalize whitespace-nowrap">
                  Company
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight whitespace-nowrap mt-6">
                  Team
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight mt-7">
                  Careers
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col py-7 max-md:mt-10">
                <div className="text-slate-700 text-2xl font-semibold leading-6 capitalize whitespace-nowrap">
                  Get care
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight mt-6">
                  Services
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight whitespace-nowrap mt-7">
                  Locations
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight whitespace-nowrap mt-7">
                  Membership
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight whitespace-nowrap mt-7">
                  Download App
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col py-7 max-md:mt-10">
                <div className="text-slate-700 text-2xl font-semibold leading-6 capitalize whitespace-nowrap">
                  Social
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight mt-6">
                  Instagram
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight mt-7">
                  LinkedIn
                </div>
                <div className="text-slate-700 text-2xl leading-6 tracking-tight mt-7">
                  Twitter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


