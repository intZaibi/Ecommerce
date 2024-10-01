"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React, { useState } from "react";
import axios from 'axios';

export default function page() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    objective: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/contactForm", formData);
      if (res.status === 200) {
        alert("We Have received your message. \nThank you for contacting us. We'll get back to you soon! ")
        document.querySelectorAll("#input").forEach(input => input.value = "");
      }
    } catch (error) {
      alert("Form not submitted. Something went wrong! ")
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="md:px-10 mt-40 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 lg:px-[72px] sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <div id="container" className="gap-5 grid lg:grid-cols-2">
          <div id="left" className="flex flex-col justify-center px-1 py-10">
            <p
              id="contact"
              className="mb-4 relative text-[#00cc88] pl-9 text-lg font-semibold"
            >
              Contact
            </p>
            <h2 className="mb-[10px] font-bold text-5xl text-gray sm:leading-none md:leading-none lg:leading-[1.10] 800 lg">
            Get in touch today
            </h2>
            <p className="mb-2 max-w-full text-gray-600 md:leading-7 lg:leading-8 sm:leading-6 ">
            If you need any assistance, please feel free to send us a message, either via this online form or directly by email to <a href="mailto:xyz@gmail.com" className="text-black underline">xyz@gmail.com</a>.<br /> <br />
            For any after-sales service questions, you can contact our dedicated team by email or telephone:
            </p>
            <div className="hover:text-red-500">
              <img src="/enailicon-green.svg" alt="email icon" className="inline mr-4" />
              <a href="mailto:xyz@gmail.com" className="font-medium">xyz@gmail.com</a>
            </div>
            <div className="hover:text-red-500 mt-4">
              <img src="/icon-2-contact-marketing-template.svg" alt="email icon" className="inline mr-4 rounded-2xl" />
              <a href="tel:+923412115732" className="font-medium">(+92) 3412115732</a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            id="right"
            className="min-h-[700px] lg:min-h-0 grid grid-rows-7 lg:grid-cols-2 lg:gap-x-4 gap-y-6 px-10 py-12 lg:grid-rows-4 bg-white relative rounded-[2.5rem]"
          >
            <div className="relative row-start-1 lg:row-auto w-full">
            <input
              required
              name='fullname'
              onChange={handleChange}
              id="input"
              type="text"
              maxLength="30"
              className="block h-full w-full pl-5 pr-14 placeholder:text-opacity-45 placeholder:text-black py-2 focus:outline-[#0a0a0a7a] hover:border-[#00cc88] duration-300 border border-[#0a0a0a1a] lg:flex justify-between items-center shadow-[0_2px_6px_#0a0a0a1a] rounded-full"
              placeholder="Full name"
              />
            <svg id="svg1" className="top-3 lg:top-[12px] right-5 absolute" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_2231)"><path d="M11.155 13.6811C14.6568 13.6811 17.4956 10.8424 17.4956 7.34057C17.4956 3.83877 14.6568 1 11.155 1C7.65322 1 4.81445 3.83877 4.81445 7.34057C4.81445 10.8424 7.65322 13.6811 11.155 13.6811Z" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.01025 26.8256C1.01025 24.135 2.07909 21.5546 3.98163 19.652C5.88417 17.7495 8.46457 16.6807 11.1552 16.6807C13.8458 16.6807 16.4262 17.7495 18.3288 19.652C20.2313 21.5546 21.3001 24.135 21.3001 26.8256" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_2_2231"><rect width="23" height="28" fill="white" transform="translate(0.0102539)"/></clipPath></defs></svg>
              </div>
            <div className="relative row-start-2 lg:row-auto w-full">
            <input
              required
              name='email'
              onChange={handleChange}
              id="input"
              type="email"
              maxLength="30"
              className="block h-full w-full pl-5 pr-14 placeholder:text-opacity-45 placeholder:text-black py-2 focus:outline-[#0a0a0a7a] hover:border-[#00cc88] duration-300 border border-[#0a0a0a1a] lg:flex justify-between items-center shadow-[0_2px_6px_#0a0a0a1a] rounded-full"
              placeholder="E-mail"
              />
            <svg id="svg2" className="top-4 lg:top-4 right-5 absolute" width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_2240)"><path d="M22.0193 1H3.01929C1.91472 1 1.01929 1.89543 1.01929 3V15C1.01929 16.1046 1.91472 17 3.01929 17H22.0193C23.1239 17 24.0193 16.1046 24.0193 15V3C24.0193 1.89543 23.1239 1 22.0193 1Z" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M23.4304 1.58203L12.5194 10.5L1.6084 1.58203" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_2_2240"><rect width="25" height="18" fill="white" transform="translate(0.0192871)"/></clipPath></defs></svg>
              </div>
            <div className="relative row-start-3 lg:row-auto w-full">
            <input
              required
              name='phone'
              onChange={handleChange}
              id="input"
              type="tel"
              maxLength="20"
              className="block h-full w-full pl-5 pr-14 placeholder:text-opacity-45 placeholder:text-black py-2 focus:outline-[#0a0a0a7a] hover:border-[#00cc88] duration-300 border border-[#0a0a0a1a] lg:flex justify-between items-center shadow-[0_2px_6px_#0a0a0a1a] rounded-full"
              placeholder="Phone"
              />
            <svg id="svg3" className="top-3 lg:top-[10px] right-5 absolute" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_2248)"><path d="M13.845 1H3.67103C2.42239 1 1.41016 2.01223 1.41016 3.26087V24.7391C1.41016 25.9878 2.42239 27 3.67103 27H13.845C15.0936 27 16.1059 25.9878 16.1059 24.7391V3.26087C16.1059 2.01223 15.0936 1 13.845 1Z" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4611 1V2.48123C12.4611 2.87408 12.3051 3.25083 12.0273 3.52862C11.7495 3.8064 11.3727 3.96246 10.9799 3.96246H6.53615C6.14331 3.96246 5.76655 3.8064 5.48877 3.52862C5.21098 3.25083 5.05493 2.87408 5.05493 2.48123V1" stroke="#A0A3BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_2_2248"><rect width="17" height="28" fill="white" transform="translate(0.410156)"/></clipPath></defs></svg>
              </div>
            <div className="row-start-4 lg:row-auto w-full">
            <input
              required
              name='objective'
              onChange={handleChange}
              type="text"
              id="input"
              maxLength="30"
              className="block h-full w-full pl-5 pr-14 py-2 placeholder:text-opacity-45 placeholder:text-black focus:outline-[#0a0a0a7a] hover:border-[#00cc88] duration-300 border border-[#0a0a0a1a] lg:flex justify-between items-center shadow-[0_2px_6px_#0a0a0a1a] rounded-full"
              placeholder="Objective"
              />
              </div>
              <div className="col-span-2 row-span-4">
            <textarea
              name='description'
              onChange={handleChange}
              id="input"
              className="block h-full w-full px-5 py-5 placeholder:text-opacity-45 placeholder:text-black focus:outline-[#0a0a0a7a] hover:border-[#00cc88] duration-300 border border-[#0a0a0a1a] shadow-[0_2px_6px_#0a0a0a1a] rounded-2xl "
              placeholder="Disciption about product..."
              required
              />
              </div>
              <button
                  type="submit"
                  size="sm"
                  className="bg-[#00cc88] shadow-[#00cc894f] shadow-lg lg:col-start-2 lg:w-[70%] w-[50%] lg:mr-0 lg:ml-auto hover:bg-[#00cc88c1] px-6 py-3 rounded-full text-white hover:-translate-y-[2px] duration-200 font-semibold ease-out"
                >
                  Send
                </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
