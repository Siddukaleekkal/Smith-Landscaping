import Link from 'next/link';

export default function ServiceGrid() {
  return (
    <section className="py-20 px-[5%] bg-light-stone">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl mb-2 font-extrabold text-enterprise-navy">Many Capabilities, One Focus: You</h2>
        <p className="text-lg text-gray-600 mb-12">Get the ease of a single provider who can help with all your landscape needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=400&q=80" alt="Design" className="w-full h-[200px] object-cover" />
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-extrabold text-enterprise-navy">Design</h3>
              <p className="text-gray-600 mb-6 text-sm">Forward-thinking, constructible design that considers future operating costs.</p>
              <Link href="#design" className="font-semibold text-accent-green hover:underline">View &rarr;</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80" alt="Develop" className="w-full h-[200px] object-cover" />
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-extrabold text-enterprise-navy">Develop</h3>
              <p className="text-gray-600 mb-6 text-sm">Seamless project delivery by technically savvy contractors who deliver on goals.</p>
              <Link href="#develop" className="font-semibold text-accent-green hover:underline">View &rarr;</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80" alt="Maintain" className="w-full h-[200px] object-cover" />
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-extrabold text-enterprise-navy">Maintain</h3>
              <p className="text-gray-600 mb-6 text-sm">Consistent service delivery and proactive solutions that keep your property at its best.</p>
              <Link href="#maintain" className="font-semibold text-accent-green hover:underline">View &rarr;</Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80" alt="Enhance" className="w-full h-[200px] object-cover" />
            <div className="p-6">
              <h3 className="text-2xl mb-4 font-extrabold text-enterprise-navy">Enhance</h3>
              <p className="text-gray-600 mb-6 text-sm">Thoughtful improvements to enrich your landscape's appearance and sustainability.</p>
              <Link href="#enhance" className="font-semibold text-accent-green hover:underline">View &rarr;</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
