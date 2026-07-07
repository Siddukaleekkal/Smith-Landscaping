import { getServiceBySlug, getAllServices } from '@/lib/content';
import MobileNav from '@/components/navigation/MobileNav';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = await getServiceBySlug(resolvedParams.slug);
  if (!service) {
    return { title: 'Not Found' };
  }
  return {
    title: `${service.title} | Smith Landscaping`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = await getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Removed MobileNav */}
      
      <section 
        className="h-[50vh] min-h-[400px] flex items-center justify-start px-[5%] relative bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${service.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-enterprise-navy/60"></div>
        <div className="relative z-10 max-w-[800px] text-white">
          <div className="flex items-center gap-4 mb-6">
            {service.icon && <span className="text-5xl">{service.icon}</span>}
            <h1 className="text-6xl text-white font-extrabold">{service.title}</h1>
          </div>
          <p className="text-xl mb-8">{service.description}</p>
        </div>
      </section>

      <main className="max-w-[800px] mx-auto my-16 px-[5%] text-lg text-text-color">
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.contentHtml || '' }} />
      </main>


    </>
  );
}
