'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import LogoMarquee from './logo-marquee';

const Launch = () => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (!query.trim()) return;
        console.log("Arama yapılıyor:", query);

        // Buraya arama yönlendirme / filtreleme / API isteği eklersin
        // router.push(`/search?q=${query}`)
    };

    return (
        <div>
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl pt-32 pb-32 sm:py-48 lg:pt-48 lg:pb-40">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-brand sm:text-8xl">
                            Tarzına göre seç!
                        </h1>
                        <p className="mt-5 text-pretty text-base font-medium text-gray-400 sm:text-lg/7">
                            Binlerce giyim markası ve ürün arasından sana en uygun olanı keşfet. Tarzla ile alışverişini daha akıllı, kişisel ve zahmetsiz hale getir.
                        </p>

                        <div className="mt-8 flex gap-x-4">
                            <div className="relative w-full">

                                {/* Search icon */}
                                <MagnifyingGlassIcon
                                    className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                                />

                                {/* Input */}
                                <input
                                    placeholder="Kıyafet, marka veya kategori ara…"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="block w-full rounded-lg bg-white pl-10 pr-12 px-3.5 py-3 text-base text-brand 
                                               border border-[#E5E5E5] placeholder:text-gray-400 
                                               focus:border-indigo-500 focus:ring-0"
                                />

                                {/* Search button */}
                                <button
                                onClick={handleSearch}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-0 mr-1 bg-transparent border-none"
                                >
                                    <ArrowRightIcon className="w-5 h-5 text-gray-400 hover:text-brand transition" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <LogoMarquee />
        </div>
    );
}

export default Launch;