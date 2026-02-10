import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function AboutPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about');

  const spirits = [
    { key: 'profession', icon: '💼' },
    { key: 'quick', icon: '⚡' },
    { key: 'quality', icon: '✨' },
    { key: 'passion', icon: '❤️' },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">首頁</Link>
          <span className="mx-2">›</span>
          <span>{t('breadcrumb')}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
        <p className="text-xl text-purple-600 font-medium">{t('tagline')}</p>
        <p className="text-gray-500">{t('taglineEn')}</p>
      </section>

      {/* History */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-600 whitespace-pre-line">
            {t('history')}
          </div>
        </div>
      </section>

      {/* Core Spirits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            {t('coreSpirit.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {spirits.map(({ key, icon }) => (
              <div key={key} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`coreSpirit.${key}.title`)}
                </h3>
                <p className="text-gray-600">{t(`coreSpirit.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('future.title')}</h2>
          <p className="text-lg text-gray-600">{t('future.desc')}</p>
        </div>
      </section>
    </div>
  );
}
