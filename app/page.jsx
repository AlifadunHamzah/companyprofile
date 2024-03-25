import React from "react";

const Home = () => {
  return (
    <>
      <div className="pt-10 mx-auto max-w-screen-xl">
        <div className="text-center text-3xl font-bold">
          <h2>LATEST NEWS AND FEATURES IN INDONESIA</h2>
        </div>

        <div className="pt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <button className="border border-gray-300 bg-white text-black h-full flex flex-col justify-between rounded-lg overflow-hidden p-6">
            <div>
              <img src="https://laos.toagroup.com/wp-content/uploads/2023/02/exterior-hame-paint-must-be-durable-300x150.png" />
              <span className="font-bold text-xl hover:text-red-600">
                ToaGroup Paint
              </span>
              <p className="text-sm pt-2">
                Dibuat dengan formula khusus yang mengedepankan keawetan, cat
                ini mampu bertahan lama di bawah berbagai kondisi cuaca ekstrem
              </p>
            </div>
          </button>
          <button className="border border-gray-300 bg-white text-black h-full flex flex-col justify-between rounded-lg overflow-hidden p-6 ">
            <div>
              <img src="https://laos.toagroup.com/wp-content/uploads/2023/02/new-shade-green-1536x864.jpg" />
              <span className="font-bold text-xl hover:text-red-600">
                Jangan lewatkan!
              </span>
              <p className="text-sm pt-2">
                Nuansa cat interior dari TOA, untuk menyambut tahun 2024
                mendatang, hadir dengan contoh gambar ruang tamu, kamar tidur,
                sudut makan, area kerja, yang akan mengubah rumah Anda menjadi
                menjadi nyaman
              </p>
            </div>
          </button>
          <button className="border border-gray-300 bg-white text-black h-full flex flex-col justify-between rounded-lg overflow-hidden p-6">
            <div>
              <img src="https://toagroup.co.id/wp-content/uploads/2021/10/tabmenu3-1.jpg" />
              <span className="font-bold text-xl hover:text-red-600">
                Dapatkan inspirasi visual desain Interior dan Eksterior ini.
              </span>
              <p className="text-sm pt-2">
                Temukan katalog produk TOA yang Anda butuhkan sebelum Anda
                mengecat ulang rumah Anda..
              </p>
            </div>
          </button>
          <button className="border border-gray-300 bg-white text-black h-full flex flex-col justify-between rounded-lg overflow-hidden p-6">
            <div>
              <img src="https://toagroup.co.id/wp-content/uploads/2021/12/shortcut-1-300x225.png" />
              <span className="font-bold text-xl hover:text-red-600">
                Pilih warna sesukamu
              </span>
              <p className="text-sm pt-2">
                Warnai hidupmu dengan kebebasan pilihan warna! Dengan produk cat
                TOA Group, kamu bisa memilih warna sesuai dengan selera dan
                gayamu
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
