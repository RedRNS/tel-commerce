'use client';

const AITrend = () => {
  const trendData = [
    {
      platform: 'Reddit',
      icon: '🔴',
      trend: 'AI Tools for Students',
      engagement: '12.5k upvotes',
      description: 'Mahasiswa mulai menggunakan AI untuk membantu tugas kuliah dan riset.',
      confidence: 92
    },
    {
      platform: 'YouTube',
      icon: '📺',
      trend: 'Tutorial Programming',
      engagement: '2.3M views',
      description: 'Video tutorial coding dengan AI assistant trending hari ini.',
      confidence: 88
    },
    {
      platform: 'X (Twitter)',
      icon: '🐦',
      trend: '#StudentLife',
      engagement: '45.2k tweets',
      description: 'Diskusi tentang kehidupan mahasiswa dan tips produktivitas.',
      confidence: 85
    },
    {
      platform: 'Facebook',
      icon: '📘',
      trend: 'Online Business',
      engagement: '8.7k shares',
      description: 'Tren bisnis online untuk mahasiswa sedang populer.',
      confidence: 79
    },
    {
      platform: 'TikTok',
      icon: '🎵',
      trend: 'Study Tips',
      engagement: '1.8M likes',
      description: 'Video tips belajar efektif viral di kalangan pelajar.',
      confidence: 94
    }
  ];

  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="text-3xl mr-3">📊</span>
          AI Trend Analysis
        </h2>
        <p className="text-gray-600 mb-6">
          Analisis tren real-time dari berbagai platform media sosial hari ini
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendData.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <span className="font-semibold text-gray-800">{item.platform}</span>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  {item.confidence}% confident
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.trend}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-medium text-sm">{item.engagement}</span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <h3 className="font-semibold text-yellow-800">Insight Hari Ini</h3>
              <p className="text-yellow-700 text-sm">
                Tren AI tools dan tutorial programming sedang naik 45% dari minggu lalu. 
                Peluang besar untuk produk edukasi dan jasa programming!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrend;
