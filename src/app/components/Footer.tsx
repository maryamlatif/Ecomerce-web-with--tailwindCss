import React from 'react'

import { TiSocialTwitterCircular } from "react-icons/ti";

import { PiFacebookLogoBold } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import Wrapper from './Wrapper';



export default function Footer() {
  return (
         <Wrapper>  
      <footer className='text-gray-700 bg-[#d2e3df] py-8 '>
            <div className='container mx-auto px-6 text-center flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-6'>
                <h1 className='text-2xl font-bold'>GreenMind </h1>
                <p className='text-gray-600'>We help you find your dream plant</p>
                <div className="flex justify-center space-x-4 mt-4 text-3xl text-gray-500">
                <a href="#"><PiFacebookLogoBold className='hover:text-gray-900 mt-4 font-bold'/></a>
                <a href="#"><RiInstagramFill className ='hover:text-gray-900 mt-4'/></a>
                <a href="#"><TiSocialTwitterCircular className = 'hover:text-gray-900 mt-4'/></a>
</div>
   <div className="mt-8 text-gray-600 text-sm ">
    <p>
          2023 all Right Reserved Term of use GREENMIND</p>
        </div></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
    <h4 className='text-xl font-semibold mb-5'>Information</h4 >
    <ul className='space-y-4 mt-2'>
        <li>About</li>
        <li>Product</li>
        <li>Blog</li>
      
    </ul>
</div>


<div>
    <h4  className='text-xl font-semibold mb-5'>Company</h4>
    <ul className='space-y-4 mt-2'>
        <li>Community</li>
        <li>Career</li>
        <li>Our story</li>
      
    </ul>
</div>



<div>
    <h4  className='text-xl font-semibold mb-5'>Contact</h4>
    <ul className='space-y-4 mt-2'>
        <li>Getting Start</li>
        <li>Pricing</li>
        <li>Resources</li>
      
    </ul>
</div></div>
            </div>
         
        </footer>
      
        </Wrapper>
  )
}
