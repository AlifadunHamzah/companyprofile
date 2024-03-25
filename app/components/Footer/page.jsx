import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="p-6 text-white bg-blue-800">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium text-3xl">Inspire Better Living</h2>
            <div className="flex flex-col space-y-2 text-sm dark:dark:text-gray-400">
              <div className="text-2xl">
                <span rel="noopener noreferrer " href="#">
                  Address
                </span>
              </div>
              <div className="text-base py-3 font-medium">
                <span rel="noopener noreferrer" href="#">
                  Office: Jl.S.Parman Tanjung Duren Selatan, Grogol
                  Petamburan,APL Tower Unit T8, 7th Floor, West Jakarta, DKI
                  jakarta Indonesia,
                </span>
              </div>
              <div className="text-base py-3">
                <span rel="noopener noreferrer" href="#">
                  Fspanctory: TOA Coating Indonesia, PT,Kawasan Industri
                  Millenium Blok F1, Peusar,Kec. Panongan,Kabupaten
                  Tangeran,Banten 15710
                </span>
              </div>
              <div className="text-2xl">
                <span rel="noopener noreferrer" href="#">
                  Contact Us
                </span>
              </div>
              <div className="text-base">
                <a rel="noopener noreferrer" href="#">
                  Telp:(+62) 21-29034458-61
                </a>
              </div>
              <div className="text-base">
                <a rel="noopener noreferrer" href="#">
                  Fax: (+62) 21-29034462
                </a>
              </div>
              <div className="text-base">
                <a rel="noopener noreferrer" href="#">
                  WhatsApp: 082112674779
                </a>
              </div>
              <div className="text-base">
                <a rel="noopener noreferrer" href="#">
                  Email: cs.mkt@toagroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:dark:text-gray-400">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer