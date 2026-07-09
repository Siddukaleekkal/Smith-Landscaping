import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Smith Landscaping',
  description: 'Our comprehensive landscaping services.',
};

export default function ServicesPage() {
  const categories = [
    {
      title: "Hardscaping & Construction",
      subtitle: "Structural elegance built to last.",
      desc: "We design and construct beautiful, durable outdoor living spaces. From elegant stonework to critical drainage systems, our installations form the permanent foundation of your property's value.",
      services: [
        "Custom Patios & Walkways",
        "Retaining Walls & Masonry",
        "Custom Stonework",
        "Advanced Drainage Solutions"
      ],
      image: "/Resources & Services & Homepage/photo-1617850687395-620757feb1f3.avif"
    },
    {
      title: "Landscape Design & Installation",
      subtitle: "Transforming your vision into reality.",
      desc: "We completely reimagine your outdoor space. Through thoughtful design, professional planting, and premium sod installation, we craft lush environments tailored precisely to your aesthetic.",
      services: [
        "Comprehensive Landscape Design",
        "Instant Sod Installation",
        "Tree, Shrub & Plant Installation",
        "Complete Property Transformations"
      ],
      image: "/Resources & Services & Homepage/photo-1597201278257-3687be27d954.avif"
    },
    {
      title: "Comprehensive Maintenance",
      subtitle: "Pristine, year-round care.",
      desc: "We provide meticulous, scheduled grounds management for both residential estates and large commercial properties, ensuring your investment looks immaculate through every season.",
      services: [
        "Residential & Commercial Lawn Care",
        "Premium Mulch Application",
        "Weed Control & Bed Maintenance",
        "Seasonal Leaf Removal & Cleanup"
      ],
      image: "/Resources & Services & Homepage/photo-1592595896616-c37162298647.avif"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Premium Header */}
      <section className="bg-enterprise-navy text-white pt-24 pb-20 px-[5%] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-6 block">Our Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            Expert Services for Exceptional Properties
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            From visionary landscape design to structural hardscaping and precise maintenance, we deliver enterprise-grade execution for every project.
          </p>
        </div>
      </section>

      {/* 2. Alternating Editorial Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col gap-32">
          {categories.map((category, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center group`}>
                
                {/* Visual Block */}
                <div className="w-full lg:w-1/2">
                  <div className="w-full aspect-square md:aspect-[4/3] bg-slate-100 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden relative">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-enterprise-navy opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                  </div>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="text-accent-green font-bold tracking-widest text-sm mb-4">
                    0{idx + 1} // {category.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-light text-enterprise-navy mb-8 tracking-wide">
                    {category.title}
                  </h2>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
                    {category.desc}
                  </p>
                  
                  <div className="w-full h-[1px] bg-slate-200 mb-8"></div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-16">
                    <Link href="/quote" className="inline-flex items-center gap-3 text-[13px] font-extrabold tracking-[0.2em] uppercase text-enterprise-navy hover:text-accent-green transition-colors">
                      Request this service <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
