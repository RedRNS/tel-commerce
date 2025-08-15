'use client';

import Layout from '@/components/Layout';
import AITrend from '../../components/AITrend';
import AIFinance from '../../components/AIFinance';

const AIPage = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Tel-AI Assistant
          </h1>
          <p className="text-sm md:text-base mb-2 text-red-50">
            Analisis tren dan keuangan dengan AI
          </p>
        </div>
      </section>

      {/* AI Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* AI Trend Section */}
        <AITrend />
        
        {/* AI Finance Section */}
        <AIFinance />
      </div>
    </Layout>
  );
};

export default AIPage;
