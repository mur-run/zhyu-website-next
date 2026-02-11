import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | 兆玥科技',
  description: 'Terms of Service for MUR Core and Zhao Yue Tech services',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="兆玥科技" className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: February 10, 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>Welcome to MUR Core and the services provided by Zhao Yue Tech. Inc.Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;).</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using MUR Core software, website, or any related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Services.</p>

          <h2>2. Description of Services</h2>
          <p>MUR Core is a software tool that helps developers manage and synchronize development patterns across multiple AI coding assistants. The Services include:</p>
          <ul>
            <li>MUR Core CLI software</li>
            <li>Cloud synchronization features (for paid plans)</li>
            <li>Team collaboration features (for team plans)</li>
            <li>Related documentation and support</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>To access certain features of the Services, you may need to create an account. You are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Reverse engineer, decompile, or disassemble the software (except as permitted by law)</li>
            <li>Resell or redistribute the Services without authorization</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>The Services and all related intellectual property rights are owned by Zhao Yue Tech. Inc.Ltd. The open-source components of MUR Core are licensed under the MIT License. Your patterns and data remain your property.</p>

          <h2>6. Payment Terms</h2>
          <p>For paid Services:</p>
          <ul>
            <li>Fees are charged in advance on a monthly or annual basis</li>
            <li>All fees are non-refundable except as stated in our Refund Policy</li>
            <li>We may change prices with 30 days notice</li>
            <li>You are responsible for any applicable taxes</li>
          </ul>

          <h2>7. Termination</h2>
          <p>We may suspend or terminate your access to the Services at any time for violation of these Terms. Upon termination, your right to use the Services will cease immediately. You may export your data before termination.</p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>THE SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.</p>

          <h2>9. Limitation of Liability</h2>
          <p>IN NO EVENT SHALL ZHAO YUE TECH. INC.LTD. BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Taiwan (R.O.C.), without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Taipei, Taiwan.</p>

          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Services. Continued use of the Services after such modifications constitutes acceptance of the updated Terms.</p>

          <h2>12. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Zhao Yue Tech. Inc.Ltd.<br />
            Email: support@zhyu.com.tw
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/legal/terms" className="hover:text-gray-700">Terms of Service</Link>
            <Link href="/legal/privacy" className="hover:text-gray-700">Privacy Policy</Link>
            <Link href="/legal/refund" className="hover:text-gray-700">Refund Policy</Link>
          </div>
          <p>© 2014-2026 兆玥科技有限公司 Zhao Yue Tech. Inc.Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
