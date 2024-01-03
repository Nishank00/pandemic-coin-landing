"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../assets/logo.png";
import ContactUsForm from '../components/contactus/ContactUsForm'; // Create this component

const ContactUs = () => {
  return (
    <div className="bg-pdc-d-gray overflow-hidden">
      {/* You can customize the header based on your needs */}
      <div className="flex items-center justify-center text-center flex-col">
        <Image
          className="mx-auto rounded-[30px]"
          width={300}
          height={300}
          src={logo} // Make sure to import your logo
          quality={100}
          alt="logo"
        />
        <div className="my-4">
          <h1 className="text-2xl">Contact Us</h1>
          {/* You can add more information or description here */}
        </div>
      </div>
      {/* Include your ContactUsForm component */}
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
