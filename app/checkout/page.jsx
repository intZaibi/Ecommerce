"use client"
import axios from 'axios';
import React from 'react';

export default function PreviewPage() {

  const data = {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 10000,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  }

  const checkoutBtn = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/api/checkout_sessions", {
        name: data.title,
        price: data.price
      })
      const resData = await response.data
      
      window.location.href = resData.url


      console.log({resData})
    }
    catch (err){
      console.log(err)
    }
  }

  return (
    <form onSubmit={checkoutBtn}>
      <section className='bg-white flex flex-col w-96 h-28 justify-between'>
        <button type="submit" className='h-9 bg-yellow-700 text-white cursor-pointer'>
          Checkout
        </button>
      </section>
    </form>
  );
}