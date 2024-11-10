import React from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'

export default function Hero() {
  return ( <Wrapper>
    <div className="py-24 px-5 flex justify-start gap-16 space-x-9">
    <section className='px-4'>
        <h1 className="text-lg font-extrabold ml-4">Best Selling Price</h1>
        <p className="text-gray-600 p-4 sm:text-center ">Easiest way to a healthy life by buying your favorite plants</p>
        <button className="bg-blue-200 rounded-sm px-3 py-2 ml-4">See More →</button>
      </section>

      <section className="flex justify-between w-full ml-5 gap-9">
    
        <div className="flex flex-col items-center">
          <Image
            src="/Frame 9.png"
            alt="Natural plants"
            width={250}
            height={300}
          />
          <span className="text-center mt-2">
            Natural Plant <br />
            <ins>₱ 1,400.00</ins>
          </span>
        </div>

       
        <div className="flex flex-col items-center">
          <Image
            src="/Frame 8.png"
            alt="Artificial plants"
            width={250}
            height={300}
          />
          <span className="text-center mt-2">
            Artificial Plant <br />
         <ins>₱ 900.00</ins>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/7.png"
            alt="Artificial plants"
            width={250}
            height={300}
          />
          <span className="text-center mt-2">
            Artificial Plant <br />
          <ins>₱ 3,500.00</ins>
          </span>
        </div>
      </section>
    </div>
    </Wrapper>
  )
}
