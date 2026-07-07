import Link from 'next/link';

export default function ActionBand() {
  return (
    <section className="bg-enterprise-navy text-white py-16 px-[5%] text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-white text-4xl mb-4 font-extrabold">How Can We Help You?</h2>
        <p className="text-xl mb-8 text-slate-300">
          Find out how you can get a landscape that supports your goals and a team of experts focused on you.
        </p>
        <div className="flex gap-4 justify-center flex-wrap items-center">
          <Link href="#contact" className="btn text-lg px-8 py-4">Let's get in touch</Link>
          <a href="tel:844-235-7778" className="text-2xl font-extrabold text-white flex items-center px-4 py-2 hover:text-accent-green transition-colors">
            844-235-7778
          </a>
        </div>
      </div>
    </section>
  );
}
