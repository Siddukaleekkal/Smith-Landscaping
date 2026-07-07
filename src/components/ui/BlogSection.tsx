import Link from 'next/link';
import { getAllPosts } from '@/lib/content';
import { Newspaper } from 'lucide-react';

export default async function BlogSection() {
  const posts = await getAllPosts();
  
  // Get only the 3 most recent posts
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-24 px-[5%] bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {recentPosts.map(post => (
            <article key={post.id} className="group bg-white flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
              
              {/* Image with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.thumbnail || "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80"} 
                  alt={post.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge at Bottom Left */}
                <div className="absolute bottom-0 left-0 bg-accent-green text-white px-5 py-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Newspaper size={16} />
                  {post.category || 'ARTICLE'}
                </div>
              </div>
              
              {/* Title Content */}
              <div className="p-6 md:p-8 flex-grow">
                <h4 className="text-sm md:text-[15px] font-light text-enterprise-navy leading-relaxed line-clamp-3">
                  <Link href={`/resources/${post.id}`} className="hover:text-accent-green transition-colors">
                    {post.title}
                  </Link>
                </h4>
              </div>

            </article>
          ))}
        </div>
        
        {/* Bottom Link */}
        <div className="mt-16 text-center">
          <Link href="/resources" className="text-accent-green font-bold text-sm tracking-widest uppercase hover:text-enterprise-navy transition-colors">
            VIEW ALL RESOURCES
          </Link>
        </div>

      </div>
    </section>
  );
}
