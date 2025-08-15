'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image - ganti src ini dengan path logo Tel-Commerce yang sebenarnya */}
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
        {/* Placeholder logo - akan diganti dengan <Image> component */}
        <span className="text-red-600 text-xl font-bold">T</span>
        
        {/* Uncomment dan edit ini ketika logo sudah tersedia:
        <Image
          src="/images/telcommerce-logo.png"
          alt="Tel-Commerce Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        */}
      </div>
      <span className="text-white text-2xl font-bold">Tel-Commerce</span>
    </div>
  );
};

export default Logo;
