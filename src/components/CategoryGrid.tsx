'use client';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
}

interface CategoryGridProps {
  onCategoryClick?: (categoryId: string) => void;
}

const CategoryGrid = ({ onCategoryClick }: CategoryGridProps) => {
  const categories: Category[] = [
    {
      id: 'pakaian',
      name: 'Pakaian',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      id: 'makanan',
      name: 'Makanan',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.37-1.37z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
      hoverColor: 'hover:from-pink-500 hover:to-pink-700'
    },
    {
      id: 'aksesoris',
      name: 'Aksesoris',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      hoverColor: 'hover:from-yellow-500 hover:to-yellow-700'
    },
    {
      id: 'elektronik',
      name: 'Elektronik',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3v18h2l2-4h6l2 4h2V3H5zm8 14H7V5h6v12z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-green-400 to-green-600',
      hoverColor: 'hover:from-green-500 hover:to-green-700'
    },
    {
      id: 'olahraga',
      name: 'Olahraga',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600',
      hoverColor: 'hover:from-purple-500 hover:to-purple-700'
    },
    {
      id: 'lainnya',
      name: 'Lainnya',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      hoverColor: 'hover:from-indigo-500 hover:to-indigo-700'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
          Kategori
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${category.bgColor} ${category.hoverColor}`}>
                {category.icon}
              </div>
              <span className="text-xs font-medium text-gray-700 transition-colors text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
