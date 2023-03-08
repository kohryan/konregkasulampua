import React, { useState } from "react";
import { MapPinIcon, TagIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const oleh = [
    {
      "id": 1,
      "foto": "/oleh/sultratenun.jpg",
      "nama": "Sultra Tenun & Tourism Center",
      "kategori": "tenun",
      "tag": "Rumah Tenun",
      "gmaps": "https://goo.gl/maps/82yUf96YBbmpUbCr7",
      "kontak": "https://wa.me/6287877593313",
    },
    {
        "id": 2,
        "foto": "/oleh/rajatenun.jpg",
        "nama": "Raja Tenun",
        "kategori": "tenun",
        "tag": "Rumah Tenun",
        "gmaps": "https://goo.gl/maps/iuVv6sTWDJanmPUd9",
        "kontak": "https://wa.me/6281242415317",
      },
      {
        "id": 3,
        "foto": "/oleh/joewita.jpg",
        "nama": "Rumah Tenun Joewita Silk",
        "kategori": "tenun",
        "tag": "Rumah Tenun",
        "gmaps": "https://goo.gl/maps/p5exigSVy7ZuViXQ7",
        "kontak": "https://wa.me/6285231316717",
      },
      {
        "id": 4,
        "foto": "/oleh/mahkota.jpg",
        "nama": "Rumah Tenun Mahkota Kendari",
        "kategori": "tenun",
        "tag": "Rumah Tenun",
        "gmaps": "https://goo.gl/maps/Z7c2GytdsGSRxkvt5",
        "kontak": "https://wa.me/6281341701901",
      },
      {
        "id": 5,
        "foto": "/oleh/tenunsultra.jpg",
        "nama": "Tenun Sultra",
        "kategori": "tenun",
        "tag": "Rumah Tenun",
        "gmaps": "https://goo.gl/maps/dAV3qfardmHmZh8C8",
        "kontak": "https://wa.me/628114050136",
      },
      {
        "id": 6,
        "foto": "/oleh/piala.jpg",
        "nama": "Toko Tenun Piala Sultra",
        "kategori": "tenun",
        "tag": "Rumah Tenun",
        "gmaps": "https://goo.gl/maps/rJGyfhq1vRVFiVNX8",
        "kontak": "https://wa.me/6281376133154",
      }
  ]

export function Oleholeh () {
    const [selectedCategory, setSelectedCategory] = useState<string | []>([]);
    const [filteredoleh, setFilteredData] = useState(oleh);
  
    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const category = event.target.value;
      setSelectedCategory(category);
  
      if (!category) {
        setFilteredData(oleh);
        return;
      }
  
      setFilteredData(oleh.filter(item => item.kategori === category));
    };
  
  return (
    <div className="mt-6">
        <p className="mb-2 text-sm text-gray-400 dark:text-gray-200">Tampilkan berdasarkan kategori:</p>
        <div>
            <select className="mb-3 text-sm px-4 border shadow-sm border-gray-400 rounded appearance-none bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:shadow-outline" 
            onChange={handleFilter} value={selectedCategory || ""}>
                <option value="">Semua</option>
                <option value="makanan">Makanan dan Aksesori</option>
                <option value="tenun">Rumah Tenun</option>
            </select>
        </div>
        <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
            <div className="mt-2 grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
                {filteredoleh.map(item => (
                    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={item.kontak} target="_blank" rel="noopener noreferrer">
                        <Image className="rounded-t-lg" width="630" height="420" src={item.foto} alt="claro" />
                    </a>
                
                    <div className="p-5">
                        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                        <p className="mb-2 text-sm opacity-80" style={{ marginTop: ".5rem" }}>
                             <TagIcon className="flex-shrink-0 h-4 w-4 align-middle opacity-80 inline-flex mr-1"/> {item.tag}
                        </p>
                    <div className="flex items-center justify-between align-middle">
                    <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                    Lihat Peta →</span></a></div>
                    <div className="mt-1 flex flex-wrap gap-2">
                    <a href={item.kontak} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                    <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" className="h-5 w-5  inline-flex"/> Kontak</span>
                    <style jsx>{`
                    span {
                    padding: 0;
                    mask-image: linear-gradient(
                        60deg,
                        black 25%,
                        rgba(0, 0, 0, 0.2) 50%,
                        black 75%
                        );
                    mask-size: 400%;
                    mask-position: 0%;
                    }
                    span:hover {
                        mask-position: 100%;
                        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
                    }
                    `}</style>
                    </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
  );
};