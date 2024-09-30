import OurStory from '@/components/OurStory'
import WhoAreWe from '@/components/WhoAreWe'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <div className="md:px-10 mt-40 lg:px-10 max-w-full">
      <div className="mx-auto px-8 md:px-0 lg:py-0 lg:px-[72px] sm:max-w-xl md:max-w-full lg:max-w-7xl">
        <WhoAreWe />
        <OurStory />
      </div>
    </div>
    <Footer />
    </>
  )
}
