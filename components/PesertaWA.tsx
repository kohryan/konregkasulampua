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

  const phone =  ["08124862423", "081244072805", "081210619231", "0811435891", "085295480903","081353027288", "08124862423","081339293932","082157729457", "081342435496", "081384459263", "081355561922","081342357732","081317956195", "081244419278","085313507901","082312526636","081352656158","081352656158","082350570218","081323633446","081344444717","081343000043","082187538571", "081250053666", "081355387363", "082291985463", "085239772228","085216192938","08125782674","081349099330", "08112953666", "081230063006", "089630085881", "081806027400", "08125025036", "082125029807", "085241871002", "0811400427", "082344583333", "087716558874", "085242549012", "085242172696", "081340040652", "085241597926", "082130831573", "08125817497", "081346865072", "081349582879", "082115508834", "081341678899", "08114358200", "08114358200", "08114327929", "081213082400", "082195211563", "081340002183", "081340109599", "081319478920", "082346713317", "085755621792", "082345114110", "082345114110", "08124176498", "085340199646", "08121685031", "082158747495", "0811406671", "081317604401", "081254926735", "081341511657", "08125023015", "081242059475", "08125040252", "082157062625", "081328173156", "087815639119", "081521504475", "081521514722", "081215998679", "081347789041", "085348510523", "081344802429", "085244506683", "08114811001", "082156972220", "081258843701", "08567650302", "08164508282", "081347601140", "085244130119", "081344684850", "082134616069", "081344650113","082311259355"];

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
                    <p>- Jika Anda baru mengisi formulir peserta, mohon tunggu paling lama 10 menit kemudian refresh laman ini dan coba lagi</p>
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
