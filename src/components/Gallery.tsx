import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, AlertCircle } from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: '/images/hero.jpg',
    title: 'Contemporary Salon Ambience',
    category: 'Interior & Space',
    caption: 'Curated styling environment featuring warm ambient lighting and contemporary salon stations.',
  },
  {
    id: 'g-2',
    image: '/images/service-haircut.jpg',
    title: 'Precision Scissor Work',
    category: 'Haircut & Styling',
    caption: 'Bespoke cutting and texturizing technique focused on natural movement.',
  },
  {
    id: 'g-3',
    image: '/images/service-color.jpg',
    title: 'Dimensional Colour & Blowout',
    category: 'Hair Colour',
    caption: 'Rich tones and luminous hair finish with professional styling.',
  },
  {
    id: 'g-4',
    image: '/images/service-facial.jpg',
    title: 'Tranquil Skincare Sanctuary',
    category: 'Skin & Beauty',
    caption: 'Restorative facial care and gentle botanical application.',
  },
  {
    id: 'g-5',
    image: '/images/service-grooming.jpg',
    title: 'Classic Grooming & Beard Care',
    category: 'Men\'s Grooming',
    caption: 'Clean line contouring, beard sculpting, and relaxing hot towel treatment.',
  },
];

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
  }, [activeImageIndex]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [activeImageIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleCloseLightbox, handleNext, handlePrev]);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#111111] relative"
      aria-label="Salon Aesthetic Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-3">
              Aesthetic Inspiration.
            </h2>
            <p className="text-sm sm:text-base text-[#F5F1EA]/70 font-light">
              Explore the styling atmosphere, precision craftsmanship, and aesthetic inspiration that guide our daily salon craft.
            </p>
          </div>

          {/* Transparent authenticity disclosure */}
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#1C1C1C] border border-white/10 text-xs text-[#F5F1EA]/70 max-w-sm">
            <AlertCircle className="w-4 h-4 text-[#C6A46A] shrink-0" />
            <span className="text-[11px] leading-tight font-light">
              Illustrative editorial inspiration. Owner-approved photographs of HeadOffice Unisex Salon can be updated directly in config.
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-[#181818] border border-white/5 cursor-pointer shadow-md hover:border-[#C6A46A]/50 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#111111]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#C6A46A]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-wider text-[#C6A46A] font-semibold mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-[#F5F1EA] font-normal leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-2 text-[#F5F1EA] hover:text-[#C6A46A] transition-colors focus:outline-none"
            aria-label="Close Lightbox (Esc)"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1C1C]/80 border border-white/10 text-[#F5F1EA] hover:text-[#C6A46A] hover:bg-[#252525] transition-all focus:outline-none"
            aria-label="Previous Image (Left arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1C1C]/80 border border-white/10 text-[#F5F1EA] hover:text-[#C6A46A] hover:bg-[#252525] transition-all focus:outline-none"
            aria-label="Next Image (Right arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={GALLERY_ITEMS[activeImageIndex].image}
              alt={GALLERY_ITEMS[activeImageIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold">
                {GALLERY_ITEMS[activeImageIndex].category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1EA] mt-1">
                {GALLERY_ITEMS[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F1EA]/70 mt-1 font-light max-w-lg mx-auto">
                {GALLERY_ITEMS[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
