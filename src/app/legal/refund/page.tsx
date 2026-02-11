import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | 兆玥科技',
  description: 'Refund Policy for MUR Core and Zhao Yue Tech services',
};

export default function RefundPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: February 10, 2026</p>

        <div className="prose prose-gray max-w-none">
          <p>At Zhao Yue Tech. Inc.Ltd., we want you to be completely satisfied with your purchase of MUR Core services. This Refund Policy outlines the terms and conditions for refunds.</p>

          <h2>1. Refund Eligibility</h2>
          <p>We offer refunds under the following circumstances:</p>
          
          <h3>Eligible for Refund:</h3>
          <ul>
            <li>Accidental duplicate purchases</li>
            <li>Technical issues that prevent use of the service (if unresolved by our support team)</li>
            <li>Service not as described</li>
          </ul>

          <h3>Not Eligible for Refund:</h3>
          <ul>
            <li>Accounts terminated for Terms of Service violations</li>
            <li>Partial month refunds for monthly subscriptions canceled mid-cycle</li>
            <li>Custom enterprise agreements (subject to individual contract terms)</li>
            <li>Change of mind after extended use of the service</li>
          </ul>

          <h2>2. How to Request a Refund</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Email us at <strong>support@zhyu.com.tw</strong></li>
            <li>Include your account email and order number</li>
            <li>Describe the reason for your refund request</li>
          </ul>
          <p>We will review your request and respond within 5-10 business days. Approved refunds will be credited to the original payment method.</p>

          <h2>3. Subscription Cancellation</h2>
          <p>You can cancel your subscription at any time:</p>
          <ul>
            <li><strong>Monthly Plans:</strong> Your subscription will remain active until the end of the current billing period. No refund for the remaining days.</li>
            <li><strong>Annual Plans:</strong> You can continue using the service until the end of the annual period.</li>
          </ul>

          <h2>4. Prorated Refunds</h2>
          <p>In certain circumstances, we may offer prorated refunds at our discretion:</p>
          <ul>
            <li>Extended service outages (more than 24 hours)</li>
            <li>Removal of features you specifically purchased for</li>
            <li>Other exceptional circumstances</li>
          </ul>

          <h2>5. Free Trial</h2>
          <p>Our free tier does not require payment. If you upgrade to a paid plan and are not satisfied, please contact our support team to discuss your options.</p>

          <h2>6. Currency and Fees</h2>
          <ul>
            <li>Refunds are processed in the original currency of purchase</li>
            <li>We do not charge any fees for processing refunds</li>
            <li>Your bank or payment provider may have their own fees for international transactions</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about our Refund Policy, please contact us:</p>
          <p>
            Zhao Yue Tech. Inc.Ltd.<br />
            Email: support@zhyu.com.tw
          </p>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h3 className="mt-0 text-purple-900">Our Commitment</h3>
            <p className="mb-0 text-purple-800">We believe in our product and want you to succeed. If you&apos;re having trouble getting value from MUR Core, please reach out to our support team before requesting a refund. We&apos;re happy to help you get the most out of our service.</p>
          </div>
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
