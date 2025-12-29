'use client'

import React, { useState } from 'react'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import products from '../../../data/all-product-data.js'

import zara from '../../../assets/brand-logos/zara.svg'
import pullBear from '../../../assets/brand-logos/pull-bear.svg'
import hm from '../../../assets/brand-logos/hm.svg'
import mavi from '../../../assets/brand-logos/mavi.svg'

const brandLogos = {
  zara,
  pullBear,
  hm,
  mavi
}

function normalizeImageSrc(imageSrc) {
  if (!imageSrc) return ""
  let cleaned = imageSrc.split('\n')[0].trim()
  if (cleaned.startsWith('//')) cleaned = 'https:' + cleaned
  return cleaned
}

export default function ProductGrid({ onSelectProduct }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (href) => {
    setFavorites(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    )
  }

  return (
    <div className="bg-[#FDFDFD]">
      <div className="mx-auto pb-16 sm:pb-24 lg:max-w-8xl">
        <div className="mt-6 mx-12 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => {
            const BrandLogo = brandLogos[product.brand]

            return (
              <div key={index} className="group relative">

                {/* Ürün detayına git */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="relative w-full aspect-[3/4] overflow-hidden p-0 m-0 border-0 rounded-none outline-none ring-0 focus:outline-none focus:ring-0"
                >
                  <img
                    src={normalizeImageSrc(product.imageSrc)}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover block"
                  />
                </button>

                <div className="mt-2">
                  {BrandLogo && (
                    <img
                      src={BrandLogo}
                      alt={product.brand}
                      className="h-4 mb-2 max-w-[75px]"
                    />
                  )}

                  <div className="flex justify-between items-start">
                    <div className="w-[85%]">
                      <h3 className="text-sm uppercase truncate text-brand">
                        {product.name}
                      </h3>
                      <p className="text-sm text-brand">
                        {product.price}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(product.href)
                      }}
                      className="
                        p-1
                        mr-[12px]
                        bg-transparent
                        border-0
                        rounded-none
                        outline-none
                        ring-0
                        focus:outline-none
                        focus:ring-0
                        hover:bg-transparent
                        active:bg-transparent
                      "
                    >
                      {favorites.includes(product.href) ? (
                        <HeartSolid
                          className="w-4 h-4 text-red-500"
                        />
                      ) : (
                        <HeartOutline
                          className="
                            w-4 h-4
                            text-red-500
                            stroke-red-500
                            hover:stroke-red-500
                          "
                        />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}