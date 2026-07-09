'use client';

import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function PhoneVideo({ src, title, desc }: { src: string, title: string, desc: string }) {
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
    <div className="flex flex-col items-center group">
      {/* Reel Frame */}
      <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-[24px] overflow-hidden bg-black shadow-xl">
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src.replace('.mov', '.mp4')} type="video/mp4" />
          <source src={src} type="video/quicktime" />
        </video>

        {/* Sound Toggle Button */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-30 bg-black/60 hover:bg-black text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg flex items-center justify-center"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="mt-8 text-center px-4 max-w-[320px]">
        <h3 className="text-xl font-bold text-enterprise-navy mb-3 tracking-wide">{title}</h3>
        <p className="text-slate-500 text-[14px] font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function FeaturedMedia() {
  return (
    <section className="py-24 px-[5%] bg-white border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase block mb-4">
            See the Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-enterprise-navy tracking-wide mb-6">
            Quality You Can See. <br className="hidden md:block" /> Results You Can Trust.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          <PhoneVideo 
            src="/Portfolio/Smith Landscaping | MAIN AD.mov"
            title="Our Standard of Excellence"
            desc="Watch how our dedicated teams transform ordinary outdoor spaces into stunning, high-end landscapes that leave a lasting impression."
          />
          <PhoneVideo 
            src="/Portfolio/Testimonial.mov"
            title="Hear From Our Clients"
            desc="Don't just take our word for it. Listen to what our satisfied clients have to say about their experience working with the Smith Landscaping team."
          />
        </div>
      </div>
    </section>
  );
}
