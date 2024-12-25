import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex w-full  mx-auto flex-col  bg-hytam">
      <div className="flex flex-wrap w-full md:w-10/12 mx-auto">
        <div className="w-11/12 md:w-1/3 mx-auto">
          <h1 className="px-2 mt-6 text-lg font-semibold md:text-xl text-gray-100">
            Waktu Beroperasi
          </h1>
          <hr className="w-48 mx-2  border-primary" />
          <p className="px-2 mt-4 text-gray-100">
            Senin-Jumat: 08.00-17.00
            <br />
            Sabtu-Minggu: 09.00-15.00
          </p>
        </div>
        <div className="w-11/12 md:w-1/3 mx-auto">
          <h1 className="px-2 mt-4 text-lg md:text-lg font-semibold  text-gray-100">
            Tentang Opak Sampeu Sutra
          </h1>
          <hr className="mx-2 w-72 border-primary" />
          <p className="px-2 mt-4 text-gray-100">
            Opak Sampeu didirikan pada November 2022 oleh seorang lulusan
            program tata boga yang berinovasi menciptakan opak singkong dengan
            tekstur lebih tebal. Usaha ini dimulai melalui kolaborasi bersama
            tantenya yang berdomisili di Bogor.
            <br />
            <br />
            Pada awalnya, produksi hanya mencapai 7 kilogram per bulan dengan
            tiga varian rasa. Saat ini, penjualan telah berkembang pesat hingga
            mencapai 100 kotak per hari dan melibatkan 22 pekerja. Selain opak,
            produk lainnya yang turut dipasarkan mencakup kacang noga, bastik,
            dan pisang aroma.
          </p>
        </div>
        <div className="md:w-1/3 w-11/12 mx-auto">
          <h1 className="px-2 mt-6 text-lg md:text-lg font-semibold text-gray-100">
            Hubungi Kami
          </h1>
          <hr className="w-40 mx-2 border-primary" />

          <p className="px-2 mt-4 text-gray-100">
            <a
              href="https://www.google.com/maps/search/?api=1&query=KOMP.+POLRI+SUKAGALIH+NO.1,+Desa+Kelurahan+Cipedes,+Kec.+Sukajadi,+Kota+Bandung,+Provinsi+Jawa+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:underline"
            >
              KOMP. POLRI SUKAGALIH NO.1, Desa/Kelurahan Cipedes, Kec. Sukajadi,
              Kota Bandung, Provinsi Jawa Barat
            </a>
            <br />
            <a
              href="https://wa.me/6282129091953"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:underline"
            >
              Telp: +62 821-2909-1953
            </a>
            <br />
            <a
              href="mailto:opaksampeusutra@gmail.com"
              className="hover:text-blue-400 hover:underline"
            >
              Email: opaksampeusutra@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer className="p-4 mt-6 text-center text-white bg-hytam">
        <p>&copy; 2024 Opak Sampeu Sutra.</p>
      </footer>
    </div>
  );
};

export default Footer;
