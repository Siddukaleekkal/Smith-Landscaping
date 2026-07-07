import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-[600px] lg:h-[80vh] border-b-[12px] border-accent-green">
      
      {/* Left Column - Solid Brand Color & Text */}
      <div className="w-full lg:w-[40%] bg-enterprise-navy flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-0 z-10 order-2 lg:order-1">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-light leading-[1.2] mb-12 font-heading tracking-wide">
          Consider Your <br />
          Landscaping Needs <br />
          Solved
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#quote" 
            className="inline-block bg-accent-green border-2 border-accent-green text-white text-sm font-bold tracking-widest px-8 py-4 uppercase hover:bg-transparent transition-colors duration-300 text-center"
          >
            Get a Quote
          </Link>
          <Link 
            href="/company" 
            className="inline-block border-2 border-accent-green text-white text-sm font-bold tracking-widest px-8 py-4 uppercase hover:bg-accent-green transition-colors duration-300 text-center"
          >
            About Smith Landscaping
          </Link>
        </div>
      </div>

      {/* Right Column - Video / Media */}
      <div className="w-full lg:w-[60%] relative h-[400px] lg:h-auto order-1 lg:order-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Hero Section.mp4" type="video/mp4" />
          <source src="/Smith Landscaping | MAIN AD.mov" type="video/quicktime" />
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-500">Video Background</span>
          </div>
        </video>
      </div>
      
    </section>
  );
}
