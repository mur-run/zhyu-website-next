'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function RefundPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">{t('home')}</Link>
          <span className="mx-2">›</span>
          <span>{t('refund.breadcrumb')}</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('refund.title')}</h1>
        <p className="text-gray-500 mb-8">{t('lastUpdated')}</p>

        <div className="prose prose-gray max-w-none">
          <p>{t('refund.intro')}</p>

          <h2>{t('refund.sections.eligibility.title')}</h2>
          <p>{t('refund.sections.eligibility.content')}</p>
          
          <h3>{t('refund.sections.eligibility.eligible.title')}</h3>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`refund.sections.eligibility.eligible.items.${i}`)}</li>
            ))}
          </ul>

          <h3>{t('refund.sections.eligibility.notEligible.title')}</h3>
          <ul>
            {['0', '1', '2', '3'].map((i) => (
              <li key={i}>{t(`refund.sections.eligibility.notEligible.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('refund.sections.howTo.title')}</h2>
          <p>{t('refund.sections.howTo.content')}</p>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`refund.sections.howTo.items.${i}`)}</li>
            ))}
          </ul>
          <p>{t('refund.sections.howTo.response')}</p>

          <h2>{t('refund.sections.cancellation.title')}</h2>
          <p>{t('refund.sections.cancellation.content')}</p>
          <ul>
            <li><strong>{t('refund.sections.cancellation.monthly')}</strong></li>
            <li><strong>{t('refund.sections.cancellation.annual')}</strong></li>
          </ul>

          <h2>{t('refund.sections.prorated.title')}</h2>
          <p>{t('refund.sections.prorated.content')}</p>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`refund.sections.prorated.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('refund.sections.freeTrial.title')}</h2>
          <p>{t('refund.sections.freeTrial.content')}</p>

          <h2>{t('refund.sections.currency.title')}</h2>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`refund.sections.currency.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('refund.sections.contact.title')}</h2>
          <p>{t('refund.sections.contact.content')}</p>
          <p>
            {t('refund.sections.contact.company')}<br />
            {t('refund.sections.contact.email')}
          </p>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h3 className="mt-0 text-purple-900">{t('refund.commitment.title')}</h3>
            <p className="mb-0 text-purple-800">{t('refund.commitment.content')}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
