'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch, 
  placeholder = "Cari produk, jasa, atau layanan..." 
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-10 text-gray-900 bg-white rounded-full border-0 shadow-lg focus:ring-4 focus:ring-white/50 focus:outline-none text-sm placeholder-gray-400"
        />
        <button 
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg transform hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
