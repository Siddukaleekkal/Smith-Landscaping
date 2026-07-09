'use client';

import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, CheckCircle2 } from 'lucide-react';

function PhoneVideo({ src, title }: { src: string, title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex flex-col items-center group w-full">
      <div className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-black shadow-2xl border-[4px] border-white">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={src.replace('.mov', '.mp4')} type="video/mp4" />
          <source src={src} type="video/quicktime" />
        </video>
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-30 bg-black/60 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg flex items-center justify-center"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
      <div className="mt-6 text-center px-2">
        <h3 className="text-[15px] font-bold text-enterprise-navy tracking-wide leading-tight group-hover:text-accent-green transition-colors">{title}</h3>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const services = [
    {
      title: "Hardscaping",
      description: "Custom patios, retaining walls, walkways, and stonework designed to elevate your outdoor living spaces."
    },
    {
      title: "Landscaping",
      description: "Professional planting, turf installation, and complete landscape transformations tailored to your property."
    },
    {
      title: "Maintenance",
      description: "Comprehensive lawn care, pruning, and seasonal cleanups to keep your property pristine year-round."
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-24 md:py-32 px-[5%] border-b border-slate-200 overflow-hidden relative z-0">
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* --- DESKTOP BESPOKE LAYOUT --- */}
        <div className="hidden lg:flex justify-center items-center gap-12 xl:gap-20">
          
          {/* Left Video */}
          <div className="flex-shrink-0 transition-transform duration-700 hover:scale-105">
            <div className="w-[300px] xl:w-[340px]">
              <PhoneVideo 
                src="/Portfolio/Smith Landscaping | MAIN AD.mov"
                title="Our Standard of Excellence"
              />
            </div>
          </div>

          {/* Center: Services */}
          <div className="flex flex-col text-center px-4 relative z-10 min-w-[340px]">
            <h2 className="text-4xl xl:text-5xl font-light text-enterprise-navy tracking-wide mb-16 leading-tight">
              Our Main <br/><span className="font-bold">Services</span>
            </h2>
            
            <div className="space-y-16">
              {services.map((s, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center group">
                  <h3 className="text-xl xl:text-2xl font-extrabold text-enterprise-navy mb-3 tracking-[0.2em] uppercase">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] xl:text-[15px] leading-relaxed font-light px-8 max-w-[320px]">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video */}
          <div className="flex-shrink-0 transform translate-y-16 transition-transform duration-700 hover:scale-105">
            <div className="w-[300px] xl:w-[340px]">
              <PhoneVideo 
                src="/Portfolio/Testimonial.mov"
                title="Hear From Our Clients"
              />
            </div>
          </div>

        </div>


        {/* --- MOBILE LAYOUT (Preserved from previous version) --- */}
        <div className="flex flex-col lg:hidden">
          <div className="flex flex-col mb-16">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase block mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl font-light text-enterprise-navy tracking-wide mb-8 leading-tight">
              Comprehensive <br /> Landscaping Solutions.
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
              We provide a high-level approach to hardscaping, landscaping, and maintenance. Experience quality you can see and results you can trust.
            </p>

            <div className="flex flex-col gap-10">
              {services.map((service, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <h3 className="text-xl font-bold text-enterprise-navy mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-slate-500 text-[15px] font-light leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            <div className="transform sm:translate-y-12">
              <PhoneVideo 
                src="/Portfolio/Testimonial.mov"
                title="Hear From Our Clients"
              />
            </div>
            <div>
              <PhoneVideo 
                src="/Portfolio/Smith Landscaping | MAIN AD.mov"
                title="Our Standard of Excellence"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
