'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('Contoh@gmail.com');
  const [password, setPassword] = useState('123456');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect back to homepage
    router.push('/');
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login attempt');
  };

  return (
    <div className="min-h-screen bg-red-500 relative overflow-hidden">
      {/* Top curved section */}
      <div className="relative h-24 bg-red-500">
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 400 60" 
          preserveAspectRatio="none"
          style={{ height: '60px', display: 'block' }}
        >
          <path 
            d="M0,20 Q100,50 200,30 T400,20 L400,60 L0,60 Z" 
            fill="white"
            stroke="none"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="bg-white px-8 pb-8 relative -mt-1" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Logo */}
        <div className="flex justify-center mb-8 pt-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="TelCommerce Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-red-500">TelCommerce</span>
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Senang bertemu dengan Anda!
        </h1>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email"
              className="w-full px-4 py-3 border-2 border-red-300 rounded-full focus:outline-none focus:border-red-500 transition-colors placeholder-gray-600"
              required
            />
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan password"
                className="w-full px-4 py-3 border-2 border-red-300 rounded-full focus:outline-none focus:border-red-500 transition-colors pr-12 placeholder-gray-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me and forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
            </label>
            <span className="text-sm text-red-500 cursor-default">
              Lupa password?
            </span>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Atau</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border-2 border-red-300 text-gray-700 py-3 rounded-full font-medium hover:border-red-400 transition-colors flex items-center justify-center space-x-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>masuk dengan Google</span>
        </button>

        {/* Sign up link */}
        <div className="text-center mt-6">
          <p className="text-gray-600 mb-2">Belum punya akun?</p>
          <span className="text-red-500 font-medium cursor-default">
            Daftar sekarang
          </span>
        </div>
      </div>

      {/* Bottom curved section */}
      <div className="relative bg-white -mt-1">
        <svg 
          className="w-full" 
          viewBox="0 0 400 60" 
          preserveAspectRatio="none"
          style={{ height: '60px', display: 'block' }}
        >
          <path 
            d="M0,40 Q100,10 200,30 T400,40 L400,60 L0,60 Z" 
            fill="#ef4444"
            stroke="none"
          />
        </svg>
        <div className="bg-red-500 h-16 flex items-center justify-center -mt-1">
          <p className="text-white text-sm">Copyright by TelCommerce</p>
        </div>
      </div>
    </div>
  );
}
