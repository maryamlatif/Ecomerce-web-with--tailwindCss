import React from 'react';
import { RiPlantLine } from "react-icons/ri";
import { HiOutlineCube } from "react-icons/hi2";
import { FiPhoneOutgoing } from "react-icons/fi";
import Wrapper from './components/Wrapper';

export default function About() {
  return (
    <Wrapper>
      <section className='bg-white py-12 px-4 md:px-9 border-t border-b border-gray-200'>
        
        <h1 className='text-black font-bold text-3xl md:text-4xl mb-2 text-center'>
          About Us
        </h1>
        <p className='text-gray-500 mb-10 text-center text-base md:text-lg'>
          Order now and appreciate the beauty of nature
        </p>
          
        <div className='flex flex-col md:flex-row justify-around mt-7 items-center space-y-8 md:space-y-0'>
          <div className='text-center max-w-xs'>
            <div className='bg-blue-100 rounded-full p-3 mb-2 inline-block'>
              <RiPlantLine className='text-black text-3xl md:text-4xl' />
            </div>
            <h2 className='font-semibold text-lg'>Large Assortment</h2>
            <p className='text-gray-500'>
              We offer many different types of products with fewer variations in each category.
            </p>
          </div>

          <div className='text-center max-w-xs'>
            <div className='bg-blue-100 rounded-full p-3 mb-2 inline-block'>
              <HiOutlineCube className='text-black text-3xl md:text-4xl' />
            </div>
            <h2 className='font-semibold text-lg'>Fast & Free Shipping</h2>
            <p className='text-gray-500'>
              4-day or less delivery time, free shipping, and an expedited delivery option.
            </p>
          </div>

          <div className='text-center max-w-xs'>
            <div className='bg-blue-100 rounded-full p-3 mb-2 inline-block'>
              <FiPhoneOutgoing className='text-black text-3xl md:text-4xl' />
            </div>
            <h2 className='font-semibold text-lg'>24/7 Support</h2>
            <p className='text-gray-500'>
              Answers to any business-related inquiry 24/7 and in real-time.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
