import Hero from '@/components/ui/Hero';
import TrustedBy from '@/components/ui/TrustedBy';
import BusinessSummary from '@/components/ui/BusinessSummary';
import Capabilities from '@/components/ui/Capabilities';
import BlogSection from '@/components/ui/BlogSection';


import Script from 'next/script';

export default function Home() {
  return (
    <>
      <main>
        <Hero headline="Leading Commercial Landscaping Services & Maintenance" />
        <TrustedBy />
        <BusinessSummary />
        <Capabilities />
        
        {/* Google Reviews Section */}
        <section className="py-24 bg-white px-[5%] border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto">
            <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-10e9db22-d1dd-444f-94f6-9448af2648b3" data-elfsight-app-lazy></div>
          </div>
        </section>

        <BlogSection />

      </main>
    </>
  );
}
