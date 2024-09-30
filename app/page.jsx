import Hero from '@/components/Hero'
import Commitments from '@/components/Commitments'
import OurProductsSection from '@/components/OurProductsSection'
import WhyUs from '@/components/WhyUs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex mt-40 flex-col justify-center items-center'>
      <Hero />
      <Commitments />
      <OurProductsSection />
      <WhyUs />
    </div>
    <Footer/>
    </>
  )
}
