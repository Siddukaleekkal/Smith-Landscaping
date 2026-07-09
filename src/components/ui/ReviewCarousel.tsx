import { Star } from 'lucide-react';
import { InfiniteSlider } from './infinite-slider';

export default function ReviewCarousel() {
  // Replace these placeholders with the actual reviews from your Google Business Profile!
  const reviews = [
    {
      name: "Michael R.",
      date: "2 months ago",
      text: "Smith Landscaping completely transformed our commercial property. The team was professional, timely, and the quality of their hardscaping work is unmatched. Highly recommend them for any large-scale project.",
      rating: 5
    },
    {
      name: "Sarah J.",
      date: "5 months ago",
      text: "Hudson and his crew are phenomenal. They handle the maintenance for our HOA and the grounds have never looked better. Great communication and always reliable.",
      rating: 5
    },
    {
      name: "David W.",
      date: "1 year ago",
      text: "We hired Smith Landscaping for a complete redesign of our outdoor living space including a new patio and retaining wall. Elkin's stonework is beautiful. We couldn't be happier with the results.",
      rating: 5
    },
    {
      name: "Emily T.",
      date: "3 months ago",
      text: "Professional from start to finish. The team showed up on time, worked hard, and left the property spotless. The new sod installation took perfectly.",
      rating: 5
    },
    {
      name: "James L.",
      date: "4 months ago",
      text: "Best landscaping company in VA. They handle both our office building and my personal residence. Consistent, high-quality work every single time.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white px-[5%] border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-light text-enterprise-navy tracking-wide mb-4">
          What Our Clients Say
        </h2>
        <p className="text-slate-500 font-light">
          Real reviews from our satisfied customers
        </p>
      </div>

      <div className="relative overflow-x-hidden group pb-8">
        <InfiniteSlider gap={24} duration={120} durationOnHover={250} className="w-full pb-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-[#F8F9FA] border border-slate-200 rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#fbbc04] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-enterprise-navy text-white flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-enterprise-navy tracking-wide">{review.name}</h4>
                  <p className="text-xs text-slate-400 font-light">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
