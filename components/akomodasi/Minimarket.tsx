import Image from 'next/image'

const minimarket = [
    {
      "id": 1,
      "nama": "Fiesly Mart",
      "jarak": 1,
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/QGGbncbMcQjUULCH9"
    },
    {
      "id": 2,
      "nama": "Luwu Mart",
      "jarak": "0,55",
      "waktu": 2,
      "gmaps": "https://goo.gl/maps/YDYQJKjVL2BZNAVz6"
    },
    {
      "id": 3,
      "nama": "Alisha Mart",
      "jarak": "1,4",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/18no6TAwuNcYWWjbA"
    },
    {
      "id": 4,
      "nama": "Indomaret Kemaraya",
      "jarak": "1,8",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/Ac57X83gYabJpz7V7"
    },
    {
      "id": 5,
      "nama": "Marina Mart",
      "jarak": "2,1",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/Ser71pTxQUUKpxrq6"
    },
    {
      "id": 6,
      "nama": "Toko Mus 24 Jam",
      "jarak": "2,1",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/izRFfWjtMEoB1Grk9"
    },
    {
      "id": 7,
      "nama": "Swalayan Surya",
      "jarak": "2,3",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/ZCBy9LPEwdV3McyaA"
    },
    {
      "id": 8,
      "nama": "Indomaret Laute",
      "jarak": "2,7",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/otoemugHQmboF1xj9"
    }
  ]

  const apotek = [
    {
      "id": 1,
      "nama": "Kiky Farma",
      "jarak": "1,2",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/Hg6nc9nXeW4RijaZA"
    },
    {
      "id": 2,
      "nama": "Apotek Qgiyo",
      "jarak": "1,3",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/iQGaJKyukmJf1TFw9"
    },
    {
      "id": 3,
      "nama": "Ade Farma",
      "jarak": "1,7",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/4G7Ni4RTEAfGfWmR7"
    },
    {
      "id": 4,
      "nama": "Rezky Farma",
      "jarak": "1,5",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/vAtvmGcRKb2sm9bq7"
    },
    {
      "id": 5,
      "nama": "Javieer Farma",
      "jarak": "1,6",
      "waktu": 5,
      "gmaps": "https://goo.gl/maps/EapLTHAtPzeB39rYA"
    },
    {
      "id": 6,
      "nama": "Kimia Farma Kartika",
      "jarak": "2,2",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/LM7PezrdheSSAYge9"
    }
  ]

  const oleholeh = [
    {
      "id": 1,
      "nama": "Mete Mubaraq",
      "jarak": 1,
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/KB2kBzm5SXht29Gy7"
    },
    {
      "id": 2,
      "nama": "Toko Sinar Mete",
      "jarak": "0,85",
      "waktu": 3,
      "gmaps": "https://goo.gl/maps/m5LSCCsJZzSYfV5c9"
    },
    {
      "id": 3,
      "nama": "Bagea Sinar Fajar",
      "jarak": "1,2",
      "waktu": 6,
      "gmaps": "https://goo.gl/maps/rXYVsbNcWw3YNsyb6"
    },
    {
      "id": 4,
      "nama": "Brownte Kendari",
      "jarak": "1,1",
      "waktu": 4,
      "gmaps": "https://goo.gl/maps/UDWMJdQRUGmoazEn8"
    },
    {
      "id": 5,
      "nama": "Athifah Oleh-Oleh",
      "jarak": "2,8",
      "waktu": 8,
      "gmaps": "https://goo.gl/maps/ovw9BAx7LE4qZZGMA"
    },
    {
      "id": 6,
      "nama": "Bravo Oleh-Oleh",
      "jarak": "1,9",
      "waktu": 7,
      "gmaps": "https://goo.gl/maps/xjnZRaMYtLhV8Z627"
    }
  ]

export function Minimarket() {
    return (
        
    <div className="max-w-2xl mx-auto py-2 px-2 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-2">
                
                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Minimarket</h5>
                    </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {minimarket.map((item) => (
                                <li key={item.id} className="py-0 sm:py-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image className="w-8 h-8 rounded-full" src="/minimarket/minimarket.png" width="384" height="384" alt="minimarket" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.nama}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.jarak} km • {item.waktu} menit
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                                             Lihat Peta →</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                </div>

                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Toko Oleh-Oleh</h5>
                    </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {oleholeh.map((item) => (
                                <li key={item.id} className="py-0 sm:py-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image width="384" height="384" className="w-8 h-8 rounded-full" src="/minimarket/oleholeh.png" alt="minimarket" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.nama}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.jarak} km • {item.waktu} menit
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                                             Lihat Peta →</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                </div>

                <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Apotek</h5>
                    </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {apotek.map((item) => (
                                <li key={item.id} className="py-0 sm:py-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <Image width="384" height="384" className="w-8 h-8 rounded-full" src="/minimarket/apotek.png" alt="minimarket" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.nama}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.jarak} km • {item.waktu} menit
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            <a href={item.gmaps} target="_blank" rel="noopener noreferrer"><span className="mb-3 inline-block text-sm font-medium text-blue-500">
                                             Lihat Peta →</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                </div>

        </div>
    </div>
    
    )
}