import Link from 'next/link';
import { Sprout, BookOpen, Award, ClipboardList } from 'lucide-react';

export default function BusinessSummary() {
  return (
    <section className="w-full font-sans">
      
      {/* Top Banner (Company Mission) */}
      <div className="bg-[#F8F9FA] py-20 md:py-28 px-[5%] border-b border-slate-200">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
          <p className="text-2xl md:text-3xl text-accent-green font-light leading-relaxed mb-12">
            Premium residential hardscaping and landscaping, with the capacity and expertise for large-scale commercial projects across central VA.
          </p>
          <Link 
            href="/portfolio" 
            className="border-2 border-accent-green text-enterprise-navy font-bold text-sm tracking-widest uppercase px-12 py-4 hover:bg-accent-green hover:text-white transition-colors duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* 3-Column Pillars Grid */}
      <div className="bg-enterprise-navy relative overflow-hidden py-24 md:py-32 px-[5%]">
        
        {/* Abstract Background Blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24 text-center relative z-10">
          
          {/* Pillar 1: Why Us */}
          <div className="flex flex-col items-center group p-8 xl:p-12 border-t-[6px] border-transparent hover:bg-white/5 hover:border-accent-green hover:shadow-2xl transition-all duration-500 rounded-b-xl">
            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-500 group-hover:scale-105">
              <Award size={48} className="text-accent-green group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
            </div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-widest mb-6">Why Us</h4>
            <p className="text-slate-300 leading-relaxed mb-8 text-[15px] font-light">
              We treat your home like our own, delivering reliable, high-quality craftsmanship to elevate your outdoor living space.
            </p>
            <Link href="/about" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-white transition-colors mt-auto">
              About Our Company
            </Link>
          </div>

          {/* Pillar 2: Services */}
          <div className="flex flex-col items-center group p-8 xl:p-12 border-t-[6px] border-transparent hover:bg-white/5 hover:border-accent-green hover:shadow-2xl transition-all duration-500 rounded-b-xl">
            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-500 group-hover:scale-105">
              <Sprout size={48} className="text-accent-green group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
            </div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-widest mb-6">Services</h4>
            <p className="text-slate-300 leading-relaxed mb-8 text-[15px] font-light">
              From design to development, maintenance to enhancements, our comprehensive services make managing outdoor spaces effortless.
            </p>
            <Link href="/services" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-white transition-colors mt-auto">
              What We Can Do
            </Link>
          </div>

          {/* Pillar 3: Our Process */}
          <div className="flex flex-col items-center group p-8 xl:p-12 border-t-[6px] border-transparent hover:bg-white/5 hover:border-accent-green hover:shadow-2xl transition-all duration-500 rounded-b-xl">
            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-500 group-hover:scale-105">
              <ClipboardList size={48} className="text-accent-green group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
            </div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-widest mb-6">Our Process</h4>
            <p className="text-slate-300 leading-relaxed mb-8 text-[15px] font-light">
              From initial consultation to project completion, we ensure transparent communication and exceptional craftsmanship at every step.
            </p>
            <Link href="/faq" className="text-accent-green font-bold text-[13px] uppercase tracking-wider hover:text-white transition-colors mt-auto">
              How It Works
            </Link>
          </div>

        </div>
      </div>
      
    </section>
  );
}
