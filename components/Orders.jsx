import React from 'react'

export default function Orders() {
  return (
    <div className="md:px-10 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <h1 className='font-semibold  my-10 text-xl'>Orders</h1>
          <div className="flex py-4 bg-[#FFFFFF] shadow-[0_0_10px_#080f340f] flex-col items-center rounded-lg">
            <h1 className='mb-4 font-semibold'>No Orders yet</h1>
            <p>Go to the store to place an order.</p>
          </div>
        </div>
    </div>
  )
}
