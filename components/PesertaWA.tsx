import React, { useState } from "react";
import { useRouter } from 'next/router'


export function Peserta() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const playSound = () => {
    const audio = new Audio("/error.mp3");
    audio.play();
  };

  const phone =  ["08115912180","081284643265","081355444622","081349099330","08112953666","081230063006","089630085881","081806027400","08125025036"];

  const submitForm = (e) => {
    e.preventDefault()
    if (password.trim() === '') {
      setWarning("Please enter a password");
      playSound();
    } else if (!phone.includes(password)) {
      setWarning("Incorrect password");
      playSound();
    } else {
      setWarning("");
      router.push("https://chat.whatsapp.com/EhWJcq8cMr6GeT7G9IRIQB");
    }
  };

  const clearWarning = () => {
    setWarning("");
  };

  return (
    <>
                {warning && 
                  <div role="alert">
                  <div className="bg-red-500 text-sm text-white font-bold rounded-t px-4 py-2">
                    Peringatan!
                  </div>
                  <div className="border border-t-0 text-sm border-red-400 rounded-b bg-red-100 px-4 py-1 text-red-700">
                    <p>- Nomor HP tidak boleh kosong!</p>
                    <p>- Nomor HP yang Anda Masukkan Tidak Ditemukan, Silakan Coba Lagi!</p>
                  </div>
                  <audio src="error.mp3" autoPlay />
                </div>
                }
                <form onClick={clearWarning} onSubmit={submitForm}>
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
