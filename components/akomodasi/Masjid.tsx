import { MapPinIcon, BanknotesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const masjid = [
    {
      "id": 1,
      "foto": "/hotel/aljaariyah.png",
      "namahotel": "Masjid Al Jaariyah",
      "jarak": "0,65",
      "gmaps": "https://goo.gl/maps/bxirxRirSBFwP8Kh8",
    },
    {
      "id": 2,
      "foto": "/hotel/jannah.png",
      "namahotel": "Masjid Raudhatul Jannah",
      "jarak": "2,00",
      "gmaps": "https://goo.gl/maps/Rgg2JdK66u4HmQjy9",
    }
  ]


export function Masjid() {
    return (
        
    <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-2">
            
            {masjid.map((item) => (
                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Image className="rounded-t-lg" width="630" height="420" src={item.foto} alt="claro" />
                    <div className="p-5">
                        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.namahotel}</h5>
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                        Lihat Peta →</span></a> 
                    </div>
                </div>
            ))}

        </div>
    </div>
    
    )
}
