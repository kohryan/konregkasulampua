import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'

export function HariPertama () {
    return (

<div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <Link href="/akomodasi/hotel" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">10.00 - 18.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Kedatangan Peserta (Check in dan Registrasi)</h5>
                 <div className="mb-1 flex items-center align-middle"> 
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><span className="inline-block text-sm font-medium text-blue-500"> Lihat Lokasi Hotel →</span> 
                </div>
            </Link>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">18.00 - 18.30 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">🔄 Istirahat dan Sholat</h5>
            </a>
        </div>
    </div>

    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">18.30 - 19.30 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">🛎️ Welcome Dinner</h5>
              <p className="mt-1 font-normal text-md opacity-80">(<b>Dresscode:</b> Batik/Tenun)</p>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">19.30 - 21.30 WITA </h1>
              </div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                High Level Meeting</h5>
                <div className="mb-3 flex items-center align-middle">  
                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">Ruang Tulip</h1>
                </div>
                <p className="mt-1 mb-6 font-normal text-md opacity-80">(<b>Dresscode:</b> Batik/Tenun)</p>
                <h5 className="mb-1 text-md font-normal tracking-tight text-gray-900 dark:text-white">
                - Evaluasi Pelaksanaan Hasil Kesepakatan Konreg PDRB Kalimantan dan Sulampua Tahun 2019</h5>
                <h5 className="mb-1 text-md font-normal tracking-tight text-gray-900 dark:text-white">
                - Tindak Lanjut Evaluasi dan Perumusan Kesepakatan Selanjutnya</h5>
                <h5 className="mb-6 text-md font-normal tracking-tight text-gray-900 dark:text-white">
                - Penentuan Tuan Rumah Konreg PDRB Kasulampua Selanjutnya</h5>
                <h5 className="mb-6 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Pimpinan Rapat:</h5>
                <div className="mt-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/buyung.png" alt="direktur" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="text-lg text-gray-900 dark:text-white">Buyung Airlangga, M.Bus.</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Direktur Neraca Pengeluaran BPS RI</p>
                    </dl>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/puji.png" alt="direktur" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="text-lg text-gray-900 dark:text-white">Puji Agus Kurniawan, S.Si., M.A.</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Direktur Neraca Produksi BPS RI</p>
                    </dl>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/robert.png" alt="Robert" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="text-lg text-gray-900 dark:text-white">J. Robert, ST, MT.</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Kepala Bappeda Sulawesi Tenggara</p>
                    </dl>
                </div>
                <p className="mt-6 font-normal text-sm text-gray-700 dark:text-gray-400"><b>Peserta Rapat:</b> Kepala BPS Provinsi, KPW BI Provinsi, Kepala Bappeda Provinsi, Tim Perumus dari BPS, BI, dan Bappeda</p>
                
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Review Website Kasulampua Pra Launching</h5>
                <div className="mb-3 flex items-center align-middle">  
                <MapPinIcon className="flex-shrink-0 h-6 w-6 text-red-500 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">Ruang Phinisi 1</h1>
                </div>
                <h5 className="mb-1 text-md font-normal tracking-tight text-gray-900 dark:text-white">
                - Pengenalan Website</h5>
                <h5 className="mb-6 text-md font-normal tracking-tight text-gray-900 dark:text-white">
                - Kontribusi Konten</h5>
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                Pimpinan Rapat:</h5>
                <div className="mt-2 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/fatoer.png" alt="direktur" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="text-lg text-gray-900 dark:text-white">Fatchur Rochman, SST., ME..</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Pranata Komputer Ahli Madya BPS Prov. Sulawesi Tenggara</p>
                    </dl>
                </div>
                <p className="mt-6 font-normal text-sm text-gray-700 dark:text-gray-400"><b>Peserta Rapat:</b> Peserta Inti (selain Kepala Satker), Perwakilan BPS RI, Tim Website dari BPS, BI, dan Bappeda</p>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">21.30 WITA - selesai </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">🔄 Istirahat</h5>
            </a>
        </div>
    </div>  

</div>
    )
}