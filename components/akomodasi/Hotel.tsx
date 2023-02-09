import React from "react";
import { MapPinIcon, BanknotesIcon, ClockIcon } from '@heroicons/react/24/solid'

const hotel = [
    {
        id: 1,
        foto:'/hotel/claro.jpg',
        namahotel: 'Hotel Claro Kendari',
        jarak: 'Venue Kegiatan (0 km)',
        waktu: '0 menit',
        harga: '700-7.000',     
        gmaps: 'https://goo.gl/maps/Kg6i7QqKFQdjssD17',
        href: '/akomodasi/hotel/claro',
    },
    {
        id: 2,
        foto:'/hotel/same.jpg',
        namahotel: 'Same Hotel Kendari',
        jarak: '200 meter',
        waktu: '2 menit',
        harga: '400-800',     
        gmaps: 'https://goo.gl/maps/swfrqbCTqfRewFug9',
        href: '/akomodasi/hotel/same',
    },
    {
        id: 2,
        foto:'/hotel/swissbel.jpg',
        namahotel: 'Swiss-Belhotel Kendari',
        jarak: '500 meter',
        waktu: '2 menit',
        harga: '500-800',     
        gmaps: 'https://goo.gl/maps/JevCbXPYnnZbd16a8',
        href: '/akomodasi/hotel/swissbel',
    },
]

export function Hotel() {
    return (
        
    <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
            
            {hotel.map((item) => (
                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={item.href}>
                        <img className="rounded-t-lg" src={item.foto} alt="claro"/>
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.namahotel}</h5>
                        <div className="mb-1 flex items-center justify-between"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 inline-flex" aria-hidden="true"/> {item.jarak}</p>
                        </div>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 inline-flex" aria-hidden="true"/> {item.waktu}</p>
                        </div>
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                        Lihat Peta →</span></a> 
                        <div className="mb-3 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <BanknotesIcon className="flex-shrink-0 h-6 w-6 text-green-500 inline-flex" aria-hidden="true"/> IDR {item.harga} k</span>
                        </div>
                        <a href={item.href} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}