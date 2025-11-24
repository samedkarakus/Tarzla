import React from 'react';
import AppStore from '../Footer/App_store.svg'
import { InstagramLogo, LinkedinLogo } from "phosphor-react";

const footerLinks = {
  kategoriler: [
    "Erkek Giyim",
    "Kadın Giyim",
    "Ayakkabı",
    "Aksesuar",
    "Spor & Outdoor",
    "Çanta",
  ],
  markaKesfet: [
    "Popüler Markalar",
    "Yeni Gelenler",
    "Trend Ürünler",
    "Kampanyalar",
    "Outlet",
  ],
  destek: [
    "Hakkımızda",
    "İletişim",
    "Gizlilik Politikası",
    "KVKK",
    "Sık Sorulan Sorular",
  ],
};

const Footer = () => {
    return (
        <div>
            <footer class="bg-white">
                <div class="mx-auto max-w-8xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-7 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className='space-y-4'>
                        <p class="text-brand text-xl">
                            Tarzla'yı indir
                        </p>

                        <p class="max-w-xs text-sm text-subtitle">
                        Uygulamayı indirerek kampanyaları takip et, tüm kredi kartı fırsatlarını yakala.
                        </p>

                        
                        <div>
                            <a href="#" className="">
                                <img
                                alt=""
                                src={AppStore}
                                className="h-12 w-auto"
                                />
                            </a>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-medium text-brand">Kategoriler</p>

                            <ul className="mt-6 space-y-3 text-sm">
                                {footerLinks.kategoriler.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-700 hover:text-black transition text-subtitle">
                                    {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <p className="font-medium text-brand">Marka Keşfet</p>

                            <ul className="mt-6 space-y-3 text-sm">
                                {footerLinks.markaKesfet.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-700 hover:text-black transition text-subtitle">
                                    {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-brand">Destek</p>

                            <ul className="mt-6 space-y-3 text-sm">
                                {footerLinks.destek.map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-700 hover:text-black transition text-subtitle">
                                    {item}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                    <div className='flex items-center justify-between'>
                        <svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.877 19.8044C50.9921 19.8044 49.4009 18.0663 49.4009 15.3245C49.4009 9.71867 54.4192 8.69052 58.2136 8.98428C58.1646 6.56078 57.6016 5.45919 56.3531 5.45919C55.276 5.45919 53.6359 6.2915 51.2858 7.88269L50.5514 5.43471C52.1671 5.23887 53.6848 5.09199 55.0312 5.09199C58.4094 5.09199 60.6616 5.9243 60.6616 8.51916V16.1569C60.6616 18.5069 61.1757 19.2658 61.5918 19.5351V19.584H58.2136V13.9782C57.1365 18.0908 54.7375 19.8044 52.877 19.8044ZM53.9296 18.5069C55.6187 18.5069 57.7485 16.2303 58.2136 12.338V9.327C53.5869 9.05772 51.8489 10.8203 51.8489 14.9574C51.8489 17.4053 52.7791 18.5069 53.9296 18.5069Z" fill="#E91C2D"/>
                            <path d="M48.6706 19.5837H43.8726V19.5348C44.3132 19.29 45.0476 18.58 45.0476 16.1565V4.65103C45.0476 2.30097 44.5336 1.54209 44.1174 1.27282V1.22386H47.4956V16.1565C47.4956 18.6045 48.2545 19.3144 48.6706 19.5348V19.5837Z" fill="#E91C2D"/>
                            <path d="M43.1388 19.584H31.6088L40.446 5.77736H37.7287C36.7006 5.77736 34.5464 6.38936 32.6125 7.88263L31.8781 5.43464H43.1388L34.3016 19.2413H36.2355C37.1657 19.2413 40.6418 18.923 42.4044 17.136L43.1388 19.584Z" fill="#E91C2D"/>
                            <path d="M27.3464 19.5839H22.5484V19.5349C22.989 19.2901 23.7234 18.5802 23.7234 16.1567V8.86173C23.7234 6.51167 23.2094 5.75279 22.7932 5.48351V5.43456H26.1714V11.1873C27.273 8.71485 28.3991 5.41007 31.1163 5.41007L31.6059 7.85806C30.5533 7.71118 27.6892 7.61326 26.1714 12.0196V16.1567C26.1714 18.6047 26.9303 19.3146 27.3464 19.5349V19.5839Z" fill="#E91C2D"/>
                            <path d="M13.3364 19.8044C11.4514 19.8044 9.86025 18.0663 9.86025 15.3245C9.86025 9.71867 14.8786 8.69052 18.673 8.98428C18.624 6.56078 18.061 5.45919 16.8125 5.45919C15.7354 5.45919 14.0953 6.2915 11.7452 7.88269L11.0108 5.43471C12.6265 5.23887 14.1442 5.09199 15.4906 5.09199C18.8688 5.09199 21.121 5.9243 21.121 8.51916V16.1569C21.121 18.5069 21.635 19.2658 22.0512 19.5351V19.584H18.673V13.9782C17.5959 18.0908 15.1969 19.8044 13.3364 19.8044ZM14.389 18.5069C16.0781 18.5069 18.2079 16.2303 18.673 12.338V9.327C14.0463 9.05772 12.3082 10.8203 12.3082 14.9574C12.3082 17.4053 13.2385 18.5069 14.389 18.5069Z" fill="#E91C2D"/>
                            <path d="M6.24235 20C3.20685 20 1.46879 18.6291 1.46879 15.2999V7.85802C1.46879 6.97674 1.17503 5.85067 0 5.77723V5.43452C1.9339 5.43452 3.67197 3.25581 3.67197 0H3.91677V5.48348L9.27785 5.43452L8.51897 7.61322C7.46634 6.41371 6.02203 5.82619 3.91677 5.82619V16.7197C3.91677 18.6781 4.62668 19.6083 5.63035 19.6083C6.58507 19.6083 7.78458 18.776 8.86169 17.1359L9.59608 19.5838C8.34761 19.8531 7.22154 20 6.24235 20Z" fill="#E91C2D"/>
                        </svg>
                        <div className="flex items-center gap-3 text-brand">
                            <InstagramLogo size={24} color="#171717" />
                            <LinkedinLogo size={24} color="#171717" /> 
                        </div>
                    </div>

                    <div class="w-full h-[1px] bg-[#F5F5F5]"></div>

                    <div className='flex-column items-center justify-between space-y-6'>
                        <p className='text-subtitle text-xs'>© 2025 Tarzla İnternet Bilgi Hizmetleri ve Teknolojileri A.Ş. Tüm hakları saklıdır.</p>
                        <p class="text-xs text-subtitle">Tarzla, kullanıcıların ayakkabı alışverişlerinde kendilerine en uygun ürünleri en hızlı ve doğru şekilde bulmalarını sağlayan bir akıllı öneri platformudur. Kullanıcıların tarzlarına, ayak numaralarına ve bütçelerine uygun ayakkabıları tek bir yerde toplar ve kişiselleştirilmiş öneriler sunar. Tarzla, İnternet Bilgi Hizmetleri ve Teknolojileri A.Ş. tarafından sunulan hizmetlerle, kullanıcıların alışveriş deneyimini kolaylaştırmayı ve satın alma kararlarını bilinçli şekilde vermelerini hedefler. Tarzla’da sunulan ürünler, markaların güncellemelerine, stok durumlarına ve fiyat değişikliklerine bağlı olarak değişkenlik gösterebilir. Uygulamada yer alan görseller, fiyatlar ve ürün detayları bilgilendirme amaçlıdır; güncel bilgiler için uygulamayı düzenli olarak takip etmeniz önerilir.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
