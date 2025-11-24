'use client'

import React from 'react';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { HeartIcon } from '@heroicons/react/24/solid'
import HM from '../../../assets/svgs/hm.svg'
import PBear from '../../../assets/svgs/pull-bear.svg'
import Avva from '../../../assets/svgs/avva.svg'
import Mavi from '../../../assets/svgs/mavi.svg'

const products = [
  {
    id: 1,
    name: 'Çift kollu Santa Monica tişört',
    href: '#',
    imageSrc: 'https://image.hm.com/assets/hm/88/18/8818f65c129f64d50d9679bd8458567705eede91.jpg?imwidth=2160',
    hoverImageSrc: 'https://image.hm.com/assets/hm/c1/79/c179dc8a116ffc9f45c9fce5079b3da3f9e01ee9.jpg?imwidth=2160',
    brandSrc: HM,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '1.190,00 ₺',
    discount: '',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Gri suni deri ceket',
    href: '#',
    imageSrc: 'https://static.pullandbear.net/assets/public/931c/3d7e/2739431d897f/9c5ab3e30eeb/07700517802-A6M/07700517802-A6M.jpg?ts=1754260127491&w=1030&f=auto',
    hoverImageSrc: 'https://static.pullandbear.net/assets/public/1eb8/fc33/3fbe4ad2b05d/5628b3a14c04/07700517802-M/07700517802-M.jpg?ts=1761302891446&w=1030&f=auto',
    brandSrc: PBear,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2.490,00 ₺',
    discount: '1.190,00 ₺',
    color: 'Black',
  },  {
    id: 3,
    name: 'Beyaz Klasik Yaka Pamuklu Jersey Gömlek Ceket',
    href: '#',
    imageSrc: 'https://static.ticimax.cloud/4183/uploads/urunresimleri/buyuk/beyaz-klasik-yaka-diyagonel-cift-cep-k-1b-d38.jpg',
    hoverImageSrc: 'https://static.ticimax.cloud/4183/uploads/urunresimleri/buyuk/beyaz-klasik-yaka-diyagonel-cift-cep-k-ce6f7e.jpg',
    brandSrc: Avva,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2.998,99 ₺',
    discount: '',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Paloma Haki Gabardin Pantolon',
    href: '#',
    imageSrc: 'https://sky-static.mavi.com/mnresize/820/1162/1010114-91195_image_1.jpg',
    hoverImageSrc: 'https://sky-static.mavi.com/mnresize/820/1162/1010114-91195_image_5.jpg',
    brandSrc: Mavi,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '1.399,00 ₺',
    discount: '',
    color: 'Black',
  }
]

export default function Example() {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="mx-auto pb-16 sm:pb-24 lg:max-w-8xl">
        <div className="mt-6 mx-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <a href="">
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
                {/* <div className="absolute bottom-[68px] left-3">
                  <img
                    src={product.brandSrc}
                    alt="brand"
                    className="h-5 w-auto object-contain"
                  />
                </div> */}
                {/* <button
                    className="bg-transparent p-0 absolute top-4 right-4"
                  >
                    <HeartIcon
                      className="h-4 w-4 brand-color"
                    />
                </button> */}
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
                        <span aria-hidden="true"/>
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
          ))}
        </div>
      </div>
    </div>
  )
}