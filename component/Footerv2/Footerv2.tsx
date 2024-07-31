import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '../../src/utils/svg.js';

const Footerv2 = () => {
  return (
    <>
    <section className='bg-[#069] w-full mt-10'>
        <div className='max-w-[980px] w-full mx-auto'>
           {/* footer top */}
            <div className='flex flex-col p-5 md:flex-row py-[50px] gap-5 md:gap-[50px] lg:gap-[100px] text-sm'>
                <div className='flex flex-col gap-5 p-[30px] bg-[#005585] max-w-[620px] w-full box-border'>
                    {/* get free advice */}
                    <div className='text-white'>
                        <h3 className='text-paralarge mb-[6px] font-bold'>Get free advice and guidance</h3>
                        <p>We've taken the best advice from all our advisors and crammed it into a weekly newsletter that gives you the right advice when you really need it.</p>
                    </div>
                    {/* footer email */}
                    <div className='flex flex-col gap-5 '>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='placeholder-[#464646] border-none rounded w-full box-border py-5 px-[25px]'/>
                        <div className='flex gap-[10px]'>
                        <input type="checkbox" id="terms"
            className="w-[35px] h-5 border-[#a2a2a2] rounded-sm"
            
          />
          <label htmlFor="terms" className="text-white">
          I confirm I am over 16 and I agree to the Hotcourses  <a className='underline'>Terms and Conditions</a> & <a className='underline'>Privacy Notice</a> . I also agree to join the Hotcourses community.
          </label>
                        </div>
                        <div className='flex justify-end mb-[5px]'>
                        <button className='rounded-[5px] py-3 px-[30px] bg-[#AA5D00] uppercase text-white font-semibold w-fit'>Send me free advice</button>
                        </div>
                        
                    </div>
                </div>
                {/* useful links */}
                <div className='flex flex-col  text-white gap-4 '>
                        <div>
                            <h3 className='mb-5 text-paralarge font-bold '>Useful links</h3>
                            <div className='flex flex-col gap-3'>
                                <Link href={"/"}>Privacy policy</Link>
                                <Link href={"/"}>Cookies</Link>
                                <Link href={"/"}>Manage Cookies</Link>
                                <Link href={"/"}>Terms and Conditions</Link>
                                <Link href={"/"}>Sitemap</Link>
                                <Link href={"/"}>Hotcourses Abroad</Link>
                                <Link href={"/"}>IDP Connect</Link>
                                
                            </div>    
                        </div>
                        <div >
                                <h3 className='text-paralarge font-bold mb-2'>Follow us</h3>
                                <div className='flex gap-3 items-center'>
                                <Link href={"/"} aria-label='facebook'> { icons.facebook('w-[30px] h-[30px]') }</Link>
                                <Link href={"/"} aria-label='twitter'> { icons.twitter('w-[30px] h-[30px]') }</Link>
                                <Link href={"/"} aria-label='insta'> { icons.insta('w-[30px] h-[30px]') }</Link>
                                <Link href={"/"} aria-label='youtube' > { icons.youtube('w-[30px] h-[30px]') }</Link>
                                </div>
                               
                            </div>
                </div>
            </div>
            </div>
            {/* border line */}
            <div className='border border-[#48a1bf] w-full'>

            </div>
            {/* footer below */}
            <div className='max-w-[980px] w-full mx-auto'>
                <div className='py-[25px] px-5 lg:px-0 flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-white'>
                        <div className='text-xs flex items-center gap-2'>
                        { icons.global('w-[20px] h-[20px]') }
                            <p>English</p> </div>
                        <p className='text-xs italic'>© 2024 IDP Connect Limited. All rights reserved.</p>
                        <Link href={"/"}>
                        <Image src={"idpconnect_whitelogo.svg"} alt='idpconnect' width={130} height={25}/>
                        </Link>
                </div>
            </div>
  

    </section>
    </>
  )
}

export default Footerv2