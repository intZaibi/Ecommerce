import React from 'react'

export default function OurStory() {
  return (
    <div id="container" className="gap-5 grid lg:grid-cols-2">
          <div id="right" className="relative flex justify-end gap-7">
            <img src="/aboutPic4.jpeg" alt="Our story image" className=' shadow-[0_14px_44px_#3f80fd14,0_18px_84px_#14142b2b] lg:rounded-[50px] rounded-[40px] lg:w-3/4 w-9/12 h-[50vw] lg:h-4/6 ml-0 mr-auto' />
            <img src="/aboutPic7.webp" alt="Our story image" className=' shadow-[0_14px_44px_#3f80fd14,0_18px_84px_#14142b2b]  tansition-apply absolute lg:rounded-[50px] rounded-[40px] lg:w-3/4 w-9/12 h-[50vw] lg:h-4/6 ml-0 mr-auto lg:top-36 top-28' />
          </div>
          <div id="left" className="pl-6 flex mt-32 lg:m-0 flex-col justify-center relative">
          <p id="about-us" className="relative text-[#00cc88] pl-9 font-semibold" > Our story </p> 
          <br />
            <h2 className="font-bold text-3xl text-gray- sm:text-4xl md:text-[54px] lg:text-3xl sm:leading-none md:leading-none lg:leading-[1.10]">
            This was created by Leasétic in 2022!
            </h2> 
            <br />
            <p className="text-gray-600 sm:text-lg md:text-xl lg:text-base md:leading-7 lg:leading- sm:leading">
            Before Loopix was created, the equipment from our rental contracts was resold to wholesalers and we did not know what happened to these computers and smartphones.
            </p>
            <br />
            <p className="text-gray-600 sm:text-lg md:text-xl lg:text-base md:leading-7 lg:leading- sm:leading">
            At the beginning of 2022, we decided to make this equipment available to our customers' employees with two objectives:
            </p>
            <br />
            <p className="text-gray-600 sm:text-lg md:text-xl lg:text-base md:leading-7 lg:leading- sm:leading">
            ✅ Respond to a recurring demand from our customers: resell their IT equipment to employees, but without having to manage after-sales service.
            </p>
            <br />
            <p className="text-gray-600 sm:text-lg md:text-xl lg:text-base md:leading-7 lg:leading- sm:leading">
            ✅ Allow our customers' employees to benefit from computers and smartphones at preferential prices, since their companies participate in providing this equipment.
            </p>
          </div>
        </div>
  )
}
