import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowRight, Sprout, MapPin, BookOpen, Leaf } from 'lucide-react';

import BlogSection from '@/components/ui/BlogSection';

export const metadata = {
  title: 'Company | Smith Landscaping',
  description: 'Learn about Smith Landscaping, our history, and our landscape lifecycle.',
};

export default function CompanyPage() {
  const leaders = [
    {
      name: 'Hudson',
      title: 'Founder and Owner',
      image: '/Hudson lead.jpeg',
      description: 'Hudson is the founder and owner of Smith Landscaping VA. He started the company with a commitment to raising the standard in the landscaping industry through exceptional communication and high-quality work. His vision has always been simple: deliver a professional experience, exceed expectations, and never settle for anything less than perfection.'
    },
    {
      name: 'Gerson',
      title: 'Labor and Project Lead',
      image: '/Gerson.webp',
      description: 'Gerson is the leader of all labor operations at Smith Landscaping VA. He oversees every crew in the field, making sure the work gets done safely, efficiently, and to the high standard our clients expect. While he plays a hand in all aspects of the business, his specialty is landscaping projects — leading installations from the ground up and ensuring every job is completed with precision and care.'
    },
    {
      name: 'Carlos',
      title: 'Maintenance Division Lead',
      image: '/Carlos.webp',
      description: 'Carlos heads up our maintenance division, making sure every property we service stays looking its best season after season. He leads his crew with consistency and attention to detail, building lasting relationships with our clients through reliable, high-quality service they can count on week after week.'
    },
    {
      name: 'Elkin',
      title: 'Project Crew - Hardscape Specialist',
      image: '/Elkin.webp',
      description: 'Elkin is a key member of our project crew at Smith Landscaping VA, and the go-to guy when it comes to hardscaping. Whether it\'s patios, retaining walls, walkways, or any work involving stone, brick, and concrete, Elkin brings the craftsmanship and attention to detail that turns outdoor spaces into something truly special.'
    },
    {
      name: 'Giovanny',
      title: 'Maintenance Crew',
      image: '/Giovanny.webp',
      description: 'Giovanny is an essential part of our maintenance team, supporting Carlos in keeping our clients\' properties pristine. His reliability and work ethic reflect the Smith Landscaping VA standard — showing up, putting in the effort, and taking pride in the results every single time.'
    },
    {
      name: 'Luis',
      title: 'Project Crew',
      image: '/Luis.webp',
      description: 'Luis is a valued member of our project crew, bringing hard work and a great attitude to every job site. Working alongside Gerson, he helps bring landscaping projects to life with the hands-on effort and team spirit that make Smith Landscaping VA run the way it does.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* 1. Top Header: About Smith Landscaping */}
      <section className="bg-enterprise-navy text-white py-24 text-center px-[5%] relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">
            About Smith Landscaping
          </h1>
          <p className="text-white/90 text-[15px] leading-relaxed max-w-2xl mb-8 font-light">
            Relationships and results drive us. We put our teams and our clients first, and take pride in their success. We're focused on providing unparalleled service that exceeds your expectations and results that help you succeed.
          </p>
        </div>
      </section>


      {/* 2. Split Block (Image + Great Service) */}
      <section className="flex flex-col md:flex-row w-full min-h-[500px] lg:h-[75vh]">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <Image
            src="/new team picture.jpeg"
            alt="Smith Landscaping Team"
            fill
            className="object-cover object-top"
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right Side White Block */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-12 md:p-24 text-enterprise-navy">
          <div className="max-w-md w-full">
            <h3 className="text-3xl font-bold mb-6 leading-snug">
              Great Service. Beautiful Landscapes.
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-10 font-light">
              Benefit from a comprehensive landscape maintenance plan designed to meet your needs and exceed your expectations, all delivered by a team invested in your success.
            </p>
            <Link
              href="#services"
              className="inline-block border-2 border-accent-green text-enterprise-navy text-[12px] font-bold tracking-widest px-8 py-3 uppercase hover:bg-accent-green hover:text-white transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
      {/* 4. Divider Line */}
      <div className="w-full h-2 bg-accent-green"></div>

      {/* 3. Two Text Columns */}
      <section className="py-20 px-[5%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-slate-500">
          <div>
            <h3 className="text-xl text-enterprise-navy font-light mb-4">Seasoned Experts. Innovative Thinkers.</h3>
            <p className="text-[14px] leading-relaxed mb-6 font-light">
              Our professionals are backed by the support of an accomplished leadership team, dedicated to empowering solutions that enable our clients' success.
            </p>

          </div>
          <div>
            <h3 className="text-xl text-enterprise-navy font-light mb-4">Decades of Combined Experience</h3>
            <p className="text-[14px] leading-relaxed font-light">
              With roots dating back over three decades, see the evolution of our teams into Smith Landscaping — Virginia's top leader in commercial landscaping.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-b border-slate-200 mt-20"></div>
      </section>

      {/* 3.5. Team Grid */}
      <section className="py-24 px-[5%] bg-[#F8F9FA]" id="leadership">
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {leaders.map((leader, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer bg-white p-6 rounded-sm shadow-sm border border-slate-100 transition-shadow hover:shadow-md">

                {/* Image Container */}
                <div className="relative w-[85%] mx-auto aspect-square mb-8 overflow-hidden bg-slate-100 rounded-sm border-[4px] border-white shadow-sm">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-enterprise-navy/0 group-hover:bg-enterprise-navy/10 transition-colors duration-500 rounded-sm"></div>
                </div>

                {/* Text Info */}
                <h3 className="text-2xl font-bold text-enterprise-navy mb-2 tracking-wide group-hover:text-accent-green transition-colors text-center">
                  {leader.name}
                </h3>
                <p className="text-accent-green text-[12px] font-extrabold tracking-widest uppercase mb-6 text-center">
                  {leader.title}
                </p>

                {/* Biography */}
                <p className="text-slate-500 text-[14px] leading-relaxed font-light mb-6 flex-grow text-center">
                  {leader.description}
                </p>

                {/* Very subtle bottom line indicator */}
                <div className="h-[2px] w-8 bg-accent-green mt-auto mx-auto transform transition-all duration-300 group-hover:w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* 7. Blog Section */}
      <div className="pt-8">
        <BlogSection />
      </div>



    </div>
  );
}
