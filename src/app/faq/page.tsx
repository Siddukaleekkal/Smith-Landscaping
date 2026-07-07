import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Smith Landscaping',
  description: 'Answers to common landscaping and maintenance questions for properties in Henrico, VA and beyond.',
};

const faqs = [
  {
    question: "What's the difference between sod installation and seeding?",
    answer: "Sod provides instant green coverage and immediate usability, while seeding takes weeks to establish and requires careful watering. Sod is ideal for quick curb appeal or lawn replacement projects. At Smith Landscaping Va, we prepare the ground properly to ensure long-term sod success in Henrico, VA."
  },
  {
    question: "How often should mulch be replaced in flower beds?",
    answer: "Mulch should typically be refreshed once or twice per year to maintain appearance and benefits like moisture retention and weed control. Spring and fall are ideal times for mulching in Henrico, VA. Fresh mulch also provides clean, defined edges that enhance curb appeal immediately."
  },
  {
    question: "How does hardscaping improve outdoor living spaces?",
    answer: "Hardscaping adds functional areas like patios and walkways that expand usable outdoor space year-round. These features are durable, low-maintenance, and increase property value. Customized designs fit each property's layout and style while enhancing both function and aesthetics."
  },
  {
    question: "What should I do after new sod is installed?",
    answer: "Water new sod daily for the first two weeks to help roots establish, then gradually reduce frequency. Avoid heavy foot traffic for at least three weeks. Proper aftercare ensures your new lawn thrives and remains healthy long-term in Henrico's climate."
  },
  {
    question: "What drainage problems are common in Henrico yards?",
    answer: "Common issues include standing water, runoff erosion, and soggy lawn areas caused by local soil composition and grading. These problems can damage property and prevent outdoor space use. Solutions like grading adjustments and drainage systems provide long-term fixes tailored to each yard."
  },
  {
    question: "Why is landscape design important before starting a project?",
    answer: "Design planning ensures proper plant selection, layout flow, and maximizes curb appeal based on property size and goals. It prevents costly mistakes and creates a cohesive vision. At Smith Landscaping Va, we collaborate with clients to tailor designs for Henrico properties."
  },
  {
    question: "How does mulching help control weeds?",
    answer: "Beyond suppressing weeds, mulch retains soil moisture, regulates root temperature, and prevents erosion. As it breaks down, it adds vital nutrients back into the soil. At Smith Landscaping VA, we apply a professional 2-3 inch layer to improve plant health while giving your Henrico property a clean, polished look."
  },
  {
    question: "Why is consistent commercial lawn care important for my business?",
    answer: "A well-maintained landscape is the first thing clients and tenants notice, directly impacting your business's professional image and property value. Beyond aesthetics, consistent commercial care ensures safety by keeping walkways clear of debris and maintaining clear sightlines for drivers."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-16 pb-24 px-[5%]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-4 block">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl text-enterprise-navy font-light tracking-wide mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
            Everything you need to know about our landscaping, hardscaping, and property maintenance services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-slate-100 last:border-b-0">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 px-8 text-enterprise-navy hover:text-accent-green transition-colors">
                <span className="text-[17px] pr-6">{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-slate-500 font-light leading-relaxed px-8 pb-8 pt-0 animate-in slide-in-from-top-2">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-enterprise-navy rounded-xl p-10 text-center text-white flex flex-col items-center">
          <HelpCircle size={48} className="text-accent-green mb-6" strokeWidth={1} />
          <h2 className="text-2xl font-light mb-4">Still have questions?</h2>
          <p className="text-white/80 font-light mb-8 max-w-md">
            Can't find the answer you're looking for? Please reach out to our team.
          </p>
          <Link 
            href="#contact"
            className="inline-block bg-accent-green text-white font-bold tracking-widest uppercase px-8 py-4 text-sm hover:bg-white hover:text-enterprise-navy transition-colors"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}
