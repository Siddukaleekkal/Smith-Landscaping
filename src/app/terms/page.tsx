import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Smith Landscaping',
  description: 'Our Terms of Service and user agreements.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-12 pb-24 px-[5%]">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl text-enterprise-navy font-light tracking-wide mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 font-bold tracking-widest uppercase mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none font-light leading-relaxed">
          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">1. Terms</h2>
          <p>
            By accessing this Website, accessible from smithlandscaping.va, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Smith Landscaping's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on Smith Landscaping's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">3. Disclaimer</h2>
          <p>
            All the materials on Smith Landscaping's Website are provided "as is". Smith Landscaping makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Smith Landscaping does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">4. Limitations</h2>
          <p>
            Smith Landscaping or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Smith Landscaping's Website, even if Smith Landscaping or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">5. Revisions and Errata</h2>
          <p>
            The materials appearing on Smith Landscaping's Website may include technical, typographical, or photographic errors. Smith Landscaping will not promise that any of the materials in this Website are accurate, complete, or current. Smith Landscaping may change the materials contained on its Website at any time without notice.
          </p>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
          <Link 
            href="/faq" 
            className="inline-block bg-enterprise-navy text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-accent-green transition-colors"
          >
            Visit our FAQ
          </Link>
          <Link 
            href="mailto:contact@smithlawnva.com" 
            className="inline-block border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-slate-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
