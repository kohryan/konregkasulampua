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
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">14.00 - 18.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Check-in seluruh peserta</h5>
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
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">18.00 - 19.00 WITA </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">🔄 ISHOMA (Istirahat, Sholat, Makan)</h5>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">19.00 - 21.30 WITA </h1>
              </div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <h5 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white">
              🛎️ Jamuan Makan Malam</h5>
              <p className="mt-2 font-normal text-sm text-gray-700 dark:text-gray-400">(Sebelum pukul 19.00 WITA)</p>
                <div className="flex items-center space-x-4"></div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-6 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                Tindak Lanjut Dan Evaluasi Pelaksanaan Hasil Konreg PDRB Sulampua Tahun 2019 (High Level Meeting) dan Penentuan Tuan Rumah Konreg Selanjutnya</h5>
                <div className="mt-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                <Image className="rounded-full" width="64" height="64" src="#" alt="direktur" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Narasumber:</dd>
                        <dd className="text-lg text-gray-900 dark:text-white">Buyung Airlangga, M.Bus.</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Direktur Neraca Pengeluaran BPS RI</p>
                    </dl>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                       <Image className="rounded-full" width="64" height="64" src="/people/robert.png" alt="Robert" />
                    </div>
                    <dl className="ml-3 text-sm font-medium leading-4 text-left whitespace-no-wrap">
                        <dd className="mb-1 text-md font-bold text-gray-400 dark:text-gray-300">Moderator:</dd>
                        <dd className="text-lg text-gray-900 dark:text-white">J. Robert, ST, MT.</dd>
                        <p className="text-sm text-gray-400 dark:text-gray-300">Kepala Bappeda Sulawesi Tenggara</p>
                    </dl>
                </div>
                <p className="mt-6 font-normal text-sm text-gray-700 dark:text-gray-400">Peserta: Kepala BPS Provinsi, Ketua Tim Nerwilis, Bappeda, dan Kepala Perwakilan BI se-Kasulampua</p>
            </a>
        </div>
    </div>
    
    <div className="mt-3 grid grid-cols-1 gap-4">
        <div className="font-bold">    
            <a href="#" className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="mb-3 flex items-center align-middle">  
                <ClockIcon className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200 mr-1" aria-hidden="true"/><h1 className="font-semibold text-md text-gray-400 dark:text-gray-200">21.30 WITA - selesai </h1>
              </div><hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">🔄 Istirahat</h5>
            </a>
        </div>
    </div>  

</div>
    )
}