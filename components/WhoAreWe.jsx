import React from 'react'

export default function WhoAreWe() {

  return (
    <div className='lg:mb-80 mb-32'>
      <div className="flex relative gap-5">
        <div id="left" className="flex flex-col px-1">
            <p
              id="about-us"
              className="mb-4 relative text-[#00cc88] pl-9 text-lg font-semibold"
            >
              Who are we?
            </p>
            <h2 className="mb-[10px] font-extrabold text-5xl text-gray sm:leading-none md:leading-none lg:leading-[1.10] 800 lg">
            A team committed and passionate about Digital Sobriety
            </h2>
            <p className="max-w-full text-gray-600 mb-[50px] sm:text-lg md:text-xl lg:text-base md:leading-7 lg:leading-8 sm:leading-6 ">
            We are committed to finding innovative and simple solutions for our customers in order to simplify their efforts to give a second life to IT equipment.
            </p>
            <img src="/aboutPic1.jpg" alt="" className='lg:hidden lg:w-[540px] lg:h-[395px] shadow-[0_13px_29px_#14142b36] rounded-[2rem]'/>
            <img src="/aboutPic2.jpg" alt="" className='hidden lg:block lg:w-[430px] lg:h-[385px] shadow-[0_13px_29px_#14142b36] rounded-[2rem]'/>

          </div>
          <div className="hidden right lg:flex flex-col w-full">
            <img src="/aboutPic1.jpg" alt="" className='lg:w-[540px] lg:h-[395px] shadow-[0_13px_29px_#14142b36] rounded-[2rem]'/>
            <img src="/aboutPic3.webp" alt="" className='lg:w-[660px] lg:h-[350px] lg:top-[435px] lg:right-0 lg:absolute shadow-[0_13px_29px_#14142b36] rounded-[2rem]'/>
          </div>
        </div>
    </div>
  )
}
