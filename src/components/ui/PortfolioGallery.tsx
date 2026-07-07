"use client";

import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function PortfolioGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Masonry Grid Layout */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1600px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((src, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedImage(src)}
                className="group relative break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Smith Landscaping Portfolio Image ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Clean Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-enterprise-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-accent-green transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Enlarged Portfolio View" 
            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
