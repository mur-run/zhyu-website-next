'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">{t('home')}</Link>
          <span className="mx-2">›</span>
          <span>{t('terms.breadcrumb')}</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('terms.title')}</h1>
        <p className="text-gray-500 mb-8">{t('lastUpdated')}</p>

        <div className="prose prose-gray max-w-none">
          <p>{t('terms.intro')}</p>

          <h2>{t('terms.sections.acceptance.title')}</h2>
          <p>{t('terms.sections.acceptance.content')}</p>

          <h2>{t('terms.sections.description.title')}</h2>
          <p>{t('terms.sections.description.content')}</p>
          <ul>
            {['0', '1', '2', '3'].map((i) => (
              <li key={i}>{t(`terms.sections.description.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('terms.sections.accounts.title')}</h2>
          <p>{t('terms.sections.accounts.content')}</p>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`terms.sections.accounts.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('terms.sections.acceptableUse.title')}</h2>
          <p>{t('terms.sections.acceptableUse.content')}</p>
          <ul>
            {['0', '1', '2', '3', '4'].map((i) => (
              <li key={i}>{t(`terms.sections.acceptableUse.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('terms.sections.ip.title')}</h2>
          <p>{t('terms.sections.ip.content')}</p>

          <h2>{t('terms.sections.payment.title')}</h2>
          <p>{t('terms.sections.payment.content')}</p>
          <ul>
            {['0', '1', '2', '3'].map((i) => (
              <li key={i}>{t(`terms.sections.payment.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('terms.sections.termination.title')}</h2>
          <p>{t('terms.sections.termination.content')}</p>

          <h2>{t('terms.sections.disclaimer.title')}</h2>
          <p>{t('terms.sections.disclaimer.content')}</p>

          <h2>{t('terms.sections.liability.title')}</h2>
          <p>{t('terms.sections.liability.content')}</p>

          <h2>{t('terms.sections.governing.title')}</h2>
          <p>{t('terms.sections.governing.content')}</p>

          <h2>{t('terms.sections.changes.title')}</h2>
          <p>{t('terms.sections.changes.content')}</p>

          <h2>{t('terms.sections.contact.title')}</h2>
          <p>{t('terms.sections.contact.content')}</p>
          <p>
            {t('terms.sections.contact.company')}<br />
            {t('terms.sections.contact.email')}
          </p>
        </div>
      </main>
    </div>
  );
}
