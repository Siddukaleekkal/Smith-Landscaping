import Hero from '@/components/ui/Hero';
import TrustedBy from '@/components/ui/TrustedBy';
import BusinessSummary from '@/components/ui/BusinessSummary';
import Capabilities from '@/components/ui/Capabilities';
import ReviewCarousel from '@/components/ui/ReviewCarousel';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustedBy />
        <BusinessSummary />
        <Capabilities />
        <ReviewCarousel />
      </main>
    </>
  );
}
