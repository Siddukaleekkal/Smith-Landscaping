import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  MapPinned, 
  Building2, 
  School, 
  PlusSquare, 
  Palmtree, 
  Landmark, 
  Home, 
  Store, 
  TentTree 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Markets We Serve | Smith Landscaping',
  description: 'Immersed in your market. Partnering with commercial landscape experts across all industries.',
};

export default function MarketsPage() {
  const markets = [
    {
      title: 'COMMERCIAL',
      icon: <Building2 size={36} strokeWidth={1} />,
      items: ['Industrial Facilities', 'Corporate Campuses', 'Commercial Offices']
    },
    {
      title: 'EDUCATION',
      icon: <School size={36} strokeWidth={1} />,
      items: ['Colleges & Universities', 'K-12']
    },
    {
      title: 'HEALTHCARE',
      icon: <PlusSquare size={36} strokeWidth={1} />,
      items: ['Hospitals & Medical Campuses', 'Long-Term Care']
    },
    {
      title: 'HOSPITALITY',
      icon: <Palmtree size={36} strokeWidth={1} />,
      items: ['Resorts & Hotels', 'Theme Parks']
    },
    {
      title: 'RELIGIOUS',
      icon: <Landmark size={36} strokeWidth={1} />,
      items: ['Cemeteries', 'Places of Worship']
    },
    {
      title: 'RESIDENTIAL',
      icon: <Home size={36} strokeWidth={1} />,
      items: ['Residential Communities', 'Military Housing', 'Multi-Family Housing']
    },
    {
      title: 'RETAIL',
      icon: <Store size={36} strokeWidth={1} />,
      items: ['Lifestyle Centers & Mixed-Use', 'Shopping Malls']
    },
    {
      title: 'SPORTS & LEISURE',
      icon: <TentTree size={36} strokeWidth={1} />,
      items: ['Golf Courses', 'Sports Complexes & Fields', 'Parks & Public Places', 'Cultural & Performance Centers']
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <section className="bg-enterprise-navy text-white pt-24 pb-20 relative px-[5%] text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-6 block">Markets</span>
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
            Immersed in Your Market
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Bring to life your vision for success by partnering with commercial landscape experts who have experience with landscapes in all industries and geographies.
          </p>
        </div>
        {/* Subtle Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-accent-green"></div>
      </section>

      {/* 2. Grid Section */}
      <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {markets.map((market, idx) => (
            <Link 
              href={`/markets/${market.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={idx} 
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div className="w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-accent-green group-hover:text-accent-green transition-all duration-300 mb-6">
                {market.icon}
              </div>
              
              {/* Market Title */}
              <h3 className="text-[11px] font-extrabold tracking-[0.15em] text-slate-800 uppercase mb-4">
                {market.title}
              </h3>
              
              {/* Bullet Points */}
              <p className="text-[12px] leading-relaxed text-slate-500 font-light flex flex-wrap justify-center items-center gap-1.5 px-2">
                {market.items.map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="text-center">{item}</span>
                    {i < market.items.length - 1 && (
                      <span className="text-accent-green text-[16px] leading-none">•</span>
                    )}
                  </span>
                ))}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
