import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function TrustedBy() {
  const logos = [
    { name: "CVS Health", url: "/CVS_Health-Logo.wine.png" },
    { name: "Carabbas", url: "/Carabbas.png" },
    { name: "Crunch Fitness", url: "/Crunch_Logo_2023.jpg" },
    { name: "Floor Decor", url: "/Floor Decor.webp" },
    { name: "Kohls", url: "/Kohl’s-logo.png" },
    { name: "Krispy Kreme", url: "/Krispy_Kreme_logo.svg.webp" },
    { name: "Sheetz", url: "/Sheetz.webp" },
    { name: "Walgreens", url: "/Walgreens logo.png" },
    { name: "Wawa", url: "/Wawa-Logo.jpg" },
  ];

  return (
    <section className="py-6 bg-white border-b border-border-color overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5%] text-center mb-6">
        <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider">Trusted by Industry Leaders</h3>
      </div>
      
      <div className="relative overflow-x-hidden group">
        <InfiniteSlider gap={64} duration={120} className="w-full">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-4 mix-blend-multiply flex justify-center items-center">
              <img src={logo.url} alt={logo.name} className="w-[150px] h-[60px] object-contain" />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
