import { getMarketBySlug, getAllMarkets } from '@/lib/content';
import MobileNav from '@/components/navigation/MobileNav';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const markets = await getAllMarkets();
  return markets.map((market) => ({
    slug: market.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const market = await getMarketBySlug(resolvedParams.slug);
  if (!market) {
    return { title: 'Not Found' };
  }
  return {
    title: `${market.title} | Smith Landscaping`,
    description: market.description,
  };
}

export default async function MarketDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const market = await getMarketBySlug(resolvedParams.slug);

  if (!market) {
    notFound();
  }

  return (
    <>
      {/* Removed MobileNav */}
      
      <section 
        className="h-[50vh] min-h-[400px] flex items-center justify-start px-[5%] relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${market.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-enterprise-navy/60"></div>
        <div className="relative z-10 max-w-[800px] text-white">
          <h1 className="text-6xl text-white mb-6 font-extrabold">{market.title}</h1>
          <p className="text-xl mb-8">{market.description}</p>
        </div>
      </section>

      <main className="max-w-[800px] mx-auto my-16 px-[5%] text-lg text-text-color">
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: market.contentHtml || '' }} />
      </main>


    </>
  );
}
