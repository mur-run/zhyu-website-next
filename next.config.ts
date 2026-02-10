import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds (we run it separately)
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
