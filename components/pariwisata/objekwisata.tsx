import { MapPinIcon, BanknotesIcon, MapIcon, ClockIcon, ExclamationTriangleIcon, TicketIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const objekwisata = [
  {
    "id": 1,
    "foto": "/objekwisata/agrawisata.jpg",
    "wisata": "Agra Wisata",
    "lokasi": "Kab. Konawe",
    "jarak": 47,
    "durasi": "74 menit",
    "tiket": "± 5k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/f9cbr1aDMV3C8Xp87",
    "href": "#"
  },
  {
    "id": 2,
    "foto": "/objekwisata/moramo.jpg",
    "wisata": "Air Terjun Moramo",
    "lokasi": "Kab. Konawe Selatan",
    "jarak": 61,
    "durasi": "90 menit",
    "tiket": "± 10k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/osoZJQ8X4P9Qbtys9",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d4372538-Reviews-Moramo_waterfall-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 3,
    "foto": "/objekwisata/anjungan.jpg",
    "wisata": "Anjungan Teluk Kendari",
    "lokasi": "Kota Kendari",
    "jarak": 3,
    "durasi": "7 menit",
    "tiket": "± 75k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/bpyk8QxaYESE2tjFA",
    "href": "#"
  },
  {
    "id": 4,
    "foto": "/objekwisata/keraton.jpg",
    "wisata": "Benteng Keraton Buton",
    "lokasi": "Kota Baubau",
    "jarak": 220,
    "durasi": "7,5 jam",
    "tiket": "± 5k",
    "kapal": "± 235k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/ntM9cFmnH1hUDbsT7",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1600182-d3219513-Reviews-Buton_Fortress-Baubau_Buton_Island_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 5,
    "foto": "/objekwisata/bukit.jpg",
    "wisata": "Bukit Teletubbies",
    "lokasi": "Kab. Bombana",
    "jarak": 218,
    "durasi": "4,5 jam",
    "tiket": "± 10k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/UUWRUJMNPn5jE5429",
    "href": "#"
  },
  {
    "id": 6,
    "foto": "/objekwisata/kebunraya.jpg",
    "wisata": "Kebun Raya Kendari",
    "lokasi": "Kota Kendari",
    "jarak": 14,
    "durasi": "26 menit",
    "tiket": "± 5k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/RabtYe8Ku5jHNG3M7",
    "href": "#"
  },
  {
    "id": 7,
    "foto": "/objekwisata/mantara.jpg",
    "wisata": "Mantara Waterpark Kendari",
    "lokasi": "Kota Kendari",
    "jarak": 12,
    "durasi": "24 menit",
    "tiket": "± 35k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/pUfh4oUPjcmRkeF9A",
    "href": "#"
  },
  {
    "id": 8,
    "foto": "/objekwisata/alalam.jpg",
    "wisata": "Masjid Al-Alam Kendari",
    "lokasi": "Kota Kendari",
    "jarak": 4,
    "durasi": "8 menit",
    "tiket": "-",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/9napvwJ2iER7d4VR8",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d17338032-Reviews-Al_Alam_Mosque-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 9,
    "foto": "/objekwisata/meleura.jpg",
    "wisata": "Pantai Meleura",
    "lokasi": "Kab. Muna",
    "jarak": 155,
    "durasi": "5 jam",
    "tiket": "± 10k",
    "kapal": "± 265k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/5ueX1aANoHYpfobA6",
    "href": "#"
  },
  {
    "id": 10,
    "foto": "/objekwisata/mutiara.jpg",
    "wisata": "Pantai Mutiara",
    "lokasi": "Kab. Buton Tengah",
    "jarak": 248,
    "durasi": "7 jam",
    "tiket": "± 10k",
    "kapal": "± 265k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/wtf7VMXj3F5e1Rfr9",
    "href": "#"
  },
  {
    "id": 11,
    "foto": "/objekwisata/nambo.jpg",
    "wisata": "Pantai Nambo",
    "lokasi": "Kota Kendari",
    "jarak": 13,
    "durasi": "21 menit",
    "tiket": "± 6k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/rGzCBiQyGEKXnB2FA",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d9732035-Reviews-Nambo_Beach-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 12,
    "foto": "/objekwisata/nirwana.jpg",
    "wisata": "Pantai Nirwana",
    "lokasi": "Kota Baubau",
    "jarak": 230,
    "durasi": "8 jam",
    "tiket": "± 10k",
    "kapal": "± 315k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/LCGAZPM5i7CVjiCh7",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1600182-d9699860-Reviews-Nirwana_Beach-Baubau_Buton_Island_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 13,
    "foto": "/objekwisata/senja.jpg",
    "wisata": "Pantai Pulau Senja",
    "lokasi": "Kab. Konawe Selatan",
    "jarak": 30,
    "durasi": "52 menit",
    "tiket": "± 20k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/aBGA9x4JSoNr9Uqx7",
    "href": "#"
  },
  {
    "id": 14,
    "foto": "/objekwisata/taipa.jpg",
    "wisata": "Pantai Taipa",
    "lokasi": "Kab. Konawe Utara",
    "jarak": 70,
    "durasi": "105 menit",
    "tiket": "± 10k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/jsr4Jc8jojFbPLd46",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d7126264-Reviews-Taipa_Beach-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 15,
    "foto": "/objekwisata/toronipa.jpg",
    "wisata": "Pantai Toronipa",
    "lokasi": "Kab. Konawe",
    "jarak": 23,
    "durasi": "40 menit",
    "tiket": "-",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/LCEFqz9QXFMhtuxH8",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d9563747-Reviews-Toronipa_Beach-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 16,
    "foto": "/objekwisata/walengkabola.jpg",
    "wisata": "Pantai Walengkabola",
    "lokasi": "Kab. Muna",
    "jarak": 208,
    "durasi": "6 jam",
    "tiket": "± 10k",
    "kapal": "± 265k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/omxmCzmkkW7nCfGw9",
    "href": "#"
  },
  {
    "id": 17,
    "foto": "/objekwisata/wawolesea.jpg",
    "wisata": "Pemandian Air Panas Wawolesea",
    "lokasi": "Kab. Konawe Utara",
    "jarak": 84,
    "durasi": "120 menit",
    "tiket": "± 5k",
    "kapal": "-",
    "keterangan": "Darat",
    "gmaps": "https://goo.gl/maps/Qce8F7TZnhD8KMgV9",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d8866811-Reviews-Wawolesea_Hot_Spring-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 18,
    "foto": "/objekwisata/bokori.jpg",
    "wisata": "Pulau Bokori",
    "lokasi": "Kab. Konawe",
    "jarak": 25,
    "durasi": "42 menit",
    "tiket": "-",
    "kapal": "± 20k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/FcYaaJacHvgCseLHA",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d8866807-Reviews-Bokori_Island-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 19,
    "foto": "/objekwisata/labengki.jpg",
    "wisata": "Pulau Labengki",
    "lokasi": "Kab. Konawe Utara",
    "jarak": 90,
    "durasi": "135 menit",
    "tiket": "-",
    "kapal": "± 300k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/bQNJuDq4ainnEiAL6",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598986-d9582299-Reviews-Labengki_Island-Kendari_South_East_Sulawesi_Sulawesi.html"
  },
  {
    "id": 20,
    "foto": "/objekwisata/wakatobi.jpg",
    "wisata": "Taman Nasional Wakatobi",
    "lokasi": "Kab. Wakatobi",
    "jarak": 240,
    "durasi": "8,5 jam",
    "tiket": "± 160k",
    "kapal": "± 240k",
    "keterangan": "Darat & Laut",
    "gmaps": "https://goo.gl/maps/dD6kSEkbNoCHQzEt6",
    "href": "https://www.tripadvisor.co.id/Attraction_Review-g1598982-d12268531-Reviews-Wakatobi_National_Park-Kaledupa_Island_Wakatobi_South_East_Sulawesi_Sulawesi.html"
  }
]


export function Objekwisata() {
    return (
        
    <div className="max-w-2xl mx-auto py-auto px-auto sm:py-auto sm:px-auto lg:max-w-7xl lg:px-2">
        <div className="mt-2 grid grid-cols-2 gap-y-5 sm:grid-cols-2 gap-x-2 lg:grid-cols-4 xl:grid-cols-3 xl:gap-x-2">
            
            {objekwisata.map((item) => (
                <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={item.gmaps}>
                        <Image className="rounded-t-lg" width="630" height="420" src={item.foto} alt="foto" />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.wisata}</h5>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-yellow-500">{item.lokasi}</p>
                        </div>
                        <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                            <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 hidden md:inline-flex lg:inline-flex" aria-hidden="true"/> {item.jarak} km • {item.durasi}</p>
                        </div>
                        {/* <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-gray-700 dark:text-white"> 
                            <ClockIcon className="flex-shrink-0 h-6 w-6 text-orange-400 inline-flex" aria-hidden="true"/> {item.durasi}</p>
                        </div> */}
                        <div className="mb-1 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <TicketIcon className="flex-shrink-0 h-6 w-6 text-green-500 inline-flex" aria-hidden="true"/> <b>Masuk:</b> {item.tiket}</span>
                        </div>
                        <div className="mb-1 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <BanknotesIcon className="flex-shrink-0 h-6 w-6 text-green-500 inline-flex" aria-hidden="true"/> <b>Kapal:</b> {item.kapal}</span>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
                            <span className="text-md font-normal text-gray-900 dark:text-white"> 
                            <ExclamationTriangleIcon className="flex-shrink-0 h-6 w-6 text-yellow-400 inline-flex" aria-hidden="true"/> {item.keterangan}</span>
                        </div>
                        {/* <div className="mb-1 flex items-center justify-between align-middle">                            
                            <span className="text-sm font-medium text-blue-600">
                            <MapIcon className="flex-shrink-0 h-6 w-6 text-blue-600 inline-flex" aria-hidden="true"/><a href={item.gmaps} target="_blank" rel="noopener noreferrer"> Lihat Peta</a></span>
                        </div> */}
                        <a href={item.gmaps} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Lihat Peta</a>
                    </div>
                </div>
            ))}

        </div>
    </div>
    
    )
}