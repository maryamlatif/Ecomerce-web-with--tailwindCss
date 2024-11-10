
import Image from 'next/image';
import React from 'react';
import Wrapper from './Wrapper';

const categories = [
  {
    title: "Natural Plants",
    imageUrl: "/a1.png", 
    description: "",
  },
  {
    title: "Plant Accessories",
    imageUrl: "/a2.png",
    description: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Artificial Plants",
    imageUrl: "/a3.png",
    description: "",
  },
];

const CategoriesSection = () => {
  return ( <Wrapper>
    <div className="bg-gray-200 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center">
        {categories.map((category, index) => (
          <div key={index} className="bg-slate-200 rounded-lg overflow-hidden shadow-lg w-full md:w-1/3">
            <Image src={category.imageUrl} alt={category.title} width={0} height={0}
            className="w-full max-h-90  " />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              {category.description && <p className="text-gray-500 mt-2">{category.description}</p>}
              {index === 1 && ( 
                <button className="mt-4 md:hidden bg-white text-black px-4 py-2  hover:bg-gray-400 transition">
                  Explore →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Wrapper>
  );
};

export default CategoriesSection;



