import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/Constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 
    mt-5 border-t border-grey-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between
      gap-5 sm:px-16 px-6 py-10'>
        <div className='f;ex f;ex-cpl justify-start items-start
        gap-6'>
          <Image src="/logo.svg" alt="logo" width={118} height={18} 
          className='object-contain'/>
          <p className="text-base text-gray-700 mt-2"> Made with 💕 by Yash &copy;</p>
        </div>
        <div className='footer__links'>
        {footerLinks.map((link) => (
          <div key={link.title} className='footer__link'>
            <h3 className='font-bold'>{link.title}</h3>
            {link.links.map((item)=>(
              <Link 
              key={item.title}
              href={item.url} 
              className='text-gray-500'>
                              {item.title}
                </Link>
              
            ))}
          </div>
        ))}
        </div>
        
      </div>
        <div className='flex justify-between
        items-center flex-wrap mt-10 border-t border-t-gray-100 sm:px-16 px-6 py10'>
          <p className='text-sm text-gray-500'>
            &copy; 2024 Cars. All rights reserved.
          </p>
          <div className="footer__copyrights-link">
            <Link href="/" className='text-gray-500'>
            Privacy Policy</Link>
            <Link href="/" className='text-gray-500'>
            Terms Of use</Link>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer
