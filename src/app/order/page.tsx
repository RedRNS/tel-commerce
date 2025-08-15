'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  const orderData = {
    active: [
      {
        id: 'ORD-001',
        date: '15 Aug 2025',
        status: 'Sedang Dikerjakan',
        statusColor: 'bg-blue-100 text-blue-800',
        vendor: 'Ahmad Coding',
        items: [
          { name: 'Jasa Pembuatan Website Portofolio', price: 750000, qty: 1 }
        ],
        total: 750000,
        estimatedCompletion: '20 Aug 2025',
        progress: 65
      },
      {
        id: 'ORD-002',
        date: '14 Aug 2025',
        status: 'Menunggu Pembayaran',
        statusColor: 'bg-yellow-100 text-yellow-800',
        vendor: 'Sari Kuliner',
        items: [
          { name: 'Risol Mayo Premium', price: 15000, qty: 10 }
        ],
        total: 150000,
        estimatedCompletion: '16 Aug 2025',
        progress: 0
      }
    ],
    completed: [
      {
        id: 'ORD-003',
        date: '10 Aug 2025',
        status: 'Selesai',
        statusColor: 'bg-green-100 text-green-800',
        vendor: 'Maya Design',
        items: [
          { name: 'Desain Grafis untuk Media Sosial', price: 250000, qty: 1 }
        ],
        total: 250000,
        completedDate: '12 Aug 2025',
        rating: 5
      },
      {
        id: 'ORD-004',
        date: '08 Aug 2025',
        status: 'Selesai',
        statusColor: 'bg-green-100 text-green-800',
        vendor: 'Budi Printing',
        items: [
          { name: 'Kaos Custom Design', price: 85000, qty: 2 }
        ],
        total: 170000,
        completedDate: '10 Aug 2025',
        rating: 4
      }
    ],
    cancelled: [
      {
        id: 'ORD-005',
        date: '05 Aug 2025',
        status: 'Dibatalkan',
        statusColor: 'bg-red-100 text-red-800',
        vendor: 'Rina Aksesoris',
        items: [
          { name: 'Kalung Handmade', price: 125000, qty: 1 }
        ],
        total: 125000,
        cancelReason: 'Dibatalkan oleh penjual'
      }
    ]
  };

  const tabs = [
    { id: 'active', label: 'Aktif', count: orderData.active.length },
    { id: 'completed', label: 'Selesai', count: orderData.completed.length },
    { id: 'cancelled', label: 'Dibatalkan', count: orderData.cancelled.length }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Sedang Dikerjakan': return '⚙️';
      case 'Menunggu Pembayaran': return '💰';
      case 'Selesai': return '✅';
      case 'Dibatalkan': return '❌';
      default: return '📦';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Pesanan Saya
          </h1>
          <p className="text-sm md:text-base mb-2 text-red-50">
            Kelola dan pantau semua pesananmu
          </p>
        </div>
      </section>

      {/* Order Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] py-3 px-2 sm:px-4 text-center font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-semibold">{tab.label}</span>
                  <span className="mt-1 bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {tab.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {orderData[activeTab as keyof typeof orderData].map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{order.id}</h3>
                  <p className="text-gray-600">{order.date} • {order.vendor}</p>
                </div>
                <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                    {getStatusIcon(order.status)} {order.status}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Bar for Active Orders */}
              {activeTab === 'active' && 'progress' in order && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{order.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>
                  {'estimatedCompletion' in order && (
                    <p className="text-sm text-gray-600 mt-2">
                      Estimasi selesai: {order.estimatedCompletion}
                    </p>
                  )}
                </div>
              )}

              {/* Rating for Completed Orders */}
              {activeTab === 'completed' && 'rating' in order && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Rating:</span>
                    <div className="flex">{renderStars(order.rating)}</div>
                  </div>
                  {'completedDate' in order && (
                    <p className="text-sm text-gray-600">
                      Selesai pada: {order.completedDate}
                    </p>
                  )}
                </div>
              )}

              {/* Cancel Reason */}
              {activeTab === 'cancelled' && 'cancelReason' in order && (
                <div className="mb-4">
                  <p className="text-sm text-red-600">
                    Alasan: {order.cancelReason}
                  </p>
                </div>
              )}

              {/* Order Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t">
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    Total: Rp {order.total.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="flex space-x-3 mt-3 sm:mt-0">
                  {activeTab === 'active' && (
                    <>
                      <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
                        Hubungi Penjual
                      </button>
                      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
                        Batalkan
                      </button>
                    </>
                  )}
                  {activeTab === 'completed' && (
                    <>
                      <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors">
                        Beli Lagi
                      </button>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                        Beri Review
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orderData[activeTab as keyof typeof orderData].length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Pesanan</h2>
            <p className="text-gray-600 mb-6">
              Mulai berbelanja dan lihat pesananmu di sini
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Mulai Belanja
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrderPage;
