import React from 'react'

const ProductService1 = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/20/435b4a29-916d-4f75-bb1c-db485ed74d05.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <img
              src="https://media.monotaro.id/mid01/big/Bahan%20Bangunan%2C%20Perlengkapan%20Rumah%20%26%20Cat/Produk%20Cat/Cat%2C%20Pernis/Cat%20Penutup/TOA%20Cat%20Tembok%20Eksterior%20NanoShield%20Sheen%202_5L/TOA%20Cat%20Tembok%20Eksterior%20NanoShield%20Sheen%202_5L%20EN953%20Dove%201pc/l1S022410757-1.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Toa Paint Primer & Nano Shield
              </h1>
              <p className="py-6">
                Toa Paint Primer adalah solusi terbaik untuk pengalaman melukis
                yang mulus dan profesional. Formula primer kami yang canggih
                memberikan daya lekat yang luar biasa, permukaan yang halus, dan
                perlindungan tahan lama untuk dinding Anda.
              </p>
              <p className="py-10">
                Toa Paint Nano Shield memberikan perlindungan ekstra pada tembok
                anda yang luar biasa terhadap berbagai faktor eksternal seperti
                cuaca, kotoran, dan sinar UV. Formula nano shield kami
                menghasilkan lapisan yang halus dan tahan lama, sehingga
                melindungi permukaan dari goresan, noda, dan kerusakan lainnya.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductService1