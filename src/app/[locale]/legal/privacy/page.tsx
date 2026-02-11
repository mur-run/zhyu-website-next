'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">{t('home')}</Link>
          <span className="mx-2">›</span>
          <span>{t('privacy.breadcrumb')}</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('privacy.title')}</h1>
        <p className="text-gray-500 mb-8">{t('lastUpdated')}</p>

        <div className="prose prose-gray max-w-none">
          <p>{t('privacy.intro')}</p>

          <h2>{t('privacy.sections.collect.title')}</h2>
          
          <h3>{t('privacy.sections.collect.provided.title')}</h3>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`privacy.sections.collect.provided.items.${i}`)}</li>
            ))}
          </ul>

          <h3>{t('privacy.sections.collect.automatic.title')}</h3>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`privacy.sections.collect.automatic.items.${i}`)}</li>
            ))}
          </ul>

          <h3>{t('privacy.sections.collect.notCollect.title')}</h3>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`privacy.sections.collect.notCollect.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.use.title')}</h2>
          <p>{t('privacy.sections.use.content')}</p>
          <ul>
            {['0', '1', '2', '3', '4', '5'].map((i) => (
              <li key={i}>{t(`privacy.sections.use.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.cloudSync.title')}</h2>
          <p>{t('privacy.sections.cloudSync.content')}</p>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`privacy.sections.cloudSync.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.sharing.title')}</h2>
          <p>{t('privacy.sections.sharing.content')}</p>
          <ul>
            {['0', '1', '2'].map((i) => (
              <li key={i}>{t(`privacy.sections.sharing.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.security.title')}</h2>
          <p>{t('privacy.sections.security.content')}</p>
          <ul>
            {['0', '1', '2', '3'].map((i) => (
              <li key={i}>{t(`privacy.sections.security.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.retention.title')}</h2>
          <p>{t('privacy.sections.retention.content')}</p>

          <h2>{t('privacy.sections.rights.title')}</h2>
          <p>{t('privacy.sections.rights.content')}</p>
          <ul>
            {['0', '1', '2', '3', '4'].map((i) => (
              <li key={i}>{t(`privacy.sections.rights.items.${i}`)}</li>
            ))}
          </ul>

          <h2>{t('privacy.sections.international.title')}</h2>
          <p>{t('privacy.sections.international.content')}</p>

          <h2>{t('privacy.sections.children.title')}</h2>
          <p>{t('privacy.sections.children.content')}</p>

          <h2>{t('privacy.sections.changes.title')}</h2>
          <p>{t('privacy.sections.changes.content')}</p>

          <h2>{t('privacy.sections.contact.title')}</h2>
          <p>{t('privacy.sections.contact.content')}</p>
          <p>
            {t('privacy.sections.contact.company')}<br />
            {t('privacy.sections.contact.email')}
          </p>
        </div>
      </main>
    </div>
  );
}
