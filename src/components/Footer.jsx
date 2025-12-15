import React from 'react'
import logo from '../assets/header.png';

function Footer() {
  return (
    <footer className='py-20 bg-[#F8F9FD]'>
      <div className='mx-auto max-w-7xl'>
        <div>
         <h1 className='text-4xl text-[#0F172B] font-semibold'> Frequently asked questions</h1>
         <p className='mt-5 text-[#31445D] text-[18px]'>If you can’t find what you’re looking for, email our support team and if you’re <br />lucky someone will get back to you.</p>
        </div>

        <div className='flex gap-10 mt-15'>
      
          <div>
            
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> Does TaxPal handle VAT?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>Well no, but if you move your company offshore you can probably ignore it.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> Frequently asked questions</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> Can I pay for my subscription via purchase order?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>Absolutely, we are happy to take your money in all forms.</p>
        </div>
          </div>
          <div>
            
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'>What was that testimonial about tax fraud all about?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>TaxPal is just a software application, ultimately your books are your responsibility.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> TaxPal sounds horrible but why do I still feel compelled to purchase?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> I found other companies called TaxPal, are you sure you can use this name?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.</p>
        </div>
          </div>
          <div>
            
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> How do you generate reports?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> Can we expect more inventory features?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>In life it’s really better to never expect anything at all.</p>
        </div>
         <div>
         <h1 className='text-xl text-[#0F172B] font-semibold mt-3'> I lost my password, how do I get into my account?</h1>
         <p className='mt-5 text-[#31445D] text-[15px]'>Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.</p>
        </div>
          </div>



        </div>
        
          <div className='mt-50 ml-120 mb-20' >

            <img className='ml-13 mb-5' src={logo} alt="" />
           <div className='flex gap-10 text-[#31445D] '>
             <a  href="">Features</a>
            <a href="">Testimonials</a>
            <a href="">Pricing</a>
           </div>
          </div>

          <hr className='bg-[#31445D]'/>
          

          <div className='text-[#314158] mt-10 flex justify-between'>
            <p>Copyright © 2025 TaxPal. All rights reserved.</p>
            <div className='flex gap-5 text-xl'>
              <i class="fa-solid fa-x"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>

      </div>
    </footer>
  )
}

export default Footer

