import { ReactNode } from 'react';
import Navbar from './Navbar';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <Navbar />
      <main className="pb-20 md:pb-0">{children}</main>
      <BottomNavigation />
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tel-Commerce</h3>
              <p className="text-gray-300">
                Platform e-commerce khusus untuk mahasiswa Telkom University
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kategori</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Tugas Kuliah</li>
                <li>Bisnis Mahasiswa</li>
                <li>Jasa & Keahlian</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <p className="text-gray-300">
                Email: support@tel-commerce.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Tel-Commerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
