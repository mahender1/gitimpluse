import React from 'react';

const HomeCategories = () => {
  const categories = [
    { name: 'Cardio', image: './c1.png' },
    { name: 'Selectorized', image: './c2.png' },
    { name: 'Plate Loaded', image: './c3.png' },
    { name: 'Functional', image: './c4.png' },
  ];

  return (
    <div className="bg-black py-6">
      <div className="container mx-auto px-4 py-12 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="relative group text-center flex flex-col">
              {/* First and third items: Button first */}
              {(index % 2 === 0) ? (
                <>
                  <button className="w-40 m-auto border-1 border-[#A1A1A1] hover:border-[#9A9898] py-3 px-4 mb-2 font-semibold tracking-wide text-white hover:text-[#E52713] hover:bg-[#333] border rounded-md transition-all duration-300 z-10 relative uppercase">
                    {category.name}
                  </button>
                  <div className="h-28 w-[1px] mx-auto mb-4 group-hover:border-[#A1A1A1] border-dashed border-r border-[#A1A1A1] transition-all duration-300"></div>
                  <div className="relative p-1">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full rounded-lg transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Second and fourth items: Image first */}
                  <div className="relative p-1 mb-4">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full rounded-lg transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="h-28 w-[1px] mx-auto mb-4 group-hover:border-[#A1A1A1] border-dashed border-r border-[#A1A1A1] transition-all duration-300"></div>
                  <button className="w-40 m-auto border-1 border-[#A1A1A1] hover:border-[#9A9898] py-3 px-4 font-semibold tracking-wide text-white hover:text-[#E52713] hover:bg-[#333] border rounded-md transition-all duration-300 z-10 relative uppercase">
                    {category.name}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;