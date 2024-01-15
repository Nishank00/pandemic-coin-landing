"use client";
import React from 'react'
import Contact_svg from '../components/common/contact_svg';

export default function Contact() {

    return (
      <div className="bg-pdc-d-gray h-fit w-[100%] flex md:pt-[10px] pt-0 flex-col md:flex-row">
        <div class="max-w-screen-xl mt-24 px-8 grid gap-[8rem] grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-bg-pdc-d-gray text-gray-100 rounded-lg shadow-lg">
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div class="text-gray-400 mt-8">
                Hate forms? Send us an <span class="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div class="mt-8 text-center">
              <Contact_svg />
            </div>
          </div>
          <div class="">
            <div>
              <span class="uppercase text-sm text-gray-500 font-bold">
                Full Name
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-500 font-bold">
                Email
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-gray-500 font-bold">
                Message
              </span>
              <textarea
                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div class="mt-8">
              <button class="uppercase text-sm font-bold tracking-wide bg-[#BB1A37] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
