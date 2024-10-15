"use client";
import React, { useState } from "react";
import { useContext } from 'react';
import { CartContext } from '@/app/context/CartContext';
import axios from "axios";
import { toast } from "react-toastify";


export default function PreviewPage() {
  const { cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const checkoutBtn = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout_sessions`, {cartItems})
      const resData = await response.data
      
      window.location.href = resData.url

    }
    catch (err){
      console.log(err)
    }
  }

  return (
    <form onSubmit={checkoutBtn}>
      <section className='bg-white flex flex-col w-96 h-28 justify-between'>
      <button
          type="submit"
          className={`h-9 bg-yellow-700 text-white cursor-pointer px-4 flex items-center justify-center ${loading && "opacity-50 cursor-not-allowed"}`}
          disabled={loading} // Disable the button when loading is true
        >
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
            "Checkout"
          )}
        </button>
      </section>
    </form>
  );
}