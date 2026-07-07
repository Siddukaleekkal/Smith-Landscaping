import { useState } from 'preact/hooks';

export default function ImageGallery({ initialImages }) {
  const [activeImage, setActiveImage] = useState(initialImages[0]);

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Project Gallery</h2>
      <div style={{ background: 'var(--concrete)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
        <img src={activeImage.src} alt={activeImage.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {initialImages.map((img, index) => (
          <button 
            key={index}
            onClick={() => setActiveImage(img)}
            style={{ 
              background: activeImage.src === img.src ? 'var(--accent-green)' : 'var(--concrete)',
              color: activeImage.src === img.src ? 'white' : 'inherit',
              border: 'none', 
              padding: '0.5rem 1rem', 
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            {img.alt}
          </button>
        ))}
      </div>
    </div>
  );
}
