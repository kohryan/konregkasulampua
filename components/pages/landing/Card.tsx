import { FireKalimantan } from "./FlameKalimantan";
import { FireSulawesi } from "./FlameSulawesi";
import { FireMaluku } from "./FlameMaluku";
import { FirePapua } from "./FlamePapua";
import { FadeIn } from "../home-shared/FadeIn";

export function Card() {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 mt-12 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 mx-auto mb-0">
                
            <FadeIn delay={0.1}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center col-span-2">
                        <div className="relative w-20 h-20 mr-4"> <FireKalimantan /> </div>
                    </div>
                    <div className="p-5 text-center justify-center">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Info Konreg</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Jadwal, lokasi, materi, narasumber, dll.</p>
                        <a href="/kasulampua" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center col-span-2">
                        <div className="relative w-20 h-20 mr-4"> <FireSulawesi /> </div>
                    </div>
                    <div className="p-5 text-center justify-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Info Akomodasi</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hotel/penginapan, transportasi, rumah makan, dll.</p>
                        <a href="/akomodasi" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.3}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center col-span-2">
                        <div className="relative w-20 h-20 mr-4"> <FireMaluku /> </div>
                    </div>
                    <div className="p-5 text-center justify-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Info Wisata</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Tempat wisata, kuliner daerah, toko oleh-oleh, dll.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.4}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center col-span-2">
                        <div className="relative w-20 h-20 mr-4"> <FirePapua /> </div>
                    </div>
                    <div className="p-5 text-center justify-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hubungi Kami</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">FAQ dan kontak panita untuk informasi lainnya.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </FadeIn>
                
            </div>
        </div>
    )
}