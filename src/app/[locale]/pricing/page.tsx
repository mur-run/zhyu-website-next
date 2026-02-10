import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default async function PricingPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <PricingContent />;
}

function PricingContent() {
  const t = useTranslations('pricing');

  const plans = [
    { key: 'free', featured: false },
    { key: 'pro', featured: true },
    { key: 'team', featured: false },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white text-gray-600 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm">
          <Link href="/" className="hover:text-purple-600">首頁</Link>
          <span className="mx-2">›</span>
          <span>{t('breadcrumb')}</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-400">{t('subtitle')}</p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(({ key, featured }) => (
              <div
                key={key}
                className={`relative rounded-2xl p-8 ${
                  featured
                    ? 'bg-gradient-to-b from-purple-900/40 to-gray-900 border-2 border-purple-500 scale-105'
                    : 'bg-gray-900 border border-gray-800'
                }`}
              >
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-semibold">
                    {t(`${key}.recommended`)}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{t(`${key}.name`)}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{t(`${key}.price`)}</span>
                  <span className="text-gray-500">{t(`${key}.period`)}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {(t.raw(`${key}.features`) as string[]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    featured
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {t(`${key}.cta`)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">{t('faq.title')}</h2>
          <div className="space-y-8">
            {['downgrade', 'security'].map((key) => (
              <div key={key}>
                <h3 className="text-lg font-semibold mb-2">{t(`faq.questions.${key}.q`)}</h3>
                <p className="text-gray-400">{t(`faq.questions.${key}.a`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center bg-gray-900 border border-gray-800 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">{t('enterprise.title')}</h2>
          <p className="text-gray-400 mb-6">{t('enterprise.desc')}</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {t('enterprise.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}
