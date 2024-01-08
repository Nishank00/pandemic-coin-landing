// components/contactus/ContactUsForm.jsx


import React, { useState } from 'react';
import Image from "next/image";
import join from "../../../assets/103180-OLVIBQ-707.jpg";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send form data to a server, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <section className="text-gray-400 px-12 pb-12 body-font"
    style={{
      backgroundImage: `url(${join})`, // Use the image as the background
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container mx-auto bg-opacity-50 backdrop-filter backdrop-blur-md flex p-12 rounded-[30px] md:flex-row flex-col items-center">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-opacity-70 bg-[#111327] p-8 rounded-md shadow-md text-white backdrop-filter backdrop-blur-md flex flex-wrap">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Phone:</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Company:</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Subject:</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full px-4 mb-4">
          <label className="block mb-4">
            <span className="text-gray-400">Message:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="form-input mt-1 w-full rounded-md bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </label>
        </div>

        <div className="w-full px-4 mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#FB2525] rounded-md hover:bg-pdc-dark-blue focus:outline-none focus:ring focus:border-pdc-dark-blue"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="w-5/6 md:w-1/2 hidden md:block">
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

export default ContactUsForm;
