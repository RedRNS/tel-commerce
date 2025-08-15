'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryGrid from '@/components/CategoryGrid';
import { mockProducts, Product } from '@/data/mockData';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = ['all', 'Tugas Kuliah', 'Bisnis Mahasiswa', 'Jasa & Keahlian'];
  const exclusiveProducts = mockProducts.filter(product => product.isBoosted);
  
  const filteredProducts = selectedCategory === 'all' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: Implement search functionality
    console.log('Searching for:', query);
  };

  const handleCategoryClick = (categoryId: string) => {
    // TODO: Map category IDs to product categories
    console.log('Category clicked:', categoryId);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 whitespace-nowrap overflow-hidden">
            Selamat datang, Monica!
          </h1>
          <p className="text-sm md:text-base mb-4 text-red-50">
            Mau belanja apa hari ini?
          </p>
          
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Categories Section */}
      <CategoryGrid onCategoryClick={handleCategoryClick} />

      {/* Exclusive Products Section */}
      {exclusiveProducts.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Produk Exclusive
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {exclusiveProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promo Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-lg font-bold text-red-500 mb-3">
              Promo
            </h2>
            <div className="space-y-3">
              <div className="bg-red-500 rounded-xl p-3 text-white relative">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">Dapatkan Penawaran terbatas!</span>
                  <div className="bg-white/20 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-2 bg-white rounded-lg p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-gray-800 font-medium text-xs">Dapatkan sebelum waktu habis!</span>
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center flex-shrink-0">
                      ⏰ 11:59:30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section id="categories" className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Jelajahi Produk
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category, index) => {
              const colors = [
                'bg-gradient-to-r from-blue-500 to-blue-600 text-white', // all
                'bg-gradient-to-r from-green-500 to-green-600 text-white', // Tugas Kuliah
                'bg-gradient-to-r from-purple-500 to-purple-600 text-white', // Bisnis Mahasiswa
                'bg-gradient-to-r from-orange-500 to-orange-600 text-white' // Jasa & Keahlian
              ];
              const inactiveColors = [
                'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
                'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
                'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
                'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
              ];
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm border ${
                    selectedCategory === category
                      ? colors[index] || 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                      : inactiveColors[index] || 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                  }`}
                >
                  {category === 'all' ? 'Semua Kategori' : category}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
