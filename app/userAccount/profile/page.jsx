"use client"

import AddressForm from '@/components/AddressForm'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { auth } from '@/app/utils/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import Cookies from 'js-cookie';
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Profile() {

  const [user] = useAuthState(auth)
  const router = useRouter()

    const token = Cookies.get('token');
    if (!user && !token) {
      console.log(token)
      router.push("./auth/signIn")
    }
  

  const openDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (dropdown.classList.contains("hidden"))
      dropdown.classList.remove("hidden");
    dropdown.classList.add("flex");
  };

  const toggleDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    dropdown.classList.toggle("hidden");
  }

  const closeDropdown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (!dropdown.classList.contains("hidden"))
      dropdown.classList.remove("flex");
      dropdown.classList.add("hidden");
  };



  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await axios.get("http://localhost:3000/api/signIn")
      toast.success('You have successfully signed out');
      router.push('./auth/signIn')
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <>
    <nav className="flex w-full justify-between items-center bg-white shadow-[0_0_10px_#080f340f] mx-auto lg:py-8 lg:px-52">
      <div id="logo" className="px-4 flex">
        <Link href="/home" className="-m-1.5 p-1.5">
          <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="w-auto h-10" />
        </Link>

        <div className="text-lg text-gray-700 flex items-center ml-20">
          <Link href="/userAccount/orders">
          See Orders
          </Link>
        </div>
      </div>

      <div
        id="cart"
        className="flex justify-center items-center"
      >
        <div className='py-5 flex items-center cursor-pointer' onClick={toggleDropdown} onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
          <div className='flex items-center justify-center text-blue-gray-800'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#eeeeee" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          </div>
          <div id="dropdown" className="py-10 w-48 items-center cursor-auto z-10 top-28 flex-col gap-8 rounded-[0_16px_16px_16px] bg-white shadow-[0_40px_20px_#080f341a] absolute hidden">
            <Link href="/userAccount/orders" className="flex  w-full justify-center">
              Orders
            </Link>
            <button onClick={handleSignOut} className="flex text-red-500  w-full justify-center">
              Log out
            </button>
          </div>
        <ChevronDownIcon id="dropdownarrow" className="mr-5 text-black size-4" />
        </div>



        <Link href="/products" className='px-3 py-4 text-sm font-semibold bg-[#00cc88] text-white rounded-md'>
          Go to the shop
        </Link>
      </div>
      
      <div
        id="menuBarIcon"
        className="flex justify-center lg:hidden bg-[#00cc89] shadow-[0_8px_18px_#00cc897a] rounded-full w-10 h-10 text-white cursor-pointer"
      >
        <button
          type="button"
          // onClick={() => setMobileMenuOpen(true)}
          className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md"
        >
          <Bars3Icon aria-hidden="true" className="w-6 h-6" />
        </button>
      </div>
    </nav>



    <div className="md:px-10 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <h1 className='font-semibold  my-10 text-xl'>Profile</h1>
          <div className="flex p-6 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col rounded-lg">
            <div className="text-[#00cc88] flex">
            <h1 className='mb-4 mr-2 text-gray-600 inline'>Name</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            </div>
            <h1 className='text-gray-600'>E-mail</h1>
            <p>shahzaib@gmail.com</p>
          </div>
          <div className="flex p-6 mt-7 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col rounded-lg">
            <div className="flex">
            <h1 className='mb-4 mr-2 font-bold text-black inline'>Addresses</h1>
            <h1 className='mb-4 mr-2 font-bold text-[#00cc88] inline'>+Add</h1>
            </div>
            <div id='address1' className="flex flex-col">
            <p>Shahzaib Ali</p>
            <p>Muryali</p>
            <p>Dera Ismail Khan</p>
            <p>KPK</p>
            <p>Pakistan</p>
            <p>29050</p>
            <p>+923412115732</p>
            </div>
            <div className="hidden">
            <AddressForm />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
