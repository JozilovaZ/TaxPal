import React from 'react'
import headers from "../assets/header.png"

function Header() {
  return (
    <main className='bg-[#FFFFFF]'>
      <div className='mx-auto max-w-7xl'>
       <div className='flex justify-between mt-10 '>
       <div className='flex items-center gap-10'>
          <img src={headers} alt="" />
          <div className='flex gap-10 text-xl'>
            <a href="#">Features</a>
            <a href="#">Testimonials</a>
            <a href="#">Pricing</a>
          </div>
        </div>

        <div className='flex items-center gap-10 text-xl  '>
          <h4>Sign in</h4>
          <button className='bg-[#2B7FFF] px-3 py-3 text-white rounded-4xl'>Get staeted today</button>
        </div>
       </div>


      <div className='text-center flex flex-col items-center mt-30'>
        <h1 className='text-7xl font-semibold'>Accounting <span className='text-[#155DFC]'> made simple </span> <br /> for small businesses.</h1>
        <p className='text-2xl  mt-10 mb-10'>Most bookkeeping software is accurate, but hard to use. We make the opposite <br /> trade-off, and hope you don’t get audited.</p>
        <div  className='flex gap-5'>
          <button className='bg-[#0F172B] px-5 py-3 text-white font-semibold rounded-4xl'>Get 6 months free</button>
          <button  className=' px-5 py-3 font-semibold rounded-4xl  border-1 border-[#E2E2E9]'>Watch video</button>
        </div>
      </div>

      <div className='mt-50 mb-20'>
        <p className='text-center text-xl'>Trusted by these six companies so far</p>
        <div className='flex justify-center gap-10 '>
          <img src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg" alt="" />
          <img src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg" alt="" />
          <img src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg" alt="" />
          <img src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg" alt="" />
          <img src="https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg" alt="" />
          <img src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg" alt="" />
        </div>
      </div>




      </div>
      
    </main>
  )
}

export default Header
