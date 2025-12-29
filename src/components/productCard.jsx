'use client'

import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      <a href={product.href}>
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-[530px]"
        />
        <img
          alt={product.imageAlt}
          src={product.hoverImageSrc}
          className="absolute inset-0 aspect-square w-full bg-gray-200 object-cover lg:aspect-auto lg:h-[530px] opacity-0 group-hover:opacity-100"
        />
      </a>

      <div className="mt-2 mx-2 space-y-3 flex-row justify-between">
        <div className='flex justify-between items-start'>
          <div className='w-full'>
            <img
              src={product.brandSrc}
              alt="brand"
              className="h-5 w-auto object-contain mb-1"
            />
            <h3 className="text-base">
              <a href={product.href} className='text-brand text-sm uppercase truncate whitespace-nowrap overflow-hidden block'>
                {product.name}
              </a>
            </h3>
            <p className="text-sm font-bold text-brand">
              {product.discount ? (
                <span className="flex">
                  <span className="text-gray-400 line-through text-sm">
                    {product.price}
                  </span>
                  <span className="ml-1 discount-price-color font-bold text-sm">
                    {product.discount}
                  </span>
                </span>
              ) : (
                <span className="text-brand font-bold text-sm">{product.price}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}