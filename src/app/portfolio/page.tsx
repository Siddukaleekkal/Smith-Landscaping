import fs from 'fs';
import path from 'path';
import PortfolioGallery from '@/components/ui/PortfolioGallery';

export const metadata = {
  title: 'Our Portfolio | Smith Landscaping',
  description: 'Explore our portfolio of commercial landscaping projects.',
};

export default function PortfolioPage() {
  const portfolioDir = path.join(process.cwd(), 'public/portfolio');
  let images: string[] = [];
  
  if (fs.existsSync(portfolioDir)) {
    const files = fs.readdirSync(portfolioDir);
    images = files
      .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'))
      .map(file => `/portfolio/${file}`);
  }

  // Shuffle images to make the layout feel more dynamic on each build (optional, but good for masonry)
  // For static generation stability, we won't shuffle, just use them as is.

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      
      {/* Premium Header */}
      <section className="bg-enterprise-navy text-white pt-24 pb-20 px-[5%] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-6 block">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
            The Smith Landscaping Portfolio
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A visual showcase of our commitment to excellence. Explore the commercial properties we've transformed and maintained across our markets.
          </p>
        </div>
      </section>

      <PortfolioGallery images={images} />

    </div>
  );
}
