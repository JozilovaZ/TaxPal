import React from 'react'
import h from "../assets/hhh.png"

function Headers() {
  return (
    <section className='bg-[#FFFFFF]'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-between mt-10'>
          <div className=' flex items-center gap-10'>
            <img src={h} alt="" />
            <div className='flex items-center gap-10 text-xl'>
              <a href="">Features</a>
              <a href="">Testimonials</a>
              <a href="">Pricing</a>

            </div>
          </div>
          <div className='flex items-center gap-10 py-3 text-xl'>
            <h4>Sign in</h4>
            <button className='bg-[#3B82F6] px-3 py-3 text-white roinded-4xl'>Get started today</button>

          </div>

        </div>

        <div className='text-center flex flex-col items-center mt-30'>
          <h1 className='text-7xl font-semibold'>Accounting <span className='text-[#2563EB]'> made simple</span> <br /> for small businesses.</h1>
          <p className='text-2xl mt-10 mb-10'>Most bookkeeping software is accurate, but hard to use. We make the <br /> opposite trade-off, and hope you don’t get audited.</p>

        </div>

        <div className='flex gap-5'>
          <button className='bg-[#334155] px-5 py-3 text-white font-semibold rounded-4xl'>Get 6 months free</button>
          <button className='px-5 py-3 font-semibold rounded-4xl border-1'>Watch video</button>

        </div>


        <div className='mt-50 mb-20'>
          <p className='text-center text-xl'>Trusted by these six companies so far</p>

          <div className='flex justify-center gap-10'>
            <img src="https://taxpal.vercel.app/_next/static/media/transistor.7274e6c3.svg" alt="" />
            <img src="https://taxpal.vercel.app/_next/static/media/tuple.74eb0ae0.svg" alt="" />
            <img src="https://taxpal.vercel.app/_next/static/media/statickit.d7937794.svg" alt="" />
            <img src="https://taxpal.vercel.app/_next/static/media/mirage.18d2ec4e.svg" alt="" />
            <img src="https://taxpal.vercel.app/_next/static/media/laravel.7deed17e.svg" alt="" />
            <img src="https://taxpal.vercel.app/_next/static/media/statamic.6da5ebfb.svg" alt="" />

          </div>

        </div>

      </div>
      
    </section>
  )
}

export default Headers
