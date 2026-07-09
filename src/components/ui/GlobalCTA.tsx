import Link from 'next/link';

export default function GlobalCTA() {
  return (
    <section className="bg-accent-green py-20 px-[5%] text-center text-white">
      <h2 className="text-3xl font-light mb-4 tracking-wide">How Can We Help You?</h2>
      <p className="text-white/90 text-sm font-light mb-8 max-w-2xl mx-auto">
        Find out how we can build a landscape that supports your goals and a team of experts focused on you.
      </p>
      <Link 
        href="mailto:contact@smithlawnva.com"
        className="inline-block border border-white text-white text-[12px] font-extrabold tracking-[0.2em] px-8 py-3 uppercase bg-white !text-accent-green hover:bg-transparent hover:!text-white transition-colors"
      >
        LET'S GET IN TOUCH
      </Link>
    </section>
  );
}
