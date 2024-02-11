"use client";

import Image from "next/image";
import React, { useState } from "react";
import CustomFileInput from "./custom-file-input";
import join from "../../../assets/ai/5.png";

const JoinUs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResumeChange = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    const handleUploadResume = () => {
        // Add logic to handle the resume upload
        console.log("First Name:", firstName);
        console.log("Email:", email);
        console.log("Resume File:", resume);

        // Add your API call or further processing logic here
    };

    return (
        <section className="text-gray-400 px-4 md:px-12 pb-12 body-font">
            <div className="container mx-auto bg-[#111327] flex p-12 rounded-[30px] md:flex-row flex-col items-center justify-evenly">
                <div className="md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h2 className="text-white text-[32px] font-medium title-font mb-6">
                        Join our growing team
                    </h2>
                    <p className="text-base mb-4">
                        We love what we do and we do it with passion. We value
                        the experimentation of the message and smart incentives.
                    </p>
                    <div className="space-y-6 my-12 w-full md:my-2">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="first-name"
                                placeholder="First Name"
                                name="first-name"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleFirstNameChange}
                            />
                        </div>
                        <div className="relative w-full">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="xyz@gmail.com"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="relative w-full space-y-1">
                            <p className="leading-7 w-full text-left text-sm text-gray-400">
                                Attachment
                            </p>
                            <CustomFileInput />
                        </div>
                    </div>
                    <div className="flex items-center my-4 justify-between w-full">
                        <button className="text-[#707070] bg-transparent border-0 py-2 px-0 focus:outline-none rounded-lg text-base">
                            Cancel
                        </button>
                        <button
                            onClick={handleUploadResume}
                            className="text-white bg-[#FB2525] border-0 py-2 px-4 focus:outline-none rounded-lg text-base"
                        >
                            Upload Resume
                        </button>
                    </div>
                </div>
                <div className=" hidden md:block  rounded-[60px] overflow-hidden">
                    <Image
                        className="object-contain object-right rounded"
                        alt="hero"
                        width={500}
                        height={500}
                        src={join}
                    />
                </div>
            </div>
        </section>
    );
};

export default JoinUs;

