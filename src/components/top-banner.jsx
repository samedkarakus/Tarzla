import React from 'react';

const TopBanner = () => {
  return (
    <div className="hidden sm:flex h-12 w-full mx-0 bg-gradient-to-r from-[#D8EDEA] to-[#D9EFD9] flex items-center justify-center px-4 sm:px-12 md:px-24">
        <div className="flex items-center gap-4">
            <h1 className="text-base/4 font-medium text-brand text-center">
              En iyi fırsatlar ve indirimli ürünler için markaların sitelerine göz atın.
            </h1>
        </div>
    </div>
  );
};

export default TopBanner;