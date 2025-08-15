'use client';

import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const userProfile = {
    name: 'Monica Sari',
    email: 'monica.sari@email.com',
    phone: '+62 812-3456-7890',
    studentId: '123456789',
    university: 'Universitas Terbuka',
    major: 'Sistem Informasi',
    semester: '6',
    joinDate: 'Januari 2024',
    totalOrders: 12,
    totalSpent: 2450000,
    memberLevel: 'Gold Member',
    points: 1250
  };

  const recentActivity = [
    { action: 'Pesanan selesai', detail: 'Jasa Pembuatan Website Portofolio', date: '12 Aug 2025', icon: '✅' },
    { action: 'Review diberikan', detail: 'Desain Grafis untuk Media Sosial (5⭐)', date: '11 Aug 2025', icon: '⭐' },
    { action: 'Pesanan baru', detail: 'Risol Mayo Premium x10', date: '10 Aug 2025', icon: '📦' },
    { action: 'Wishlist ditambah', detail: 'Les Privat Matematika', date: '09 Aug 2025', icon: '❤️' }
  ];

  const achievements = [
    { title: 'First Purchase', description: 'Pesanan pertama berhasil', date: 'Jan 2024', icon: '🎉' },
    { title: 'Loyal Customer', description: '10+ pesanan selesai', date: 'Jul 2025', icon: '🏆' },
    { title: 'Review Master', description: '20+ review diberikan', date: 'Aug 2025', icon: '⭐' },
    { title: 'Gold Member', description: 'Total belanja 2M+', date: 'Aug 2025', icon: '🥇' }
  ];

  const menuItems = [
    { id: 'profile', label: 'Profil', icon: '👤' },
    { id: 'activity', label: 'Aktivitas', icon: '📈' },
    { id: 'achievements', label: 'Pencapaian', icon: '🏆' },
    { id: 'settings', label: 'Pengaturan', icon: '⚙️' }
  ];

  const renderProfileSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Basic Info */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Dasar</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              value={userProfile.name}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              value={userProfile.email}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">No. Telepon</label>
            <input 
              type="tel" 
              value={userProfile.phone}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informasi Akademik</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">NIM</label>
            <input 
              type="text" 
              value={userProfile.studentId}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Universitas</label>
            <input 
              type="text" 
              value={userProfile.university}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Jurusan</label>
              <input 
                type="text" 
                value={userProfile.major}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Semester</label>
              <input 
                type="text" 
                value={userProfile.semester}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{userProfile.totalOrders}</div>
          <div className="text-sm text-blue-800">Total Pesanan</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">Rp {(userProfile.totalSpent / 1000000).toFixed(1)}M</div>
          <div className="text-sm text-green-800">Total Belanja</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">{userProfile.points}</div>
          <div className="text-sm text-yellow-800">Poin Reward</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-purple-600">🥇 {userProfile.memberLevel}</div>
          <div className="text-sm text-purple-800">Status Member</div>
        </div>
      </div>
    </div>
  );

  const renderActivitySection = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h3>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">{activity.action}</h4>
              <p className="text-sm text-gray-600">{activity.detail}</p>
            </div>
            <div className="text-sm text-gray-500">{activity.date}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievementsSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-3">
            <div className="text-3xl">{achievement.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
          <div className="text-xs text-gray-500">Diraih pada {achievement.date}</div>
        </div>
      ))}
    </div>
  );

  const renderSettingsSection = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferensi</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Notifikasi Email</h4>
              <p className="text-sm text-gray-600">Terima update via email</p>
            </div>
            <input type="checkbox" className="w-5 h-5 text-red-600" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Notifikasi Push</h4>
              <p className="text-sm text-gray-600">Notifikasi di perangkat</p>
            </div>
            <input type="checkbox" className="w-5 h-5 text-red-600" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Promosi & Penawaran</h4>
              <p className="text-sm text-gray-600">Info promo terbaru</p>
            </div>
            <input type="checkbox" className="w-5 h-5 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Keamanan</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg transition-colors">
            🔐 Ubah Password
          </button>
          <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg transition-colors">
            📱 Verifikasi 2 Langkah
          </button>
          <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-lg transition-colors">
            🔓 Perangkat Terpercaya
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Zona Bahaya</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
            🗑️ Hapus Semua Data
          </button>
          <button className="w-full text-left p-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
            ❌ Hapus Akun
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden">
              <Image
                src="/images/profile-monica.jpg"
                alt="Monica Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {userProfile.name}
              </h1>
              <p className="text-sm md:text-base text-red-50">
                Member sejak {userProfile.joinDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-1 min-w-[90px] py-3 px-2 sm:px-4 text-center font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-red-600 bg-red-50 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg mb-1">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="min-h-[400px]">
          {activeSection === 'profile' && renderProfileSection()}
          {activeSection === 'activity' && renderActivitySection()}
          {activeSection === 'achievements' && renderAchievementsSection()}
          {activeSection === 'settings' && renderSettingsSection()}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
