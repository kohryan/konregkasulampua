import { MapPinIcon, BanknotesIcon } from '@heroicons/react/24/solid'

const hotel = [
    {
      "id": 1,
      "foto": "/hotel/claro.jpg",
      "namahotel": "Claro Hotel",
      "star": "★★★★",
      "rate": "4,5",
      "jarak": 0,
      "waktu": 0,
      "harga": 700,
      "gmaps": "https://goo.gl/maps/Kg6i7QqKFQdjssD17",
      "href": "https://www.tiket.com/hotel/indonesia/grand-clarion-hotel-convention-kendari-108001534490371413"
    },
    {
      "id": 2,
      "foto": "/hotel/grandkubra.jpg",
      "namahotel": "Grand Kubra Hotel",
      "star": "★★★",
      "rate": "2,4",
      "jarak": "0,07",
      "waktu": 1,
      "harga": 380,
      "gmaps": "https://goo.gl/maps/bJP8JXx8Eee2X6dw6",
      "href": "https://www.tiket.com/hotel/indonesia/grand-kubra-hotel--208001565933407149"
    },
    {
      "id": 3,
      "foto": "/hotel/athaya.jpg",
      "namahotel": "Hotel Athaya",
      "star": "★★★",
      "rate": "3,3",
      "jarak": "0,45",
      "waktu": 2,
      "harga": 300,
      "gmaps": "https://goo.gl/maps/VrCxhYRfgEYHxzsw8",
      "href": "https://www.tiket.com/hotel/indonesia/athaya-hotel-108001534490328552"
    },
    {
      "id": 4,
      "foto": "/hotel/zahra.jpg",
      "namahotel": "Zahra Hotel Syariah",
      "star": "★★★",
      "rate": "4,2",
      "jarak": "0,65",
      "waktu": 2,
      "harga": 500,
      "gmaps": "https://goo.gl/maps/o2qMjkbwFy77n7de7",
      "href": "https://www.tiket.com/hotel/indonesia/zahra-syariah-kendari-108001534490322639"
    },
    {
      "id": 5,
      "foto": "/hotel/same.jpg",
      "namahotel": "Same Hotel",
      "star": "★★★",
      "rate": "4,2",
      "jarak": 1,
      "waktu": 3,
      "harga": 500,
      "gmaps": "https://goo.gl/maps/swfrqbCTqfRewFug9",
      "href": "https://www.tiket.com/hotel/indonesia/same-hotel-kendari-108001534490378306"
    },
    {
      "id": 6,
      "foto": "/hotel/tropical.jpg",
      "namahotel": "Tropical Point Hotel Syariah",
      "star": "★★",
      "rate": "4,1",
      "jarak": "0,8",
      "waktu": 3,
      "harga": 300,
      "gmaps": "https://goo.gl/maps/QrGb8F8TribVPQxi7",
      "href": "https://www.tiket.com/hotel/indonesia/tropical-point-hotel-syariah-412001639108205729"
    },
    {
      "id": 7,
      "foto": "/hotel/swissbel.jpg",
      "namahotel": "Swiss-Belhotel",
      "star": "★★★★",
      "rate": "4,3",
      "jarak": 2,
      "waktu": 5,
      "harga": 575,
      "gmaps": "https://goo.gl/maps/JevCbXPYnnZbd16a8",
      "href": "https://www.tiket.com/hotel/indonesia/swissbelhotel-kendari-412001639841436754"
    },
    {
      "id": 8,
      "foto": "/hotel/agung.jpg",
      "namahotel": "Agung Hotel",
      "star": "★★",
      "rate": "4,2",
      "jarak": "1,2",
      "waktu": 5,
      "harga": 350,
      "gmaps": "https://goo.gl/maps/fkYDPntsWHMZKefh6",
      "href": "https://www.tiket.com/hotel/indonesia/agung-hotel-kendari-108001534490371581"
    },
    {
      "id": 9,
      "foto": "/hotel/venus.jpg",
      "namahotel": "Venus Hotel",
      "star": "★★",
      "rate": "3,7",
      "jarak": "2,1",
      "waktu": 6,
      "harga": 290,
      "gmaps": "https://goo.gl/maps/FQVeHLjYoSoDGEBn7",
      "href": "https://www.tiket.com/hotel/indonesia/hotel-venus-109001537352174276"
    },
    {
      "id": 10,
      "foto": "/hotel/zenith.jpg",
      "namahotel": "Zenith Hotel",
      "star": "★★★",
      "rate": "3,9",
      "jarak": "2,2",
      "waktu": 6,
      "harga": 400,
      "gmaps": "https://goo.gl/maps/WtgYH4WsE9kHML117",
      "href": "https://www.tiket.com/hotel/indonesia/zenith-hotel-kendari-108001534490378160"
    },
    {
      "id": 11,
      "foto": "/hotel/millenium.jpg",
      "namahotel": "Millenium Hotel",
      "star": "★",
      "rate": "4,1",
      "jarak": "3,1",
      "waktu": 7,
      "harga": 250,
      "gmaps": "https://goo.gl/maps/uYxwoAXnZ1rifwR19",
      "href": "https://www.tiket.com/hotel/indonesia/hotel-millenium-211001573450215734"
    },
    {
      "id": 12,
      "foto": "/hotel/horison.jpg",
      "namahotel": "Horison Hotel",
      "star": "★★★",
      "rate": "4,2",
      "jarak": "3,4",
      "waktu": 10,
      "harga": 630,
      "gmaps": "https://goo.gl/maps/GcBpjwVTt59DagKaA",
      "href": "https://www.tiket.com/hotel/indonesia/horison-kendari-109001536035331700"
    },
    {
      "id": 13,
      "foto": "/hotel/boutique.jpg",
      "namahotel": "Same Boutique Hotel",
      "star": "★★★",
      "rate": "4,3",
      "jarak": "3,5",
      "waktu": 8,
      "harga": 450,
      "gmaps": "https://goo.gl/maps/63yU5UhZVukfSyXz9",
      "href": "https://www.tiket.com/hotel/indonesia/same-boutique-hotel-109001537751707244"
    },
    {
      "id": 14,
      "foto": "/hotel/plaza.jpg",
      "namahotel": "Plaza Inn",
      "star": "★★★",
      "rate": "4,3",
      "jarak": "3,7",
      "waktu": 11,
      "harga": 650,
      "gmaps": "https://goo.gl/maps/kUm267V8jnPSKGAj7",
      "href": "https://www.tiket.com/hotel/indonesia/plaza-inn-kendari-by-horison-108001534490331676"
    }
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
                        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.namahotel}</h5>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-yellow-500"> 
                                {item.star}<span className="text-gray-600 dark:text-gray-300"> • {item.rate} </span></p>
                        </div>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 hidden md:inline-flex lg:inline-flex" aria-hidden="true"/> {item.jarak} km • {item.waktu} menit</p>
                        </div>
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                        Lihat Peta →</span></a> 
                        <div className="mb-3 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <BanknotesIcon className="flex-shrink-0 h-6 w-6 text-green-500 inline-flex" aria-hidden="true"/> IDR ≥ {item.harga}k</span>
                        </div>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selengkapnya</a>
                    </div>
                </div>
            ))}

        </div>
        <p className='text-xs mt-12'>Sumber data: <a href="https://tiket.com" className="hover:text-blue-500">tiket.com</a></p>
    </div>
    
    )
}