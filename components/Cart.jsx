import Image from 'next/image'
import React from 'react'

export default function Cart() {
  return (
    <div className='fixed h-[100vh] hidden overflow-hidden overflow-y-scroll z-10 min-w-[35vw] py-14 px-2 shadow-[0_8px_20px_#080f342f] bg-[#fcfcfc] top-0 right-0 min-h-screen'>
      <div className="flex justify-between px-5 items-center">
        <h1 className='text-3xl font-bold'>Your Cart</h1>
        <svg width="20px" height="20px" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero" fill="#333333"><polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon></g></g></svg>
      </div>
      <hr className='border-blue-gray-900 my-5' />
      
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="left h-full px-4">
        <Image src="/SamsungGalaxyA50-A.webp" width={100} height={100} className="min-w-32 min-h-24 rounded-[30px] " />
        </div>
        <div className="right">
          <h2 className="mb-[10px] font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl sm:leading-none md:leading-none lg:leading-[1.10]">
            Samsung Galaxy A50 2019
          </h2>
          <h2 className="font-bold ">
            $ 109.00
          </h2>
          <p>Capasity: <span className='font-semibold'>128GB</span></p>
          <p>Color: <span className='font-semibold'>Black</span></p>
          <button className='cursor-pointer block text-red-600'>Delete</button>
          <button className='w-8 bg-gray-300'>-</button>
          <input type="text" className='w-10 text-center' value={1}/>
          <button className='w-8 bg-gray-300 font-body'>+</button>
        </div>
      </div>
      <hr className='border-blue-gray-900 mt-5 mb-16' />
      <div className="px-6">
        <button className="inline bg-[#00cc88] shadow-[#00cc894f] shadow-lg hover:shadow-xl hover:shadow-[#00cc895d] px-2 py-5 rounded-full w-full text-lg text-white hover:-translate-y-1 duration-300 ease-out">
          Continue to the checkout
        </button>
      </div>
    </div>
  )
}
