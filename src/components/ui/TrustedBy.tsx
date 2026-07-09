import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function TrustedBy() {
  const logos = [
    { name: "CVS Health", url: "/Logos/CVS_Health-Logo.wine.png" },
    { name: "Carabbas", url: "/Logos/Carabbas.png" },
    { name: "Crunch Fitness", url: "/Logos/Crunch_Logo_2023.jpg" },
    { name: "Floor Decor", url: "/Logos/Floor Decor.webp" },
    { name: "Kohls", url: "/Logos/Kohl’s-logo.png" },
    { name: "Krispy Kreme", url: "/Logos/Krispy_Kreme_logo.svg.webp" },
    { name: "Sheetz", url: "/Logos/Sheetz.webp" },
    { name: "Walgreens", url: "/Logos/Walgreens logo.png" },
    { name: "Wawa", url: "/Logos/Wawa-Logo.jpg" },
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
