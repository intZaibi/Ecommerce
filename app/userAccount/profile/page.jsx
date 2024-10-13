"use client"

import AddressForm from '@/components/AddressForm'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { auth } from '@/app/utils/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import Cookies from 'js-cookie';
import Link from 'next/link'
import React, { useState,  useEffect } from 'react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const data = [
  "Shahzaib Ali",
  "Muryali",
  "Dera Ismail Khan",
  "KPK",
  "Pakistan",
  29050,
  "+923412115732",
]

export default function Profile() {

  const [user] = useAuthState(auth);
  const router = useRouter();

  const [isEditingName, setIsEditingName] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const token = Cookies.get('token');
  
  useEffect(() => {
    if (!user && !token) {
      router.push("./auth/signIn");
    }
  }, [user, token]);
  

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userCredentials?email=${user?.email}`);
      setAddress(res.data.existingData[0].address);
      setName(res.data.existingData[0].name);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);
  

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

  const handleAddAddress = () => {
    if(name)
    setIsAddingAddress(true);
    else
    alert("Please set your name first by clicking on edit(pencil) icon");
  }
  const handleEditName = () => {
    setIsEditingName(true);
  }

  const handleSubmitAddress = async (addressData) => {
    if(!name){
      setName(addressData[0])
    }
    setAddress(addressData)
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userCredentials`, { email: user.email, name, address: addressData });
      console.log(addressData)
      setIsAddingAddress(false);
      toast.success('Address added successfully!');
    } catch (error) {
      toast.error('Failed to add address!');
    }
  }


  const handleSaveName = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userCredentials`, { email: user.email, name: name, address: address });
      toast.success('Name updated successfully!');
      setIsEditingName(false);
    } catch (error) {
      console.log(error)
      toast.error('Failed to update name!');
    }
  }

  const handleCancelEditName = () => {
    setIsEditingName(false);
  }

  const handleCancelAddAddress = () => {
    setIsAddingAddress(false);
  }

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

  return (
    <>
      <nav className="flex w-full justify-between items-center bg-white shadow-[0_0_10px_#080f340f] mx-auto lg:py-8 lg:px-52">
          <div className="text-lg text-gray-700 flex items-center ml-20">
            <Link href="/userAccount/orders">See Orders</Link>
          </div>

        <div className="flex justify-center items-center">
          <div className='flex items-center cursor-pointer' onClick={toggleDropdown} onMouseOver={openDropdown} onMouseLeave={closeDropdown}>
            <div className='flex items-center justify-center text-blue-gray-800'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#eeeeee" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div id="dropdown" className="py-10 w-48 items-center cursor-auto z-10 top-28 flex-col gap-8 rounded-[0_16px_16px_16px] bg-white shadow-[0_40px_20px_#080f341a] absolute hidden">
              <Link href="/userAccount/orders" className="flex w-full justify-center">
                Orders
              </Link>
              <button onClick={handleSignOut} className="flex text-red-500 w-full justify-center">
                Log out
              </button>
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

      <div className="md:px-10 lg:px-10 max-w-full">
        <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <h1 className='font-semibold my-10 text-xl'>Profile</h1>

          {/* Name Edit Section */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="loader border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-16 w-16"></div>
            </div>
          ) : (
            <>
          <div className="flex p-6 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col rounded-lg">
            <div className="text-[#00cc88] flex">
              <h1 className='mr-2 text-gray-600 inline'>Name</h1>
              <svg onClick={handleEditName} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </div>
            {isEditingName ? (
              <div className="flex flex-col">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 rounded-lg mb-2"
                />
                <div className="flex justify-end gap-4">
                  <button onClick={handleSaveName} className="text-white bg-[#00cc88] px-3 py-1 rounded-lg">
                    Save
                  </button>
                  <button onClick={handleCancelEditName} className="text-white bg-red-500 px-3 py-1 rounded-lg">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <h1 className='mb-4'>{name || ''}</h1>
            )}
            <h1 className='text-gray-600'>E-mail</h1>
            <p>{user.email}</p>
          </div>

          {/* Address Section */}
          <div className="flex p-6 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col rounded-lg mt-6">
            <div className="text-[#00cc88] flex justify-between">
              <h1 className='mb-4 mr-2 font-semibold inline'>Addresses</h1>
              <button onClick={handleAddAddress} className="bg-[#00cc88] text-white px-4 py-2 rounded-lg">
                {address ? "Edit Address": "Add Address"}
              </button>
            </div>
            <div className="flex gap-16">
              <div className='flex flex-col'>
                {address ? address?.map((x) => <h1>{x}</h1>): ""}
              </div>
            </div>
          </div>

          {/* Address Modal */}
          {isAddingAddress && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <AddressForm handleCancel={handleCancelAddAddress} onSubmit={handleSubmitAddress} />
              </div>
            </div>
          )}
          </>
          )}
        </div>
      </div>
    </>
  )
}




