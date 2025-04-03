"use client"

import React from 'react'
import OrderTab from '@/components/OrderTab'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Orders = () => {
  return (
    <>
    <Header/>
    <div className="xl:w-[1280px] lg:w-[1080px] md:w-[786px] sm:w-[600px] sm:mx-auto mx-2 sm:mt-20 mt-10">
<h1 className='text-[40px] font-[600] text-center'>
    My Orders
</h1>
<OrderTab/>
    </div>
<Footer/>
    </>
  )
}

export default Orders