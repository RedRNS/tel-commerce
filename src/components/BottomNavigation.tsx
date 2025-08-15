'use client';

import Link from 'next/link';
import { useState } from 'react';

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
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      href: '/tel-ai',
      color: 'text-blue-500'
    },
    {
      id: 'ORDER',
      label: 'ORDER',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
        </svg>
      ),
      href: '/orders',
      color: 'text-green-500'
    },
    {
      id: 'RAFIQ',
      label: 'RAFIQ',
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
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
