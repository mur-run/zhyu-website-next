import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | 兆玥科技',
  description: 'Privacy Policy for MUR Core and Zhao Yue Tech services',
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: February 10, 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>Zhao Yue Tech. Inc.Ltd. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use MUR Core and related services.</p>

          <h2>1. Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
            <li><strong>Payment Information:</strong> Billing details processed by our payment provider (we do not store credit card numbers)</li>
            <li><strong>Support Communications:</strong> Information you provide when contacting support</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> Features used, commands run, error logs (anonymized)</li>
            <li><strong>Device Information:</strong> Operating system, browser type, IP address</li>
            <li><strong>Cookies:</strong> Session cookies for authentication</li>
          </ul>

          <h3>Information We Do NOT Collect</h3>
          <ul>
            <li>Your source code</li>
            <li>Your pattern content (stored locally by default)</li>
            <li>Your AI conversation history</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>3. Cloud Sync Feature</h2>
          <p>If you enable cloud sync (Pro and Team plans):</p>
          <ul>
            <li>Your patterns are encrypted at rest and in transit</li>
            <li>We implement appropriate security measures to protect your data</li>
            <li>You can delete all cloud data at any time</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Companies that help us operate our services (hosting, payment processing, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We implement appropriate security measures including:</p>
          <ul>
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Encryption of data at rest</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your account and associated data at any time.</p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and data</li>
            <li>Export your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>8. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>Our Services are not intended for children under 16. We do not knowingly collect information from children under 16.</p>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <p>
            Zhao Yue Tech. Inc.Ltd.<br />
            Email: privacy@zhyu.com.tw
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
