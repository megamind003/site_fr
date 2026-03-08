'use client'

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'exterior' | 'events';
}

interface GalleryProps {
  images?: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const defaultImages: GalleryImage[] = [
  { id: '1', src: '/images/gallery/dish-1.jpg', alt: 'Piatto di pasta', category: 'food' },
  { id: '2', src: '/images/gallery/dish-2.jpg', alt: 'Secondo di carne', category: 'food' },
  { id: '3', src: '/images/gallery/interior-1.jpg', alt: 'Sala ristorante', category: 'interior' },
  { id: '4', src: '/images/gallery/exterior-1.jpg', alt: 'Esterno locale', category: 'exterior' },
];

export function Gallery({ images = defaultImages, title, subtitle }: GalleryProps) {
  const [filter, setFilter] = useState<'all' | GalleryImage['category']>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'Tutti' },
    { id: 'food', label: 'Piatti' },
    { id: 'interior', label: 'Sala' },
    { id: 'exterior', label: 'Esterno' },
    { id: 'events', label: 'Eventi' },
  ] as const;

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-terracotta-600 font-medium mb-2 animate-fade-in">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-ocean-900 animate-fade-in">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300
                ${filter === cat.id
                  ? 'bg-terracotta-600 text-white shadow-lg scale-105'
                  : 'bg-white text-ocean-700 hover:bg-ocean-50 border border-ocean-200'
                }
                hover:shadow-md
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-terracotta-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded-lg object-contain max-h-[85vh]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
