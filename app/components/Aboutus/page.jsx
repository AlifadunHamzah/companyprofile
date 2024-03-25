import React from 'react'
import Link from 'next/link';

const Aboutus
 = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://toagroup.co.id/wp-content/uploads/2021/12/f9dc9218-1edd-4b53-a047-2d0ef51c3181-1024x591.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold">SELAMAT DATANG DI</h1>
              <h1 className="mb-5 text-5xl font-bold">TOA CAT PAINT</h1>
              <p className="mb-5">
                Cat Toa Group, solusi sempurna untuk segala proyek cat Anda!
                Dengan formula inovatif kami, kami menawarkan cat tahan lama
                dengan hasil akhir yang mengagumkan. Dapatkan warna yang cerah
                dan tahan lama untuk interior maupun eksterior rumah Anda.
              </p>
              <button className="btn btn-secondary">Lihat Produk</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus
