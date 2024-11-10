import React from 'react'
import Wrapper from './components/Wrapper'
import Image from 'next/image'

export default function Cart() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center bg-[#d2e3df] p-6 rounded-lg lg:flex-row lg:justify-between lg:p-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Buy your <br /> dream plants
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 lg:justify-start">
            <div>
              <p className="text-lg font-medium">50+</p>
              <p className="text-gray-600">Plant Species</p>
            </div>
            <span className="border-l border-gray-400 h-6 mx-2" />
            <div>
              <p className="text-lg font-medium">100+</p>
              <p className="text-gray-600">Customers</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded-full shadow-lg max-w-xs mx-auto lg:max-w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none px-4 py-2 text-gray-700 flex-grow rounded-l-full"
            />
            <button className="p-2 bg-gray-200 rounded-full">
              🔍
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 flex justify-center lg:block">
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
            <img
              src="/hand.png" 
              alt="Plant"
              className="object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
