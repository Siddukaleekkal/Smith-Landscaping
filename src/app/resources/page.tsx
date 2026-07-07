import Link from 'next/link';
import { getAllPosts } from '@/lib/content';

export const metadata = {
  title: 'Resources & Insights | Smith Landscaping',
  description: 'Read the latest landscaping insights, strategy, and maintenance tips.',
};

const defaultImages = [
  'https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
];

export default async function ResourcesPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase flex-shrink-0">RESOURCES</span>
            <div className="h-[1px] bg-slate-200 w-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl text-enterprise-navy font-light tracking-tight max-w-3xl">
            Thoughts on the future of commercial property management.
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post, index) => (
            <Link href={`/resources/${post.id}`} key={post.id} className="group flex flex-col">
              <div className="w-full aspect-[16/10] bg-slate-200 mb-6 overflow-hidden">
                <img 
                  src={post.thumbnail || defaultImages[index % defaultImages.length]} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-4">
                <span className="border border-slate-300 px-2 py-1">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
              </div>
              <h2 className="text-xl md:text-2xl text-enterprise-navy font-bold mb-3 leading-snug group-hover:underline decoration-accent-green decoration-2 underline-offset-4">
                {post.title}
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
