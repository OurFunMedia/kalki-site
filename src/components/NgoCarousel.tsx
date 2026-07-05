'use client';

import React from 'react';

// Using actual images from public/images/ngo-gallery
const DEFAULT_IMAGES = [
  '/images/ngo-gallery/p01.jpg',
  '/images/ngo-gallery/p02.jpg',
  '/images/ngo-gallery/p03.jpg',
  '/images/ngo-gallery/p04.jpg',
  '/images/ngo-gallery/p05.jpg',
  '/images/ngo-gallery/p06.jpg',
  '/images/ngo-gallery/p07.jpg',
  '/images/ngo-gallery/p08.jpg',
  '/images/ngo-gallery/p09.jpg',
  '/images/ngo-gallery/p10.jpg',
  '/images/ngo-gallery/p11.jpg',
  '/images/ngo-gallery/p12.jpg',
  '/images/ngo-gallery/p13.jpg',
  '/images/ngo-gallery/p14.jpg',
  '/images/ngo-gallery/p15.jpg',
  '/images/ngo-gallery/p16.jpg',
  '/images/ngo-gallery/p17.jpg',
  '/images/ngo-gallery/p18.jpg',
  '/images/ngo-gallery/p19.jpg',
  '/images/ngo-gallery/p20.jpg',
];

export default function NgoCarousel() {
  // We duplicate the array to create a seamless infinite scroll effect
  const carouselImages = [...DEFAULT_IMAGES, ...DEFAULT_IMAGES];

  return (
    <div className="w-full mt-8 overflow-hidden bg-cream py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 mb-6 text-center">
            <h3 className="text-3xl font-serif text-charcoal mb-4">活動花絮</h3>
            <p className="text-stone-600 font-medium">記錄我們在不同社區與學校的美好瑜伽時光</p>
        </div>
        
        {/* Carousel Container */}
        <div className="flex overflow-hidden group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 pl-6">
                {carouselImages.map((src, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                        style={{ width: '300px', height: '220px' }}
                    >
                        <img 
                            src={src} 
                            alt={`NGO活動花絮 ${index + 1}`} 
                            className="absolute inset-0 w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700" 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            
            {/* Duplicate for seamless looping */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 pl-6" aria-hidden="true">
                {carouselImages.map((src, index) => (
                    <div 
                        key={`dup-${index}`} 
                        className="flex-shrink-0 relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                        style={{ width: '300px', height: '220px' }}
                    >
                        <img 
                            src={src} 
                            alt="" 
                            className="absolute inset-0 w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-700" 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
