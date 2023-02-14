import React, { useState } from "react";
import { useRouter } from 'next/router'


export function Peserta() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault()
    if (password == "08115912180" || password == "081284643265" || password == "081355444622" || password == "081349099330" || password == "08112953666" || password == "081230063006") {
      router.push("https://chat.whatsapp.com/EhWJcq8cMr6GeT7G9IRIQB")
    }
  };

  return (
    <>
                <form onClick={submitForm}>
                  <div className="relative w-full mt-3 mb-3">
                    <input
                      type="text"
                      className="border px-3 py-3 placeholder-gray-300 text-gray-900 bg-white rounded-lg text-sm shadow border-blue-500 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nomor HP (WA) Terdaftar" value={password} onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center bg-blue-500 rounded-lg">
                    <input
                      className="text-white active:bg-blue-500 hover:bg-blue-600 text-sm font-medium px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit" value="Bergabung"
                    />
                  </div>
                </form>
    </>
  );
}
