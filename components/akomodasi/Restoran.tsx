import React, { useState } from "react";
import { MapPinIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const resto = [
    {
      "id": 1,
      "foto": "/restoran/bakau.png",
      "nama": "RM Kampung Bakau",
      "kategori": "seafood",
      "tag": "Hidangan Laut, Khas Sultra",
      "rate": "4,8",
      "jarak": "3,3",
      "waktu": 10,
      "gmaps": "https://goo.gl/maps/wpsNWUFrtnwibHy37",
      "href": "https://www.tripadvisor.co.id/LocationPhotoDirectLink-g1598986-d17341186-i468849549-RM_Kampung_Bakau-Kendari_South_East_Sulawesi_Sulawesi.html",
      "tombol": "Makan di Tempat"
    },
    {
      "id": 2,
      "foto": "/restoran/anto.png",
      "nama": "Warkop H. Anto",
      "kategori": "warkop",
      "tag": "Kopi, Khas Sultra",
      "rate": "4,6",
      "jarak": "1,5",
      "waktu": 6,
      "gmaps": "https://www.google.com/maps/place/Warkop+Haji+Anto+2/@-3.974701,122.5242481,16z/data=!4m6!3m5!1s0x2d98f2af55ea3ead:0x1776ceb48a99d5d7!8m2!3d-3.9801306!4d122.5312874!16s%2Fg%2F11cllmj1l1?coh=164777&entry=tt",
      "href": "https://food.grab.com/id/id/restaurant/warkop-haji-anto-lalolara-delivery/6-C2JFVLNTHELWME",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 3,
      "foto": "/restoran/papis.png",
      "nama": "Papi's Mami's Cofee & Palekko",
      "kategori": "sultra",
      "tag": "Ayam, Bebek, Kopi, Cemilan, Khas Bugis",
      "rate": "4,2",
      "jarak": "1,7",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/b2kMkHST13kE4mZq6",
      "href": "https://food.grab.com/id/id/restaurant/papi-s-mami-s-coffee-and-palekko-bende-delivery/6-C3UYVUABNF33E2",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 4,
      "foto": "/restoran/pangkep.png",
      "nama": "Warung Pangkep",
      "kategori": "sultra",
      "tag": "Coto, Konro, Sop Saudara, Khas Bugis",
      "rate": "4,7",
      "jarak": "1,2",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/HRTiQJSDh5yUfVAj7",
      "href": "https://food.grab.com/id/id/restaurant/warung-pangkep-korumba-delivery/6-C2JXCEUFR2MGDA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 5,
      "foto": "/restoran/pisjo.png",
      "nama": "Pisang Ijo Amanda",
      "kategori": "sultra",
      "tag": "Pisang Ijo, Khas Sultra",
      "rate": "4,4",
      "jarak": "3,6",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/452HfznrdRkQYxe76",
      "href": "https://gofood.co.id/id/kendari/restaurant/pisang-ijo-amanda-wua-wua-97018d52-da05-40c6-b01b-1795d99d19e6",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 6,
      "foto": "/restoran/mcd.png",
      "nama": "McD Edi Sabara",
      "kategori": "fast",
      "tag": "Ayam, Cemilan, Cepat Saji",
      "rate": "4,5",
      "jarak": "1,1",
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/psZY42zP677F9UJQ6",
      "href": "https://food.grab.com/id/id/restaurant/mcdonald-s-edi-sabara-kendari-delivery/6-C2MZBABTAJTWNN",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 7,
      "foto": "/restoran/kfc.png",
      "nama": "KFC Edi Sabara",
      "kategori": "fast",
      "tag": "Ayam, Cemilan, Cepat Saji",
      "rate": "4,7",
      "jarak": "0,5",
      "waktu": 2,
      "gmaps": "https://goo.gl/maps/WTruAEhypfPyaHgs8",
      "href": "https://food.grab.com/id/id/restaurant/kfc-eddi-sabara-kendari-delivery/6-C3BECGNFRKWJAE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 8,
      "foto": "/restoran/solaria.png",
      "nama": "Solaria The Park",
      "kategori": "aneka",
      "tag": "Oriental, Ayam, Seafood, Bakmi, Aneka Nasi",
      "rate": "4,7",
      "jarak": 2,
      "waktu": 10,
      "gmaps": "https://goo.gl/maps/ziGrYzZ2MES8cpZc8",
      "href": "https://food.grab.com/id/id/restaurant/solaria-the-park-kendari-delivery/6-C3X2RVD1J74CV6",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 9,
      "foto": "/restoran/ikigai.png",
      "nama": "Ikigai Resto",
      "kategori": "grill",
      "tag": "All You Can Eat, Khas Jepang, Grill",
      "rate": "4,6",
      "jarak": "1,1",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/1DGoGfczQ8gbsGSN8",
      "href": "https://food.grab.com/id/id/restaurant/ikigai-resto-korumba-delivery/6-C2JEJA4BPFXWKA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 10,
      "foto": "/restoran/progrill.png",
      "nama": "Progrill Resto & Steak",
      "kategori": "grill",
      "tag": "Steak, Grill",
      "rate": "4,8",
      "jarak": "1,1",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/SZ8QYad4KBNsQzUa8",
      "href": "https://food.grab.com/id/id/restaurant/progrill-steak-and-resto-korumba-delivery/IDGFSTI00003jfp",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 11,
      "foto": "/restoran/srikandi.png",
      "nama": "Srikandi Seafood",
      "kategori": "seafood",
      "tag": "Hidangan Laut",
      "rate": "4,6",
      "jarak": "0,2",
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/bUR38HSKn2brNUFu8",
      "href": "https://food.grab.com/id/id/restaurant/srikandi-seafood-korumba-delivery/6-CZDYEUUUA3VBAT",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 12,
      "foto": "/restoran/pondok.png",
      "nama": "Pondok Seafood",
      "kategori": "seafood",
      "tag": "Hidangan Laut",
      "rate": "4,5",
      "jarak": "0,6",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/94J6NYfzYxVSraHC7",
      "href": "https://food.grab.com/id/id/restaurant/pondok-seafood-korumba-delivery/6-CZKYAN3UBBVXRE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 13,
      "foto": "/restoran/bancakan.png",
      "nama": "D'Bancakan House",
      "kategori": "aneka",
      "tag": "Seafood, Ayam, Aneka Nasi, Cemilan",
      "rate": "4,9",
      "jarak": "2,4",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/EYAhzPTWyGBL6UHY8",
      "href": "https://food.grab.com/id/id/restaurant/d-bancakan-house-kambu-delivery/6-C2LVMAMFN74WAA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 14,
      "foto": "/restoran/kalasan.png",
      "nama": "Ayam Goreng Kalasan",
      "kategori": "aneka",
      "tag": "Ayam, Aneka Nasi, Hidangan Laut",
      "rate": "4,6",
      "jarak": "0,8",
      "waktu": 5,
      "gmaps": "#",
      "href": "https://food.grab.com/id/id/restaurant/ayam-goreng-kalasan-surabaya-lahundape-delivery/IDGFSTI00002ua0",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 15,
      "foto": "/restoran/dkings.png",
      "nama": "Dapur D'Kings",
      "kategori": "aneka",
      "tag": "Aneka Nasi",
      "rate": "4,7",
      "jarak": "0,8",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/JviGXTPoUovXCrHNA",
      "href": "https://food.grab.com/id/id/restaurant/dapur-d-kings-korumba-delivery/IDGFSTI000032vk",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 16,
      "foto": "/restoran/jiwa.png",
      "nama": "Kopi Janji Jiwa",
      "kategori": "warkop",
      "tag": "Kopi, Minuman",
      "rate": "4,8",
      "jarak": "1,2",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/kTBJbdBh2Fywk1su5",
      "href": "https://food.grab.com/id/id/restaurant/kopi-janji-jiwa-kendari-delivery/AWgJUe2Q6sn1d-vrm1lR",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 17,
      "foto": "/restoran/kenangan.png",
      "nama": "Kopi Kenangan",
      "kategori": "warkop",
      "tag": "Kopi, Minuman",
      "rate": "4,9",
      "jarak": "0,8",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/rVZrDthBKCabfqef9",
      "href": "https://food.grab.com/id/id/restaurant/kopi-kenangan-ruko-edi-sabara-kendari-delivery/6-C3MUN36TPELAUE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 18,
      "foto": "/restoran/mixue.png",
      "nama": "Mixue",
      "kategori": "warkop",
      "tag": "Teh, Es Krim, Minuman",
      "rate": "4,7",
      "jarak": "3,4",
      "waktu": 11,
      "gmaps": "https://goo.gl/maps/MJM6pnuYpretCdBh7",
      "href": "https://food.grab.com/id/id/restaurant/mixue-bende-delivery/6-C33JDFDCRPEXTE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 19,
      "foto": "/restoran/saranani.png",
      "nama": "RM Padang Saranani",
      "kategori": "sultra",
      "tag": "Khas Padang",
      "rate": "4,7",
      "jarak": "1,3",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/LDar2Dhbx2KDJ4Da6",
      "href": "https://food.grab.com/id/id/restaurant/rm-padang-saranani-korumba-delivery/6-CZCHPBNKGVADUA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 20,
      "foto": "/restoran/sederhana.png",
      "nama": "RM Padang Sederhana",
      "kategori": "sultra",
      "tag": "Khas Padang",
      "rate": "4,8",
      "jarak": 3,
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/c4KLj24fM9kxHCgX9",
      "href": "https://food.grab.com/id/id/restaurant/rm-padang-sederhana-raya-3-korumba-delivery/6-C2AGNAUFGX5ZR6",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 21,
      "foto": "/restoran/awal.png",
      "nama": "Martabak Bang Awal",
      "kategori": "cemilan",
      "tag": "Martabak, Terang Bulan",
      "rate": "4,8",
      "jarak": "0,2",
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/pWwEDXRTP1BRLohB8",
      "href": "https://food.grab.com/id/id/restaurant/martabak-bang-awal-korumba-delivery/IDGFSTI000031ll",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 22,
      "foto": "/restoran/ciuciu.png",
      "nama": "Martabak Ciu Ciu",
      "kategori": "cemilan",
      "tag": "Martabak, Terang Bulan",
      "rate": "4,7",
      "jarak": "0,9",
      "waktu": 6,
      "gmaps": "https://www.google.com/maps/place/Martabak+ciu+ciu/@-3.9688915,122.5248856,17z/data=!4m6!3m5!1s0x2d98f362f184a151:0x590bccba058394b7!8m2!3d-3.9697571!4d122.5228769!16s%2Fg%2F11j0q3hmtm?coh=164777&entry=tt",
      "href": "https://food.grab.com/id/id/restaurant/martabak-ciu-ciu-syech-yusuf-delivery/6-CYWFJXNTNX4WME" ,
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 23,
      "foto": "/restoran/richo.png",
      "nama": "Rich-O Donuts and Cafe",
      "kategori": "cemilan",
      "tag": "Donat, Aneka Kue, Aneka Nasi",
      "rate": "4,7",
      "jarak": "3,2",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/ryUsaqgxwFRQ2LdL7",
      "href": "https://food.grab.com/id/id/restaurant/rich-o-donuts-cafe-korumba-delivery/IDGFSTI0000366a",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 24,
      "foto": "/restoran/bangreza.png",
      "nama": "Nasi Uduk Bang Reza",
      "kategori": "aneka",
      "tag": "Nasi Uduk, Ketoprak, Cemilan",
      "rate": "4,8",
      "jarak": "1,1",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/BUEJZrRUVyYcTzqj9",
      "href": "https://food.grab.com/id/id/restaurant/nasi-uduk-bang-reza-korumba-delivery/IDGFSTI000038yc",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 25,
      "foto": "/restoran/kinkaku.png",
      "nama": "Kin Kaku Japanese Resto",
      "kategori": "grill",
      "tag": "All You Can Eat, Khas Jepang, Grill",
      "rate": "4,5",
      "jarak": "0,7",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/cM9pD5LRbofWTVdo8",
      "href": "https://food.grab.com/id/id/restaurant/kin-kaku-japanese-resto-korumba-delivery/6-C3CUNNMBARBJFE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 26,
      "foto": "/restoran/razzo.png",
      "nama": "Razzo Casual & Comfort Dining",
      "kategori": "grill",
      "tag": "Steak, Pizza dan Pasta",
      "rate": "3,1",
      "jarak": "3,2",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/yPvkvwKrmqeRyg5T8",
      "href": "https://food.grab.com/id/id/restaurant/razzo-casual-comfort-dining-korumba-delivery/6-C3CXCBXFJN3DBA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 27,
      "foto": "/restoran/joko.png",
      "nama": "Sari Laut Mas Joko",
      "kategori": "seafood",
      "tag": "Seafood, Ayam",
      "rate": "4,3",
      "jarak": "0,5",
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/B4rpjgUHFJQpjnoA6",
      "href": "https://food.grab.com/id/id/restaurant/sari-laut-mas-joko-suroboyo-99-korumba-delivery/6-CZMWE2LJE3KCTN",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 28,
      "foto": "/restoran/cindy.png",
      "nama": "Sari Laut Mbak Cindy",
      "kategori": "seafood",
      "tag": "Seafood, Ayam",
      "rate": "4,7",
      "jarak": "0,8",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/T8TwRakD3c5LjJT29",
      "href": "https://food.grab.com/id/id/restaurant/sari-laut-mbak-cindy-lahundape-delivery/6-C3BVVU4WCTXKCE",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 29,
      "foto": "/restoran/sunday.png",
      "nama": "Sunday Dessert",
      "kategori": "aneka",
      "tag": "Ayam, Aneka Nasi, Cemilan, Es Krim",
      "rate": "4,8",
      "jarak": "0,7",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/rCHWQTgot4c2LUD28",
      "href": "https://food.grab.com/id/id/restaurant/sunday-dessert-korumba-delivery/6-C2DANCJEGA5UVN",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 30,
      "foto": "/restoran/senen.png",
      "nama": "Bakso Pasar Senen",
      "kategori": "bakso",
      "tag": "Bakso, Bakmi",
      "rate": "4,8",
      "jarak": "1,2",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/kJf5TDRxpDywdyCHA",
      "href": "https://food.grab.com/id/id/restaurant/bakso-pasar-senen-syech-yusuf-delivery/6-C2AXLCL2CLNJGN",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 31,
      "foto": "/restoran/moungga.png",
      "nama": "Moungga",
      "kategori": "aneka",
      "tag": "Aneka Nasi, Ayam, Mi Ayam",
      "rate": "4,7",
      "jarak": "0,4",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/y16xHrNZADudonPd9",
      "href": "https://food.grab.com/id/id/restaurant/cafe-moungga-korumba-delivery/6-C24XCXWBAPKEWA",
      "tombol": "Pesan Sekarang"
    },
    {
      "id": 32,
      "foto": "/restoran/pangsit.png",
      "nama": "Mie Pangsit 99",
      "kategori": "bakso",
      "tag": "Bakmi, Mi Ayam",
      "rate": "4,4",
      "jarak": "1,4",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/5GiHz8aVjUx3s14P7",
      "href": "https://food.grab.com/id/id/restaurant/mie-pangsit-99-lahundape-delivery/6-C3LTGA2VWBCKEX",
      "tombol": "Pesan Sekarang"
    }
  ]

export function Restoran () {
    const [selectedCategory, setSelectedCategory] = useState<string | []>([]);
    const [filteredresto, setFilteredData] = useState(resto);
  
    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const category = event.target.value;
      setSelectedCategory(category);
  
      if (!category) {
        setFilteredData(resto);
        return;
      }
  
      setFilteredData(resto.filter(item => item.kategori === category));
    };
  
  return (
    <div className="mt-6">
        <p className="mb-2 text-sm text-gray-400 dark:text-gray-200">Tampilkan berdasarkan kategori:</p>
        <div>
            <select className="mb-3 text-sm px-4 border shadow-sm border-gray-400 rounded appearance-none bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:shadow-outline" 
            onChange={handleFilter} value={selectedCategory || ""}>
                <option value="">Semua</option>
                <option value="sultra">Makanan Khas</option>
                <option value="seafood">Hidangan Laut</option>
                <option value="fast">Cepat Saji</option>
                <option value="bakso">Bakso/Bakmi</option>
                <option value="aneka">Aneka Masakan</option>
                <option value="grill">Steak & Grill</option>
                <option value="cemilan">Cemilan</option>
                <option value="warkop">Warung Minum/Kafe</option>
            </select>
        </div>
        <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
            <div className="mt-2 grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
                {filteredresto.map(item => (
                    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <Image className="rounded-t-lg" width="630" height="420" src={item.foto} alt="claro" />
                    </a>
                
                    <div className="p-5">
                        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                            <div className="mb-1 flex items-center justify-between align-middle"> 
                            <p className="font-normal text-xstext-gray-700 dark:text-white"> 
                                {item.tag}</p>
                            </div>
                    <div className="mb-1 flex items-center justify-between align-middle"> 
                        <p className="font-normal text-sm text-gray-700 dark:text-white"> 
                        <StarIcon className="flex-shrink-0 h-6 w-6 text-yellow-500 inline-flex" aria-hidden="true"/> {item.rate} <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 inline-flex" aria-hidden="true"/> {item.jarak} km • {item.waktu} mnt</p>
                    </div>
                    <div className="flex items-center justify-between align-middle">
                    <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                    Lihat Peta →</span></a></div>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {item.tombol}</a>
                </div>
            </div>
            ))}
        </div>
        <p className='text-xs mt-12'>Sumber data: GrabFood, GoFood, TripAdvisor</p>
    </div>
    </div>
  );
};