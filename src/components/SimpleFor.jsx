import React from 'react'

function SimpleFor() {
  return (
    <section className='py-20 bg-[#0F172B] text-white'>

      <div className='mx-auto max-w-7xl'>

        <h1 className='text-5xl text-center font-semibold '>Simple pricing, for everyone.</h1>
        <p className='text-center mt-5 text-xl text-[#909EB4]'>It doesn’t matter what size your business is, our software won’t work well for you.</p>
     
      <div className='flex mt-20 gap-10'>
     {/* 1-cart */}
     <div className='rounded-3xl h-130 p-5'>
        <h1 className='text-4xl font-bold'>$9</h1>
        <h2 className='mt-8 text-xl font-bold'>Starter</h2>
        <p className='mt-4 text-[#909EB4]'>Good for anyone who is self-employed and <br /> just getting started.</p>
        <button className='mt-7 border-2 border-[#909EB4] rounded-3xl w-80 h-10  text-center'>Get started</button>
       <div className='mt-7 '>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Send 10 quotes and invoices</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Connect up to 2 bank accounts</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Track up to 15 expenses per month</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Manual payroll support</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Export up to 3 reports</span></div>
       </div>

     </div>
     {/* 2-cart */}
     <div className='bg-[#155DFC] rounded-3xl h-140 p-5'>
        <h1 className='text-4xl font-bold'>$9</h1>
        <h2 className='mt-8 text-xl font-bold'>Starter</h2>
        <p className='mt-4 '>Good for anyone who is self-employed and <br /> just getting started.</p>
        <button className='mt-7  bg-white rounded-3xl w-80 h-10  text-center text-[#0F172B]'>Get started</button>
       <div className='mt-7 '>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Send 10 quotes and invoices</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Connect up to 2 bank accounts</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Track up to 15 expenses per month</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Manual payroll support</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Export up to 3 reports</span></div>
       </div>

     </div>
     {/* 3-cart */}
     <div className='rounded-3xl h-130 p-5'>
        <h1 className='text-4xl font-bold'>$9</h1>
        <h2 className='mt-8 text-xl font-bold'>Starter</h2>
        <p className='mt-4 text-[#909EB4]'>Good for anyone who is self-employed and <br /> just getting started.</p>
        <button className='mt-7 border-2 border-[#909EB4] rounded-3xl w-80 h-10  text-center'>Get started</button>
       <div className='mt-7 '>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Send 10 quotes and invoices</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Connect up to 2 bank accounts</span><br /></div>
         <div className='mt-4 mr-3'><i class="fa-regular fa-circle-check"></i> <span>Track up to 15 expenses per month</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Manual payroll support</span><br /></div>
        <div className='mt-4 mr-3'> <i class="fa-regular fa-circle-check"></i> <span>Export up to 3 reports</span></div>
       </div>

     </div>



      </div>

      </div>
      
    </section>
  )
}

export default SimpleFor
