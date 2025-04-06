"use client"

import Orders from '@/components/Orders'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { auth } from '@/app/utils/firebase';

export default function OrderPage() {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const token = Cookies.get('token');
  const router = useRouter();

  useEffect(() => {
    if (!user && !token) {
      router.push("./auth/signIn");
    }
  }, []);

  const getfunc = async () => {
    if (user && user.email) {
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, { email: user.email });
        setOrders(res.data.data.map((item) => [item.amount_total, item.product_data, item.Status] ))
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
  }

  useEffect(() => {

    getfunc();
    
  }, [user]);
  
  const toggleDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    dropdown.classList.toggle("hidden");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signIn`);
      toast.success('You have successfully signed out');
      router.push('./auth/signIn');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const openDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (dropdown.classList.contains("hidden")) dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
  };

  const closeDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (!dropdown.classList.contains("hidden")) dropdown.classList.remove("flex");
    dropdown.classList.add("hidden");
  };

  return (
    <>
      <nav className="flex w-full justify-between items-center bg-white shadow-[0_0_10px_#080f340f] mx-auto lg:py-8 lg:px-52">
        <div id="logo" className="px-4 flex">
          <Link href="/home" className="-m-1.5 p-1.5">
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-10" />
          </Link>

          <div className="text-lg text-gray-700 flex items-center ml-20">
            <Link href="/userAccount/profile">Go To Profile</Link>
          </div>
        </div>

        <div id="cart" className="flex justify-center items-center">
          <div className='py-5 flex items-center cursor-pointer' onClick={toggleDropdown} onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
            <Link href="/userAccount/auth/signIn" className='flex items-center justify-center text-blue-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#eeeeee" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </Link>
            <div id="dropdown" className="py-10 w-48 items-center cursor-auto z-10 top-28 flex-col gap-8 rounded-[0_16px_16px_16px] bg-white shadow-[0_40px_20px_#080f341a] absolute hidden">
              <Link href="/userAccount/profile" className="flex  w-full justify-center">Profile</Link>
              <button onClick={handleSignOut} className="flex text-red-500 w-full justify-center">Log out</button>
            </div>
            <ChevronDownIcon id="dropdownarrow" className="mr-5 text-black size-4" />
          </div>

          <Link href="/products" className='px-3 py-4 text-sm font-semibold bg-[#00cc88] text-white rounded-md'>
            Go to the shop
          </Link>
        </div>

        <div id="menuBarIcon" className="flex justify-center lg:hidden bg-[#00cc89] shadow-[0_8px_18px_#00cc897a] rounded-full w-10 h-10 text-white cursor-pointer">
          <button type="button" className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md">
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <Orders data={orders} />
    </>
  );
}
