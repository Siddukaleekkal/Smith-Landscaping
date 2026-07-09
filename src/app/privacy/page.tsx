import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smith Landscaping',
  description: 'Our Privacy Policy and data collection practices.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-12 pb-24 px-[5%]">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl text-enterprise-navy font-light tracking-wide mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 font-bold tracking-widest uppercase mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none font-light leading-relaxed">
          <p>
            At Smith Landscaping, accessible from smithlandscaping.va, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Smith Landscaping and how we use it.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-600">
            <li>Provide, operate, and maintain our website and landscaping services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and promotional purposes</li>
            <li>Send you emails and quotes</li>
          </ul>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">Log Files</h2>
          <p>
            Smith Landscaping follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-xl text-enterprise-navy mt-10 mb-4 font-normal">Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
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
