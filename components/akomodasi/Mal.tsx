import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const mal = [
    {
      "id": 1,
      "foto": "/minimarket/lippo.png",
      "nama": "Lippo Plaza Kendari",
      "jarak": "5",
      "waktu": 13,
      "gmaps": "https://goo.gl/maps/SBkKuJ1sTyrJWT8N7"
    },
    {
      "id": 2,
      "foto": "/minimarket/thepark.png",
      "nama": "The Park Kendari",
      "jarak": "3,2",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/deCgepfusz6pzqvj7"
    },
    {
      "id": 3,
      "foto": "/minimarket/mandonga.png",
      "nama": "Mall Mandonga",
      "jarak": "3",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/cqPU7exUy9xGwPNY8"
    },
    {
      "id": 4,
      "foto": "/minimarket/brylian.png",
      "nama": "Brylian Plaza",
      "jarak": "4,5",
      "waktu": 10,
      "gmaps": "https://goo.gl/maps/XKXyMyz3RPCGZP5t8"
    },
    {
      "id": 5,
      "foto": "/minimarket/ace.png",
      "nama": "Ace-Informa",
      "jarak": "4",
      "waktu": 11,
      "gmaps": "https://goo.gl/maps/im9kw39soD5ippwf7"
    },
    {
      "id": 6,
      "foto": "/minimarket/diy.png",
      "nama": "Mr. DIY",
      "jarak": "2,3",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/eFRxkpbxA5EkeUP79"
    }
  ]

export function Mal() {
    return (
        
        <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2">
            
            {mal.map((item) => (
            <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={item.gmaps} className="flex flex-row items-center">
                    <Image className="object-cover w-24 h-36 rounded-l-lg" width="450" height="600" src={item.foto} alt="foto" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 hidden md:inline-flex lg:inline-flex" aria-hidden="true"/> {item.jarak} km • {item.waktu} menit</p>
                        </div>
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                        Lihat Peta →</span></a>
                    </div>
                </a>
            </div>
            ))}

        </div>
    </div>
    
    )
}