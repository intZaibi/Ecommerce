"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';
import { toast } from "react-toastify";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/utils/firebase";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';


export default function Cart({ IsCartOpen, closeCart }) {
  const { cartItems, removeProduct, incrementQuantity, decrementQuantity, updateQuantity } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth)
  const router = useRouter()

  const checkoutBtn = async (e) => {
      e.preventDefault()
      setLoading(true);
      const token = Cookies.get('token');
      if (!user && !token) {
        toast.error("You are not logged in.")
        router.push("../userAccount/auth/signIn")
      } else {

      try {
        console.log("going to checkout api...")
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout_sessions`, {cartItems, user})
        const resData = await response.data
        
        window.location.href = resData.url

      }
      catch (err){
        toast.error("Something went wrong!...")
        setLoading(false);
      }
    }
  }

  return (
    <div
      className={`fixed h-[100vh] ${IsCartOpen ? "translate-x-[0]" : "translate-x-[550px]"} overflow-hidden duration-500 ease-out scrollbar overflow-y-scroll z-30 min-w-[30vw] py-14 px-2 shadow-[0_8px_20px_#080f342f] bg-[#fcfcfc] top-0 right-0 min-h-screen`}
    >
      <div className="flex justify-between px-5 items-center">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <svg onClick={closeCart} width="20px" height="20px" viewBox="0 0 16 16">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fillRule="nonzero" fill="#333333">
              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
            </g>
          </g>
        </svg>
      </div>
      <hr className="border-gray-400 my-5" />
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
          <div key={item.ProductID} className="mb-10 flex">
            <div className="left h-full px-4">
              <Image
                src={`${item.ImageURLs[0]}`}
                width={100}
                height={100}
                className="min-w-32 min-h-24 rounded-[30px] "
                alt={`Product image of {productName}`}
              />
            </div>
            <div className="right">
              <h2 className="mb-[10px] max-w-72 text-wrap font-bold text-xl sm:leading-none md:leading-none lg:leading-[1.10]">
                {item.ProductName}
              </h2>
              <div className="flex flex-col gap-1.5">
                <p className="font-medium ">$ {item.Price}</p>
                <p>
                  Capasity: <span className="font-medium">{item.Storage}GB</span>
                </p>
                <p>
                  RAM: <span className="font-medium">{item.RAM}GB</span>
                </p>
                <p>
                  Color: <span className="font-medium">{item.Color}</span>
                </p>
                <button onClick={() => removeProduct(item.ProductID)} className="cursor-pointer self-start text-red-600">
                  Delete
                </button>
              </div>
              <button onClick={() => decrementQuantity(item.ProductID)} className="py-1.5 w-8 bg-gray-300">
                -
              </button>
              <input
                type="text"
                className="py-2 w-10 text-center"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.ProductID, e.target.value)}
              />
              <button
                onClick={() => incrementQuantity(item.ProductID)}
                className="py-1.5 w-8 bg-gray-300 font-body"
              >
                +
              </button>
            </div>
          </div>
          ))}
        </>
      ) : (
        <p className="my-16 text-center text-xl">Your cart is empty.</p>
      )}
      <hr className="border-gray-400 mt-5 mb-16" />
      <div className="px-6">
          <button onClick={checkoutBtn} disabled={loading} className="flex justify-center bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-5 rounded-full w-full text-lg text-white hover:-translate-y-1 duration-300 ease-out">
          {loading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Continue to the checkout"
          )}

        </button>
      </div>
    </div>
  );
}
