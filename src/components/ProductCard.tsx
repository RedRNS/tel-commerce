import { Product } from '@/data/mockData';
import ProductImage from './ProductImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatSold = (sold: number) => {
    if (sold >= 1000) {
      return `${(sold / 1000).toFixed(1)}k`;
    }
    return sold.toString();
  };

  // Define category colors
  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: string } = {
      'Tugas Kuliah': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800',
      'Bisnis Mahasiswa': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800',
      'Jasa & Keahlian': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
    };
    return categoryColors[category] || 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 h-[420px]">
      {product.isBoosted && (
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 absolute z-10 m-2 rounded-full shadow-md">
          ⭐ EXCLUSIVE
        </div>
      )}
        
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 h-[236px] flex flex-col justify-between">
          <div>
            <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 font-medium ${getCategoryColor(product.category)}`}>
              {product.category}
            </span>
            
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight h-[2.1rem] overflow-hidden">
              {product.name}
            </h3>
            
            <p className="text-gray-600 text-xs mb-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
            
            <p className="text-gray-500 text-xs mb-1 flex items-center">
              <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              {product.sellerName}
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <p className="text-red-600 font-bold text-sm mb-2">
              {formatPrice(product.price)}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-600 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">{formatSold(product.sold)} terjual</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
