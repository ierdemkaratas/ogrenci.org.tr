import React, { useState } from 'react';
import Products from '../api/Products.json';
import CategoryMenu from '../components/CategoryMenu'; // Yeni CategoryMenu bileşeni import edildi
import logo from '../assets/ty-web.svg';

const AnaSayfa = () => {

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false); // Menü durumu için state
  const featured = Products.slice(0, 6);

  return (
    <div className="bg-gray-50 h-full font-sans flex flex-col">

      {/* Header */}
      {/* <header className="bg-white shadow-md sticky top-0 z-10">
        <div class="flex absolute mt-22 left-84 items-center">
          <label class="toggle relative w-4 h-4 cursor-pointer flex flex-col gap-1.25" for="checkbox">
            <div id="bar1" className="bars w-full h-1 bg-black rounded-md duration-300"></div>
            <div id="bar2" className="bars w-full h-1 bg-black rounded-md duration-300"></div>
            <div id="bar3" className="bars w-full h-1 bg-black rounded-md duration-300"></div>
          </label>
          <span class="ml-2 text-md font-semibold">TÜM KATEGORİLER</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 pl-10 flex justify-between items-center">
          <img src="/ty-web.svg" className='w-35'></img>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer">Ana Sayfa</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer">Ürünler</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer">İletişim</a>
          </nav>
        </div>
      </header> */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Üst Bilgi Çubuğu (Top Bar) */}
        <div className="text-sm text-gray-600 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end space-x-4">
            <a href="#" className="hover:text-blue-600">İndirim Kuponlarım</a>
            <a href="#" className="hover:text-blue-600">Trendyol'da Satış Yap</a>
            <a href="#" className="hover:text-blue-600">Hakkımızda</a>
            <a href="#" className="hover:text-blue-600">Yardım & Destek</a>
          </div>
        </div>

        {/* Ana Header (Logo, Arama Çubuğu, Kullanıcı Menüsü) */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Trendyol Logo" className="h-8 md:h-15" /> {/* Logo boyutunu ayarlayın */}
          </div>

          {/* Arama Çubuğu */}
          <div className="flex-grow mx-4 max-w-xl relative">
            <input
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100 text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {/* Arama İkonu - Gerçek uygulamada SVG ikon kullanın */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Kullanıcı Menüsü (Giriş Yap, Favorilerim, Sepetim) */}
          <nav className=" items-center space-x-6 text-gray-700 text-sm whitespace-nowrap hidden md:flex">
            <a href="#" className="flex flex-col items-center hover:text-blue-600">
              {/* Giriş Yap İkonu */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Giriş Yap</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-blue-600">
              {/* Favorilerim İkonu */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Favorilerim</span>
            </a>
            <a href="#" className="flex flex-col items-center hover:text-blue-600">
              {/* Sepetim İkonu */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Sepetim</span>
            </a>
          </nav>
        </div>

        {/* Kategori Navigasyonu */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-hide relative"> {/* relative eklendi */}
            {/* TÜM KATEGORİLER (Hamburger Menü İkonu ile) */}
            <div
              className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
              onMouseEnter={() => {
                console.log('Mouse entered TÜM KATEGORİLER');
                setIsCategoryMenuOpen(true);
              }} // Fare üzerine gelince menüyü aç
              onMouseLeave={() => {
                console.log('Mouse left TÜM KATEGORİLER');
                setIsCategoryMenuOpen(false);
              }} // Fare ayrılınca menüyü kapat
            >
              <label className="toggle relative w-5 h-5 cursor-pointer flex flex-col justify-around">
                <input type="checkbox" id="checkbox" className="absolute opacity-0 w-full h-full" />
                <div id="bar1" className="bars w-full h-0.5 bg-gray-700 rounded-md transition-all duration-300"></div>
                <div id="bar2" className="bars w-full h-0.5 bg-gray-700 rounded-md transition-all duration-300"></div>
                <div id="bar3" className="bars w-full h-0.5 bg-gray-700 rounded-md transition-all duration-300"></div>
              </label>
              <span className="ml-2 text-base font-semibold text-gray-800">TÜM KATEGORİLER</span>
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full ml-1">Yeni</span>

              {/* Kategori Menüsü Bileşeni */}
              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 mt-0 z-50"> {/* top-full ile hemen altına, left-0 ile sola hizalı */}
                  <CategoryMenu />
                </div>
              )}
            </div>

            {/* Kategori Bağlantıları */}
            <nav className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
              <a href="#" className="hover:text-blue-600">Kadın</a>
              <a href="#" className="hover:text-blue-600">Erkek</a>
              <a href="#" className="hover:text-blue-600">Anne & Çocuk</a>
              <a href="#" className="hover:text-blue-600">Ev & Yaşam</a>
              <a href="#" className="hover:text-blue-600">Süpermarket</a>
              <a href="#" className="hover:text-blue-600">Kozmetik</a>
              <a href="#" className="hover:text-blue-600">Ayakkabı & Çanta</a>
              <a href="#" className="hover:text-blue-600">Elektronik</a>
              <a href="#" className="hover:text-blue-600">Çok Satanlar <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full ml-1">Yeni</span></a>
              <a href="#" className="hover:text-blue-600">Flaş Ürünler <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full ml-1">Yeni</span></a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      {/* <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Yeni Sezon Ürünleri</h2>
        <p className="text-lg mt-2 text-gray-600">Stiline tarz kat!</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Alışverişe Başla
        </button>
      </section> */}

      {/* Products */}
      <section className="mt-5 max-w-7xl mx-auto px-4 mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Öne Çıkan Ürünler</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                <p className="text-blue-600 font-bold">{product.price} TL</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">© 2025 Erdem. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

export default AnaSayfa;
