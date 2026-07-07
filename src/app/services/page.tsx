import Link from 'next/link';
import Image from 'next/image';
import { 
  TreePine, 
  Pickaxe, 
  PenTool, 
  Flower2, 
  Leaf, 
  Grid2X2, 
  Droplets, 
  Wrench, 
  Sprout 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Smith Landscaping',
  description: 'Our comprehensive landscaping services.',
};

export default function ServicesPage() {
  
  const servicesList = [
    {
      title: "Landscaping",
      desc: "Comprehensive commercial landscaping tailored to your property's exact needs.",
      icon: <TreePine size={32} strokeWidth={1} />
    },
    {
      title: "Hardscaping",
      desc: "Structural enhancements including patios, walkways, retaining walls, and stonework.",
      icon: <Pickaxe size={32} strokeWidth={1} />
    },
    {
      title: "Landscape Design",
      desc: "Innovative, constructible design that considers future operating costs and aesthetics.",
      icon: <PenTool size={32} strokeWidth={1} />
    },
    {
      title: "Mulching and Bed Maintenance",
      desc: "Proactive soil nutrition and pristine bed edges for a polished appearance year-round.",
      icon: <Flower2 size={32} strokeWidth={1} />
    },
    {
      title: "Leaf Removal",
      desc: "Efficient autumn cleanup to protect your turf and keep your property immaculate.",
      icon: <Leaf size={32} strokeWidth={1} />
    },
    {
      title: "Sod Installation",
      desc: "Instant, vibrant green lawns installed with proper soil preparation and care.",
      icon: <Grid2X2 size={32} strokeWidth={1} />
    },
    {
      title: "Drainage Solutions",
      desc: "Strategic water management to prevent erosion and protect your landscape investments.",
      icon: <Droplets size={32} strokeWidth={1} />
    },
    {
      title: "Property Maintenance",
      desc: "Consistent service delivery that keeps your commercial property safe and beautiful.",
      icon: <Wrench size={32} strokeWidth={1} />
    },
    {
      title: "Lawn Care",
      desc: "Expert mowing, edging, and turf management for thick, healthy grass.",
      icon: <Sprout size={32} strokeWidth={1} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="bg-enterprise-navy text-white py-24 text-center px-[5%]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 mb-6 text-white opacity-80">
            <TreePine size={48} strokeWidth={1} />
          </div>
          <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            Depth of Commercial & Residential Landscape Services
          </h1>
          <p className="text-white/90 text-[15px] leading-relaxed max-w-3xl mb-8 font-light">
            With a special focus on you and your goals, we're changing the way landscape services are delivered. From design to development, maintenance and enhancements, our depth of experience makes us a seamless partner for the entire lifecycle of your landscape.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-2 bg-accent-green"></div>

      {/* 2. Grid of Services */}
      <section className="py-24 px-[5%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 text-center">
          {servicesList.map((service, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-enterprise-navy group-hover:text-enterprise-navy transition-all duration-300 mb-6">
                {service.icon}
              </div>
              <h4 className="text-[11px] font-extrabold tracking-[0.2em] text-slate-800 uppercase mb-4">
                {service.title}
              </h4>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed max-w-xs">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Commitment Section */}
      <section className="py-20 px-[5%] text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-enterprise-navy mb-4 tracking-wide">
            Commitment to Service Excellence
          </h2>
          <p className="text-[13px] text-slate-500 font-light leading-relaxed mb-10">
            The level of service that defines Smith Landscaping was built by combining decades of local expertise with the resources of an industry leader. We exist to provide unparalleled landscape services that make your job easier.
          </p>
          <Link 
            href="/company" 
            className="inline-block border border-enterprise-navy text-enterprise-navy text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3 hover:bg-enterprise-navy hover:text-white transition-colors"
          >
            SEE OUR HISTORY
          </Link>
        </div>
      </section>

      {/* 4. Split Image Footer Block (Matches Company Page) */}
      <section className="flex flex-col md:flex-row w-full min-h-[500px]">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
          <Image 
            src="/new team picture.jpeg" 
            alt="Smith Landscaping Team" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right Side Blue Block */}
        <div className="w-full md:w-1/2 bg-enterprise-navy flex items-center justify-center p-12 md:p-24 text-white">
          <div className="max-w-md w-full">
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Great Service. Beautiful Landscapes.
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-10 font-light">
              Benefit from a comprehensive landscape maintenance plan designed to meet your needs and exceed your expectations, all delivered by a team invested in your success.
            </p>
            <Link 
              href="#contact" 
              className="inline-block border border-white text-white text-[12px] font-bold tracking-widest px-8 py-3 uppercase hover:bg-white hover:text-enterprise-navy transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
