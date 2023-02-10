import { MapPinIcon, BanknotesIcon, ClockIcon } from '@heroicons/react/24/solid'

const hotel = [
    {
        id: 1,
        foto:'/hotel/claro.jpg',
        namahotel: 'Hotel Claro',
        jarak: '0 kilometer',
        waktu: '0 menit',
        harga: '700-7.000',     
        gmaps: 'https://goo.gl/maps/Kg6i7QqKFQdjssD17',
        href: 'https://www.tiket.com/hotel/indonesia/grand-clarion-hotel-convention-kendari-108001534490371413',
    },
    {
        id: 2,
        foto:'/hotel/grandkubra.jpg',
        namahotel: 'Hotel Grand Kubra',
        jarak: '69 meter',
        waktu: '2 menit',
        harga: '380-700',     
        gmaps: 'https://goo.gl/maps/bJP8JXx8Eee2X6dw6',
        href: 'https://www.tiket.com/hotel/indonesia/grand-kubra-hotel--208001565933407149',
    },
    {
        id: 3,
        foto:'/hotel/same.jpg',
        namahotel: 'Same Hotel',
        jarak: '200 meter',
        waktu: '2 menit',
        harga: '400-800',     
        gmaps: 'https://goo.gl/maps/swfrqbCTqfRewFug9',
        href: 'https://www.tiket.com/hotel/indonesia/same-hotel-kendari-108001534490378306',
    },
    {
        id: 4,
        foto:'/hotel/swissbel.jpg',
        namahotel: 'Swiss-Belhotel',
        jarak: '500 meter',
        waktu: '2 menit',
        harga: '500-800',     
        gmaps: 'https://goo.gl/maps/JevCbXPYnnZbd16a8',
        href: 'https://www.tiket.com/hotel/indonesia/swissbelhotel-kendari-412001639841436754',
    },
    {
        id: 5,
        foto:'/hotel/athaya.jpg',
        namahotel: 'Hotel Athaya',
        jarak: '1,1 kilometer',
        waktu: '5 menit',
        harga: '300-600',     
        gmaps: 'https://goo.gl/maps/VrCxhYRfgEYHxzsw8',
        href: 'https://www.tiket.com/hotel/indonesia/athaya-hotel-108001534490328552',
    },
]

export function Hotel() {
    return (
        
    <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-2">
            
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
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}