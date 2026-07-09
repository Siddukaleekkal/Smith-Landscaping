import { getPostBySlug, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.id }));
}

const defaultImages = [
  'https://images.unsplash.com/photo-1558904541-efa843a96f09?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80'
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get index for deterministic default image
  const posts = await getAllPosts();
  const index = posts.findIndex(p => p.id === resolvedParams.slug) || 0;
  const image = post.thumbnail || defaultImages[index % defaultImages.length];

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Back Link */}
        <Link href="/resources" className="inline-flex items-center text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase hover:text-accent-green mb-16 transition-colors">
          &larr; BACK TO RESOURCES
        </Link>

        {/* Post Header */}
        <div className="max-w-4xl">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-green uppercase mb-6 block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-[56px] leading-[1.1] text-enterprise-navy font-light mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 py-6 border-t border-b border-slate-100 text-xs font-medium text-slate-500 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
                <img src="/Logos/logo-green-va.png" alt="Smith Strategy" className="w-full h-full object-contain p-0.5" />
              </div>
              <span className="text-enterprise-navy">Smith Strategy</span>
            </div>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <span>{post.readingTime || 5} min read</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] md:h-[600px] rounded-[24px] overflow-hidden mb-20 bg-slate-100">
          <img src={image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Main Content */}
          <div 
            className="w-full lg:w-[65%] prose prose-slate max-w-none font-sans prose-headings:font-sans prose-headings:text-enterprise-navy prose-headings:font-bold prose-headings:tracking-tight prose-h3:text-2xl md:prose-h3:text-[28px] prose-h3:mb-4 prose-h3:mt-12 prose-a:text-accent-green prose-p:leading-[1.8] prose-p:text-slate-500 prose-p:text-[15px] md:prose-p:text-[16px] prose-p:mb-0 prose-li:text-slate-500 prose-li:leading-[1.8]" 
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} 
          />

          {/* Right Sidebar */}
          <div className="w-full lg:w-[35%] relative">
            <div className="sticky top-32 flex flex-col gap-8">
              
              {/* In This Article */}
              <div className="bg-[#F8F9FA] rounded-[16px] p-8 border border-slate-100">
                <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase mb-6">IN THIS ARTICLE</h3>
                <ul className="flex flex-col gap-4 text-[13px] text-slate-600">
                  {post.bullets && post.bullets.length > 0 ? (
                    post.bullets.map((bullet, idx) => {
                      const id = bullet.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <li key={idx}>
                          <a href={`#${id}`} className="flex gap-4 hover:text-accent-green cursor-pointer transition-colors">
                            <span className="text-slate-300">0{idx + 1}</span> {bullet}
                          </a>
                        </li>
                      );
                    })
                  ) : (
                    <>
                      <li><a href="#introduction" className="flex gap-4 hover:text-accent-green cursor-pointer transition-colors"><span className="text-slate-300">01</span> Introduction</a></li>
                      <li><a href="#maintenance-overview" className="flex gap-4 hover:text-accent-green cursor-pointer transition-colors"><span className="text-slate-300">02</span> Maintenance Overview</a></li>
                    </>
                  )}
                </ul>
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
