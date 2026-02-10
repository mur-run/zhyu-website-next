import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('common.companyName')}
          </h1>
          <p className="text-lg text-gray-500 mb-2">{t('common.companyNameEn')}</p>
          <p className="text-xl text-purple-600 font-medium mb-8">
            {t('home.tagline')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              MURE Core
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            {t('home.featuredProduct')}
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-3xl font-bold text-white mb-4">MURE Core</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              {t('home.mureCoreDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('home.learnMore')}
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-gray-500 transition-colors"
              >
                {t('home.viewPricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Development</h3>
              <p className="text-gray-600">iOS & Android native app development services.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">Enterprise websites, e-commerce, management systems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance</h3>
              <p className="text-gray-600">Professional system operations and technical support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
