import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-[600px] lg:h-[80vh] border-b-[12px] border-accent-green">
      
      {/* Left Column - Solid Brand Color & Text */}
      <div className="w-full lg:w-[40%] bg-enterprise-navy flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-0 z-10 order-2 lg:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-light leading-[1.2] mb-12 font-heading tracking-wide">
          Transforming <br />
          Virginia's Homes <br />
          & Properties
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/quote" 
            className="inline-block bg-accent-green border-2 border-accent-green text-white text-lg font-bold tracking-widest px-12 py-5 uppercase hover:bg-transparent transition-colors duration-300 text-center w-max"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Right Column - Video / Media */}
      <div className="w-full lg:w-[60%] relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-[120%] object-cover object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/Resources & Services & Homepage/Hero Section.mp4" type="video/mp4" />
        </video>
      </div>
      
    </section>
  );
}
