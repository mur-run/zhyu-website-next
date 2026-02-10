'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/pricing', label: t('pricing') },
    { href: '/contact', label: t('contact') },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    if (['zh-TW', 'en'].includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    return segments.join('/') || '/';
  };

  const isActive = (href: string) => {
    const path = pathname.replace(/^\/(zh-TW|en)/, '');
    return path === href || path.startsWith(href + '/');
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">兆玥科技</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(item.href)
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          <Link
            href={switchLocale('zh-TW')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
              locale === 'zh-TW'
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            中文
          </Link>
          <Link
            href={switchLocale('en')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
              locale === 'en'
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
