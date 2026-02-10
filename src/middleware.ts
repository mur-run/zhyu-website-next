import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (internal)
    // - static files
    '/((?!api|_next|.*\\..*).*)'
  ]
};
