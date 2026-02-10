'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            {t('nav.about')}
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
            {t('nav.products')}
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            {t('nav.contact')}
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/legal/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
            {t('footer.terms')}
          </Link>
          <Link href="/legal/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
            {t('footer.privacy')}
          </Link>
          <Link href="/legal/refund" className="text-gray-500 hover:text-gray-700 transition-colors">
            {t('footer.refund')}
          </Link>
        </div>

        {/* Company Info */}
        <div className="text-center">
          <p className="text-gray-600 font-medium mb-2">www.zhyu.com.tw</p>
          <p className="text-gray-400 text-sm">{t('common.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
