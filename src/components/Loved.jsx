import React from 'react'

function Loved() {
  return (
    <section className='py-20 bg-[#F8FAFC]'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='text-5xl font-semibold mb-7 mt-15 text-[#0F172A] text-center'>Loved by businesses worldwide.</h2>
        <p className='text-xl text-[#334155] mb-20 text-center'>Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>

        <div className='grid lg:grid-cols-3 text-[#334155]'>
          <div className='  rounded-2xl px-5 py-6 w-[400px] h-[230px]  shadow-xl shadow-slate-900/10 inset-shadow'>
            <p className='text-xl pb-5'>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
            <hr />
            <div className='flex justify-between pt-5 mb-5'>
              <div>
              <h4 className='font-semibold text-xl'>Sheryl Berge</h4>
              <h5>CEO at Lynch LLC</h5>
              </div>
              <img className='rounded-[50%] w-[60px]' src="https://taxpal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75" alt="" />
            </div>

          </div>

        </div>

      </div>
      
    </section>
  )
}

export default Loved
