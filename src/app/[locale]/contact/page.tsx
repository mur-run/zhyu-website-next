'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
        <p className="text-xl text-gray-600">{t('subtitle')}</p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t('form.namePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t('form.emailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={t('form.subjectPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder={t('form.messagePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? t('form.sending') : t('form.submit')}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">{t('form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">{t('form.error')}</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t('info.title')}</h2>
            <div className="space-y-4">
              <div>
                <span className="text-gray-500">{t('info.email')}:</span>
                <span className="ml-2 text-gray-900">contact@zhyu.com.tw</span>
              </div>
              <div>
                <span className="text-gray-500">{t('info.address')}:</span>
                <span className="ml-2 text-gray-900">{t('info.addressValue')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
