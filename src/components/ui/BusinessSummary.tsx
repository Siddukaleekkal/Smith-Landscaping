import Link from 'next/link';
import { Sprout, MapPinned, BookOpen } from 'lucide-react';

export default function BusinessSummary() {
  return (
    <section className="w-full font-sans">
      
      {/* Top Banner (Company Mission) */}
      <div className="bg-[#F8F9FA] py-20 md:py-28 px-[5%] border-b border-slate-200">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
          <p className="text-2xl md:text-3xl text-accent-green font-light leading-relaxed mb-12">
            Smith Landscaping is the nation's leading commercial landscape company. We take pride in delivering consistently excellent results for clients across the country, throughout the lifecycle of their landscapes.
          </p>
          <Link 
            href="/portfolio" 
            className="border-2 border-accent-green text-enterprise-navy font-bold text-sm tracking-widest uppercase px-12 py-4 hover:bg-accent-green hover:text-white transition-colors duration-300"
          >
            View Portfolio
          </Link>
          
          {/* Mobile Only Video */}
          <div className="mt-12 w-full max-w-[320px] mx-auto md:hidden aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 relative">
            <video 
              src="/Smith Landscaping | MAIN AD.mov" 
              autoPlay 
              muted 
              loop 
              playsInline
              controls
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* 3-Column Pillars Grid */}
      <div className="bg-white py-20 md:py-28 px-[5%]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24 text-center">
          
          {/* Pillar 1: Services */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-8 hover:bg-slate-100 transition-colors duration-300">
              <Sprout size={48} className="text-slate-600" strokeWidth={1} />
            </div>
            <h4 className="text-sm font-extrabold text-enterprise-navy uppercase tracking-widest mb-6">Services</h4>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm px-2 lg:px-8">
              From commercial landscape design to development, maintenance to enhancements, our comprehensive services make managing outdoor spaces effortless.
            </p>
            <Link href="/services" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-enterprise-navy transition-colors mt-auto">
              What We Can Do For You
            </Link>
          </div>

          {/* Pillar 2: Markets */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-8 hover:bg-slate-100 transition-colors duration-300">
              <MapPinned size={48} className="text-slate-600" strokeWidth={1} />
            </div>
            <h4 className="text-sm font-extrabold text-enterprise-navy uppercase tracking-widest mb-6">Markets</h4>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm px-2 lg:px-8">
              Partner with a commercial landscape provider with years of experience creating exceptional landscapes in your industry.
            </p>
            <Link href="/markets" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-enterprise-navy transition-colors mt-auto">
              View Markets
            </Link>
          </div>

          {/* Pillar 3: Resources */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center mb-8 hover:bg-slate-100 transition-colors duration-300">
              <BookOpen size={48} className="text-slate-600" strokeWidth={1} />
            </div>
            <h4 className="text-sm font-extrabold text-enterprise-navy uppercase tracking-widest mb-6">Resources</h4>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm px-2 lg:px-8">
              Inspiration, solutions, and thought leadership are at your fingertips. Search our library of commercial landscaping resources.
            </p>
            <Link href="/resources" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-enterprise-navy transition-colors mt-auto">
              See Resources
            </Link>
          </div>

        </div>
      </div>
      
    </section>
  );
}
