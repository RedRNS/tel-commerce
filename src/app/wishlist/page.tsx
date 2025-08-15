'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockData';

const WishlistPage = () => {
  // Data dummy wishlist - ambil beberapa produk dari mockProducts
  const [wishlistItems, setWishlistItems] = useState([
    mockProducts[0], // Jasa Pembuatan Website Portofolio
    mockProducts[2], // Desain Grafis untuk Media Sosial
    mockProducts[4], // Kaos Custom Design
    mockProducts[6], // Jasa Pengetikan Dokumen
  ]);

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Wishlist Saya
          </h1>
          <p className="text-sm md:text-base mb-2 text-red-50">
            Produk favorit yang ingin kamu beli
          </p>
        </div>
      </section>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {wishlistItems.length > 0 ? (
          <>
            {/* Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {wishlistItems.length} Item dalam Wishlist
                  </h2>
                  <p className="text-gray-600">
                    Total estimasi: Rp {wishlistItems.reduce((total, item) => total + item.price, 0).toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="text-4xl">❤️</div>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Tambah Semua ke Keranjang
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Bagikan Wishlist
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Wishlist Kosong</h2>
            <p className="text-gray-600 mb-6">
              Belum ada produk yang kamu suka? Yuk jelajahi katalog kami!
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Mulai Belanja
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
