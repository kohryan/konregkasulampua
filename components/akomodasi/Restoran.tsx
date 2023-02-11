import { MapPinIcon, BanknotesIcon, ClockIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const resto = [
    {
        id: 1,
        foto:'/restoran/masfathur.png',
        restoran: 'Sari Laut Mas Fathur',
        jarak: '0,3',
        waktu: '2',
        harga: '≥ 10',     
        gmaps: 'https://goo.gl/maps/PVsfFrx1iTXTGpsm7',
        href: 'https://goo.gl/maps/PVsfFrx1iTXTGpsm7',
    },
]

export function Restoran() {
    return (
        
    <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
            
            {resto.map((item) => (
                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={item.href}>
                    <Image className="rounded-t-lg" width="630" height="420" src={item.foto} alt="claro"/>
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.restoran}</h5>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 hidden md:inline-flex lg:inline-flex" aria-hidden="true"/> {item.jarak} km • {item.waktu} menit</p>
                        </div>
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                        Lihat Peta →</span></a> 
                        <div className="mb-3 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <BanknotesIcon className="flex-shrink-0 h-6 w-6 text-green-500 inline-flex" aria-hidden="true"/> IDR {item.harga} k</span>
                        </div>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}