'use client';

const AIFinance = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 2400, expense: 1800, profit: 600 },
    { month: 'Feb', revenue: 3200, expense: 2100, profit: 1100 },
    { month: 'Mar', revenue: 2800, expense: 1900, profit: 900 },
    { month: 'Apr', revenue: 4100, expense: 2500, profit: 1600 },
    { month: 'May', revenue: 3800, expense: 2300, profit: 1500 },
    { month: 'Jun', revenue: 4500, expense: 2800, profit: 1700 }
  ];

  const financialMetrics = [
    { label: 'Total Revenue', value: 'Rp 25.8M', change: '+12.5%', positive: true },
    { label: 'Net Profit', value: 'Rp 8.4M', change: '+8.2%', positive: true },
    { label: 'Total Orders', value: '1,247', change: '+15.3%', positive: true },
    { label: 'Avg Order Value', value: 'Rp 185K', change: '-2.1%', positive: false }
  ];

  const topProducts = [
    { name: 'Jasa Pembuatan Website', sales: 'Rp 4.2M', percentage: 85 },
    { name: 'Risol Mayo', sales: 'Rp 3.1M', percentage: 65 },
    { name: 'Desain Grafis', sales: 'Rp 2.8M', percentage: 58 },
    { name: 'Les Matematika', sales: 'Rp 2.2M', percentage: 45 }
  ];

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">💰</span>
          AI Finance Dashboard
        </h2>
        
        {/* Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {financialMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
              <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.label}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.positive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue vs Expense (6 Bulan)</h3>
            <div className="space-y-3">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="w-8 text-sm font-medium text-gray-600">{data.month}</span>
                  <div className="flex-1 flex space-x-2">
                    <div className="flex-1 bg-blue-200 rounded-full h-4 relative">
                      <div 
                        className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${(data.revenue / 5000) * 100}%` }}
                      ></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {(data.revenue / 1000).toFixed(1)}M
                      </span>
                    </div>
                    <div className="flex-1 bg-red-200 rounded-full h-4 relative">
                      <div 
                        className="bg-red-600 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${(data.expense / 5000) * 100}%` }}
                      ></div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {(data.expense / 1000).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Expense</span>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Produk (Revenue)</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{product.name}</span>
                    <span className="text-sm font-bold text-gray-800">{product.sales}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${product.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🤖</span>
            <h3 className="text-lg font-semibold text-gray-800">AI Financial Insights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">💡 Rekomendasi</h4>
              <p className="text-sm text-gray-600">
                Fokus pada jasa pembuatan website karena memiliki margin profit tertinggi (65%). 
                Pertimbangkan untuk menaikkan harga Risol Mayo sebesar 8-10%.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-purple-800 mb-2">📈 Prediksi</h4>
              <p className="text-sm text-gray-600">
                Berdasarkan tren 6 bulan terakhir, revenue bulan depan diprediksi naik 7-12% 
                menjadi Rp 4.8M - Rp 5.1M.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFinance;
