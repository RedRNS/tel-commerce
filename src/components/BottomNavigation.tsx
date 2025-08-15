'use client';

import { useState } from 'react';
import Image from 'next/image';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('HOME');

  const navItems = [
    {
      id: 'HOME',
      label: 'HOME',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      href: '/',
      color: 'text-red-500'
    },
    {
      id: 'WISHLIST',
      label: 'WISHLIST',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      href: '/wishlist',
      color: 'text-pink-500'
    },
    {
      id: 'TEL-AI',
      label: 'TEL-AI',
      icon: (
        <Image 
          src="/images/ai-icon.png" 
          alt="AI Icon" 
          width={48} 
          height={48}
          className="w-12 h-12 object-contain"
        />
      ),
      href: '/ai',
      color: 'text-blue-500'
    },
    {
      id: 'ORDER',
      label: 'ORDER',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
        </svg>
      ),
      href: '/order',
      color: 'text-green-500'
    },
    {
      id: 'MONICA',
      label: 'MONICA',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      href: '/profile',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 cursor-pointer ${
              activeTab === item.id 
                ? `${item.color} font-semibold` 
                : 'text-gray-400'
            }`}
          >
            <div className={`${activeTab === item.id ? 'transform scale-110' : ''} transition-transform`}>
              {item.icon}
            </div>
            <span className="text-xs mt-1 truncate">
              {item.label}
            </span>
            {activeTab === item.id && (
              <div className={`w-1 h-1 rounded-full mt-1 ${item.color.replace('text-', 'bg-')}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
