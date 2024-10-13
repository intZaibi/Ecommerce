"use client"

import Image from "next/image";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from 'react';
import { CartContext } from '@/app/context/Cartcontext';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/utils/firebase";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


export default function ProductDetail({params}) {

  const { addToCart } = useContext(CartContext);
  
  const [currentProductID] = useState(params.productDetail)
  const [product, setProduct] = useState({});
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [user] = useAuthState(auth)

  const token = Cookies.get('token');
  
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/productDetail?productid=${currentProductID}`
        );
        setProduct(res.data.result[0][0]);
      } catch (err) {
        console.log("Error:", err.response);
      }
    };
    fetchProducts();
  
  }, [])
  
  const handleAddToCart = (product) => {

    if (!user && !token) {
      router.push("../../userAccount/auth/signIn")
    } else if (!selectedStorage || !selectedRAM || !selectedColor) {
      alert("Please select all options (Storage, RAM, and Color).");
    } else {
      const updatedProduct = { ...product, Storage: selectedStorage, RAM: selectedRAM, Color: selectedColor };
      addToCart(updatedProduct);
    }

  };

  

  return (
    <div className="bg-white">
      <Navbar />
      <div className="md:px-10 mt-40 lg:px-10 max-w-full">
        <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div id="container" className="gap-5 row-gap-8 grid lg:grid-cols-2">
            <div id="right" className="relative flex flex-col justify-end">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                {product?.ImageURLs?.map((item, i) => (
                  <a href={item} data-src={item} key={i}>
                    {item.includes("_1.") ? (
                      <Image
                        src={item}
                        width={1000}
                        height={1000}
                        alt={`Image ${i+1}`}
                        priority={true}
                        className="rounded-lg"
                      />
                    ) : (
                      <Image
                        src={item}
                        width={100}
                        height={100}
                        className="min-w-32 min-h-24 inline rounded-[30px]"
                        alt={`thumbnail image ${i}`}
                      />
                    )}
                  </a>
                ))}
              </LightGallery>
            </div>
            
            <div id="left" className="flex flex-col justify-center lg:justify-start lg:pt-20 lg:px-5">
              <h2 className="mb-[10px] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl sm:leading-none md:leading-none lg:leading-[1.10]">
              {product?.ProductName}
              </h2>
              <h2 className="my-4 font-bold text-2xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
              $ {product?.Price}
              </h2>
              <fieldset className="my-4">
                {product?.Storage?.map((item, i)=>(
                  <label htmlFor={`memoryVariantBtn${i}`} key={i}>
                    <input type="radio" name="memoryVariant" id={`memoryVariantBtn${i}`} className="w-9 peer sr-only" onChange={() => setSelectedStorage(item)}/>
                      <div className="inline peer-checked:bg-black peer-checked:text-white py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">
                      {item}GB
                      </div>
                  </label>
                ))}
              </fieldset>

              <fieldset className="mt-7 mb-4">
                {product?.RAM?.map((item, i)=>(
                  <label htmlFor={`RAMBtn${i}`} key={i}>
                    <input type="radio" name='RAMBtn' id={`RAMBtn${i}`} className="w-9 peer sr-only" onChange={() => setSelectedRAM(item)}/>
                      <div className="inline peer-checked:bg-black peer-checked:text-white py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">
                      {item}GB
                      </div>
                  </label>
                ))}
              </fieldset>
              
              <fieldset className="mt-7 mb-14">
                {product?.Color?.map((item, i)=>(
                  <label htmlFor={`colorBtn${i}`} key={i}>
                    <input type="radio" name='colorBtn' id={`colorBtn${i}`} className="w-9 peer sr-only" onChange={() => setSelectedColor(item)}/>
                      <div className="inline peer-checked:bg-black peer-checked:text-white py-4 rounded-full px-7 mr-4 shadow-lg shadow-[#080f343a]">
                      {item}
                      </div>
                  </label>
                ))}
              </fieldset>
              
              <div className="flex gap-3 flex-col lg:flex-row">
              <button onClick={() => { handleAddToCart(product) }} className="inline bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-5 rounded-full w-full lg:w-44 text-lg text-white hover:-translate-y-1 duration-300 ease-out">
                Add to cart
              </button>
              <button className="inline text-[#00cc88] shadow-[#080f340f] shadow-lg hover:shadow-xl hover:shadow-[#080f341f] px-2 py-5 rounded-full w-full lg:w-44 text-lg bg-white hover:-translate-y-1 duration-300 ease-out">
                Buy it now
              </button>
              </div>
              <br />
              <hr className="border-gray-600 mt-6"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
