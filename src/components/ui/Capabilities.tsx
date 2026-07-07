export default function Capabilities() {
  const steps = [
    {
      title: "Design",
      description: "Forward-thinking, constructible design that considers future operating costs",
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Develop",
      description: "Seamless project delivery by technically savvy contractors who deliver on your project goals and long-term expectations",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Maintain",
      description: "Consistent service delivery and proactive solutions that keep your property at its best, now and in the future",
      img: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Enhance",
      description: "Thoughtful improvements to enrich your landscape's appearance and sustainability",
      img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <section className="w-full font-sans bg-white flex flex-col">
      {/* Top Banner */}
      <div className="bg-enterprise-navy w-full pt-24 pb-[120px] px-[5%] text-center border-t-[20px] border-accent-green">
        <h2 className="text-3xl md:text-[40px] text-white font-light tracking-wide mb-6">
          Many Capabilities, One Focus: <span className="font-bold">You</span>
        </h2>
        <p className="text-white/90 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
          Get the ease of a single provider who can help with all your landscape needs.
        </p>
      </div>

      {/* The overlapping area containing the line and circles */}
      <div className="relative w-full">
        {/* Full-width Line exactly on the boundary between navy and white */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-accent-green z-0 -translate-y-1/2"></div>

        {/* 4 Circles Grid */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] -mt-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Circular Photo */}
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-[6px] border-accent-green bg-white shadow-lg mb-8 hover:scale-105 transition-transform duration-500">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Text */}
                <h3 className="text-[26px] text-accent-green font-light mb-4">{step.title}</h3>
                <p className="text-slate-500 text-[13px] leading-[1.8] font-light px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom spacing */}
      <div className="pb-32"></div>
    </section>
  );
}
