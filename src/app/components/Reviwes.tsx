import React from 'react';
import Image from 'next/image';
import Wrapper from './Wrapper';

export default function Reviwes() {
  return (
    <Wrapper>
    <div className='flex flex-col items-center py-28 px-9'>
      
 
      <h1 className='font-bold mt-1 mb-10 '>
        What customers say about GREEMIND?
      </h1>
      
      <div className='flex justify-around container space-x-8'>

      
        <section className='bg-blue-200 p-6 rounded-md max-w-xl'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus cum architecto itaque impedit facilis sint dicta rerum reprehenderit, adipisci recusandae corporis tempore accusamus molestiae omnis quos, eum modi natus ipsa eos officia sed praesentium voluptas?
          </p>
          <div className='flex items-center mt-4'>
            <Image 
              src="/boy.png"
              alt='Pic'
              height={50}
              width={100}
            />
            <div className='ml-4'>
              <span>John Doe</span><br />
              <ins>Youtuber</ins>
              
            </div>
          </div>
        </section>

        
        <section className='bg-blue-200 p-6 rounded-md max-w-xl'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti eum molestiae dolores, voluptatum aliquid reiciendis rem explicabo amet recusandae vel et facilis quo aperiam itaque libero exercitationem expedita minus!
          </p>
          <div className='flex items-center mt-4'>
            <Image 
              src="/girl.png"
              alt='Pic'
              height={50}
              width={100}
            />
            <div className='ml-4'>
              <span>Jane Doe</span><br />
              <ins>Youtuber</ins>
            </div>
          </div>
        </section>

      </div>
    </div>
    </Wrapper>
  );
}



