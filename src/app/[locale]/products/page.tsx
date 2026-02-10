import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function ProductsPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return <ProductsContent />;
}

function ProductsContent() {
  const t = useTranslations('products');

  const features = [
    { key: 'crossCli', icon: '🔄', highlight: true },
    { key: 'semanticSearch', icon: '🔍' },
    { key: 'patternLearning', icon: '📚' },
    { key: 'tierLoading', icon: '⚡' },
    { key: 'teamSharing', icon: '👥' },
    { key: 'smartRouting', icon: '💰' },
    { key: 'privacy', icon: '🔒' },
    { key: 'hooks', icon: '🛠️' },
  ];

  const tools = [
    { name: 'Claude Code', icon: '🤖', status: 'fullSupport' },
    { name: 'Gemini CLI', icon: '💎', status: 'fullSupport' },
    { name: 'GitHub Copilot', icon: '🐙', status: 'directorySync' },
    { name: 'OpenAI Codex', icon: '📦', status: 'fullSupport' },
    { name: 'OpenClaw', icon: '🦞', status: 'fullSupport' },
    { name: 'Auggie', icon: '🔮', status: 'fullSupport' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Breadcrumb */}
      <div className="bg-white text-gray-600 py-3 px-4">
        <div className="max-w-6xl mx-auto text-sm">
          <Link href="/" className="hover:text-purple-600">首頁</Link>
          <span className="mx-2">›</span>
          <span>{t('breadcrumb')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-semibold mb-6 animate-pulse">
            {t('publicBeta')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">🧠 MURE Core</h1>
          <p className="text-2xl text-gray-400 mb-4">{t('tagline')}</p>
          <p className="text-lg text-gray-500 mb-8 whitespace-pre-line">{t('heroDesc')}</p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 mb-10">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-500">{t('stats.tools')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">∞</div>
              <div className="text-sm text-gray-500">{t('stats.patterns')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">97%</div>
              <div className="text-sm text-gray-500">{t('stats.savings')}</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
              {t('getStarted')}
            </Link>
            <a href="https://github.com/mur-run/mur-core" target="_blank" className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:border-gray-500 transition-colors">
              {t('starOnGithub')}
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('problem.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['repeating', 'fragmentation', 'tokens'].map((key) => (
              <div key={key} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">
                  {key === 'repeating' ? '😤' : key === 'fragmentation' ? '🔀' : '💸'}
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`problem.${key}.title`)}</h3>
                <p className="text-gray-400">{t(`problem.${key}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="text-4xl text-purple-500 mb-4">↓</div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {t('problem.solution')}
            </h3>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('howItWorks.title')}</h2>
          <p className="text-gray-500 text-center mb-12">{t('howItWorks.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {['learn', 'sync', 'search'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`howItWorks.${step}.title`)}</h3>
                <p className="text-gray-400 mb-4">{t(`howItWorks.${step}.desc`)}</p>
                <code className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-green-400 text-sm">
                  mur {step === 'learn' ? 'learn extract --auto' : step}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ key, icon, highlight }) => (
              <div
                key={key}
                className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${
                  highlight
                    ? 'md:col-span-2 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-500/30'
                    : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{t(`features.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm">{t(`features.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('demo.title')}</h2>
          <p className="text-gray-500 text-center mb-8">{t('demo.subtitle')}</p>
          <div className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-sm ml-2">Terminal</span>
            </div>
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto font-mono">
              <code>
{`$ mur init
✓ Created ~/.mur/config.yaml
✓ Initialized pattern store
✓ Detected Ollama (nomic-embed-text)
✓ Ready to learn!

$ mur learn extract --auto
Scanning transcripts...
  → Found 83 sessions
  → Extracted 16 new patterns
  → Saved to ~/.mur/patterns/

$ mur sync
Syncing to configured targets...
  ✓ Claude Code (CLAUDE.md updated)
  ✓ Gemini CLI (GEMINI.md updated)
  ✓ Custom: ~/clawd/skills/

$ mur search "Swift async testing"
Found 3 patterns (score > 0.5):

1. swift--testing-async-expectations (0.87)
   Use XCTestExpectation for async tests...`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Supported Tools */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('tools.title')}</h2>
          <p className="text-gray-500 text-center mb-12">{t('tools.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 text-center hover:border-purple-500 transition-colors">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="font-medium">{tool.name}</div>
                <div className="text-green-400 text-sm">{t(`tools.${tool.status}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('useCases.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['solo', 'team', 'org'].map((key) => (
              <div key={key} className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">
                  {key === 'solo' ? '👨‍💻' : key === 'team' ? '👥' : '🏢'}
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`useCases.${key}.title`)}</h3>
                <p className="text-gray-400">{t(`useCases.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl text-gray-300 italic mb-4">
            {t('testimonial.quote')}
          </blockquote>
          <p className="text-gray-500">{t('testimonial.author')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-gray-400 text-lg mb-8">{t('cta.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/pricing" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity">
              {t('cta.viewPricing')}
            </Link>
            <a href="https://github.com/mur-run/mur-core" target="_blank" className="px-8 py-4 border border-gray-700 rounded-lg font-medium text-lg hover:border-gray-500 transition-colors">
              {t('cta.readDocs')}
            </a>
          </div>
          <code className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-lg text-green-400">
            brew install mur-run/tap/mur
          </code>
        </div>
      </section>
    </div>
  );
}
