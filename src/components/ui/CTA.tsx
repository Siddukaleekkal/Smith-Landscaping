import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative w-full bg-accent-green py-24 md:py-32 px-[5%] text-center overflow-hidden">
      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl text-white font-light mb-6">How Can We Help You?</h2>
        <p className="text-white text-base md:text-lg font-light mb-12 leading-relaxed">
          Find out how you can get a landscape that supports your goals and a team of experts focused on you.
        </p>
        <Link 
          href="/contact" 
          className="border-[2px] border-white text-white font-bold text-sm tracking-widest uppercase px-12 py-4 hover:bg-white hover:text-accent-green transition-colors duration-300"
        >
          Let's Get In Touch
        </Link>
      </div>

      {/* Bottom Stripe Layer */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] flex">
        <div className="w-[50%] h-full bg-enterprise-navy"></div>
        <div className="w-[50%] h-full bg-white"></div>
      </div>
    </section>
  );
}
