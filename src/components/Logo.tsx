'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image - ganti src ini dengan path logo Tel-Commerce yang sebenarnya */}
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
        {/* Logo Image - ganti src ini dengan path logo Tel-Commerce yang sebenarnya */}
        <Image
          src="/images/logo.png"
          alt="Tel-Commerce Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        
        {/* Placeholder logo - akan diganti dengan <Image> component
        <span className="text-red-600 text-xl font-bold">TC</span>
        */}
      </div>
      <span className="text-white text-xl font-bold">Tel-Commerce</span>
    </div>
  );
};

export default Logo;
