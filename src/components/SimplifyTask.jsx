import React from 'react'
import { useState } from 'react'

const simples=[
  {
    id:1,
    icon:<i className="fa-solid fa-chart-line text-blue-600 text-4xl mb-4"></i>,
    title:"Reporting",
    title_big:"Stay on top of things with always up-to-date reporting feature",
    dicription:"We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    image:"https://taxpal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1080&q=75"
  },

  {
    id:2,
    icon: <i className="fa-solid fa-boxes-stacked text-[#62748E] text-4xl mb-4"></i>,
    title:"Inventory",
    title_big:"Never lose track of what’s in stock with accurate inventory tracking.",
    dicription:"We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure",
    image:"https://taxpal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&w=1080&q=75"
  },

  {
    id:3,
    icon:<i className="fa-solid fa-user text-[#62748E] text-4xl mb-4"></i>,
    title:"Contacts",
    title_big:"Organize all of your contacts, service providers, and invoices",
    dicription:"This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
    image:"https://taxpal.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&w=1080&q=75"
  }
]



function SimplifyTask() {
  const [active, setactive]=useState(simples[0])
  return (
    <section className='py-30 bg-[#FFFFFF]'>
      <div className='mx-auto max-w-7xl'>
      <div className='text-center'>
       <h2 className='text-5xl font-semibold mt-10'>Simplify everyday business tasks.</h2>
       <p className='text-xl mt-10'>Because you’d probably be a little confused if we suggested you complicate your <br /> everyday business tasks instead.</p>
       </div>

        <div className='grid md:grid-cols-3 gap-15 mt-20'>
        {simples.map((simple=>(
          <button className='' key={simple.id} onClick={()=>setactive(simple)} >
            <div className='hover:text-[#7386e8]'>{simple.icon}</div>
            <h5 className='text-[#62748E] hover:text-[#0069A8] text-xl pb-5'>{simple.title}</h5>
            <h6 className='text-2xl pb-5'>{simple.title_big}</h6>
            <p className='text-[#62748E] text-base'>{simple.dicription}</p>

          </button>
        )))} 

      

       </div>

        <div className='mt-20 border-1 w-full h-120 rounded-2xl bg-[#E2E8F0] border-[#E2E8F0]'>
          <img src={active.image} alt="" className='rounded-2xl border-1 w-250 h-100 mt-10 ml-30 border-[#D8DFE8]'   />

        </div>
       

      </div>
      
    </section>
  )
}

export default SimplifyTask
