'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
  }
}

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [cooldown, setCooldown] = useState(false);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const lastSubmitRef = useRef<number>(0);
  const submitCountRef = useRef<number>(0);

  useEffect(() => {
    // Check if Turnstile is loaded
    const checkTurnstile = setInterval(() => {
      if (window.turnstile) {
        setTurnstileReady(true);
        clearInterval(checkTurnstile);
      }
    }, 100);
    return () => clearInterval(checkTurnstile);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const now = Date.now();
    
    // Rate limiting: 60 seconds between submissions
    if (now - lastSubmitRef.current < 60000) {
      setCooldown(true);
      setTimeout(() => setCooldown(false), 3000);
      return;
    }
    
    // Max 5 submissions per session
    if (submitCountRef.current >= 5) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    lastSubmitRef.current = now;
    submitCountRef.current += 1;

    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get('website')) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      return;
    }
    
    // Remove Turnstile response - Web3Forms free tier doesn't support it
    // Keep the widget as visual deterrent for bots
    formData.delete('cf-turnstile-response');
    
    formData.append('access_key', 'ffaa6d0d-b989-45d0-ac4f-1888b854c352');
    formData.append('from_name', 'Zhao Yue Tech Website');
    
    const subject = formData.get('subject');
    formData.set('subject', `[兆玥科技] ${subject}`);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        window.turnstile?.reset();
      } else {
        console.error('Web3Forms error:', result);
        setStatus('error');
        window.turnstile?.reset();
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
      window.turnstile?.reset();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Cloudflare Turnstile */}
      <Script 
        src="https://challenges.cloudflare.com/turnstile/v0/api.js" 
        async 
        defer 
      />
      
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
            {/* Honeypot */}
            <input 
              type="text" 
              name="website" 
              className="hidden" 
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
            />
            
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

            {/* Cloudflare Turnstile Widget */}
            <div 
              className="cf-turnstile" 
              data-sitekey="0x4AAAAAACaVrq_1-7wbZeZv"
              data-theme="light"
              data-size="normal"
            />

            <button
              type="submit"
              disabled={status === 'sending' || cooldown}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              {cooldown 
                ? '請稍候再試 / Please wait...' 
                : status === 'sending' 
                  ? t('form.sending') 
                  : t('form.submit')}
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
