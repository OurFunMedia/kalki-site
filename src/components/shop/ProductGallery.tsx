'use client'

import { useState, useCallback, useEffect, useRef } from 'react'

// ── Types ──

type MediaType = 'image' | 'video' | 'youtube' | 'placeholder'

type MediaItem = {
  type: MediaType
  src: string
  poster?: string      // video poster / thumbnail
  label: string
}

// ── Helpers ──

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov|ogg)(\?|$)/i.test(url)
}

function isYouTubeUrl(url: string): boolean {
  return /(youtube\.com|youtu\.be)/i.test(url)
}

function youtubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : url
}

function youtubeThumb(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/)
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : ''
}

function placeholderSvg(productName: string, index: number, label: string): string {
  const colors = [
    ['#f5f0eb', '#e8ddd3'],
    ['#e8ddd3', '#d4c4b5'],
    ['#d4c4b5', '#c7b3a0'],
    ['#f0ebe5', '#e3d6ca'],
    ['#e3d6ca', '#d5c2b0'],
  ]
  const [c1, c2] = colors[index % colors.length]
  const text = productName || 'Product'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1}"/><stop offset="100%" style="stop-color:${c2}"/>
    </linearGradient></defs>
    <rect width="800" height="800" fill="url(#g)"/>
    <text x="400" y="380" font-family="sans-serif" font-size="28" fill="#b59a85" text-anchor="middle" font-weight="300">${text}</text>
    <text x="400" y="430" font-family="sans-serif" font-size="18" fill="#c7b3a0" text-anchor="middle" font-weight="300">${label}</text>
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

function classifyUrl(src: string): MediaType {
  if (!src || src.startsWith('data:')) return 'placeholder'
  if (isYouTubeUrl(src)) return 'youtube'
  if (isVideoUrl(src)) return 'video'
  return 'image'
}

// ── Props ──

interface ProductGalleryProps {
  images?: string[]     // image URLs
  videos?: string[]     // video URLs (mp4/webm or YouTube links)
  productName: string
  autoPlayInterval?: number   // ms, default 4000
}

// ── Component ──

export default function ProductGallery({
  images,
  videos,
  productName,
  autoPlayInterval = 4000,
}: ProductGalleryProps) {
  // ── Build combined media list ──
  const buildMedia = useCallback((): MediaItem[] => {
    const hasReal = (arr?: string[]) => arr && arr.length > 0 && arr.some(i => i && !i.startsWith('data:'))
    const imageItems: MediaItem[] = (images || []).filter(Boolean).map((src, i) => {
      const type = classifyUrl(src)
      return {
        type,
        src: type === 'placeholder' ? placeholderSvg(productName, i, `Photo ${i + 1}`) : src,
        label: `${productName} — ${i + 1}`,
      }
    })
    const videoItems: MediaItem[] = (videos || []).filter(Boolean).map((src, i) => ({
      type: classifyUrl(src),
      src,
      poster: isYouTubeUrl(src) ? youtubeThumb(src) : undefined,
      label: `${productName} — Video ${i + 1}`,
    }))

    const combined = [...imageItems, ...videoItems]

    // No real content at all → auto-generate placeholders
    if (!hasReal(images) && !hasReal(videos)) {
      const count = Math.max(combined.length || 4, 4)
      return Array.from({ length: count }, (_, i) => ({
        type: 'placeholder' as MediaType,
        src: placeholderSvg(productName, i, `Photo ${i + 1}`),
        label: `${productName} — ${i + 1}`,
      }))
    }

    return combined
  }, [images, videos, productName])

  const media = useRef(buildMedia())
  // Rebuild when deps change
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(media.current)
  useEffect(() => {
    const m = buildMedia()
    media.current = m
    setMediaItems(m)
  }, [buildMedia])

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setGlobalPause] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  // Reset index when media changes
  useEffect(() => {
    setActiveIndex(0)
  }, [images?.join(','), videos?.join(',')])

  const goTo = useCallback((index: number) => {
    const len = mediaItems.length
    if (len === 0) return
    // Pause any playing video before switching
    if (videoRef.current) { videoRef.current.pause(); videoRef.current = null }
    setVideoPlaying(false)
    if (index < 0) setActiveIndex(len - 1)
    else if (index >= len) setActiveIndex(0)
    else setActiveIndex(index)
  }, [mediaItems.length])

  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex])

  // Auto-play interval — paused when hovering OR when video is playing
  const shouldPause = isPaused || videoPlaying
  useEffect(() => {
    if (mediaItems.length <= 1 || shouldPause) {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
      return
    }
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % mediaItems.length)
    }, autoPlayInterval)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [mediaItems.length, shouldPause, autoPlayInterval])

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    if (mediaItems.length > 1) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [goPrev, goNext, mediaItems.length])

  // ── Render helpers ──

  const renderMainSlide = (item: MediaItem, index: number) => {
    switch (item.type) {
      case 'video':
        return (
          <video
            ref={(el) => { videoRef.current = el }}
            key={`video-${index}`}
            src={item.src}
            poster={item.poster}
            className="w-full h-full object-contain bg-black/5"
            controls
            playsInline
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
            onEnded={() => setVideoPlaying(false)}
          />
        )
      case 'youtube':
        return (
          <div className="relative w-full h-full">
            <iframe
              ref={iframeRef}
              src={youtubeEmbedUrl(item.src)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      case 'placeholder':
      case 'image':
      default:
        return (
          <img
            key={`img-${index}`}
            src={item.src}
            alt={item.label}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        )
    }
  }

  const renderThumbnail = (item: MediaItem, index: number) => {
    const isActive = index === activeIndex
    const isVideo = item.type === 'video' || item.type === 'youtube'

    let thumbSrc = item.src
    if (item.type === 'youtube' && item.poster) thumbSrc = item.poster
    if (item.type === 'video' && item.poster) thumbSrc = item.poster

    return (
      <button
        key={index}
        onClick={() => goTo(index)}
        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 overflow-hidden transition-all duration-200 focus:outline-none ${
          isActive
            ? 'border-primary opacity-100 shadow-sm'
            : 'border-transparent opacity-60 hover:opacity-90 hover:border-secondary/40'
        }`}
        aria-label={`${productName} — ${item.type === 'video' || item.type === 'youtube' ? '影片' : '圖片'} ${index + 1}`}
      >
        <img
          src={thumbSrc}
          alt=""
          className="w-full h-full object-cover"
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        )}
      </button>
    )
  }

  // ── Empty state ──
  if (mediaItems.length === 0) {
    return (
      <div className="w-full bg-stone-50 border border-stone-200 flex items-center justify-center aspect-square md:aspect-[4/5]">
        <span className="text-lg tracking-widest text-stone-400">Product Image</span>
      </div>
    )
  }

  const current = mediaItems[activeIndex]

  return (
    <div
      className="w-full select-none"
      onMouseEnter={() => setGlobalPause(true)}
      onMouseLeave={() => setGlobalPause(false)}
      onFocus={() => setGlobalPause(true)}
      onBlur={() => setGlobalPause(false)}
    >
      {/* Main display */}
      <div className="relative w-full bg-stone-50 border border-stone-200 overflow-hidden aspect-square md:aspect-[4/5] group">
        {renderMainSlide(current, activeIndex)}

        {/* Navigation arrows */}
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-charcoal/70 hover:text-charcoal rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="上一張"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-charcoal/70 hover:text-charcoal rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="下一張"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5">
              {current.type === 'video' || current.type === 'youtube' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              )}
              <span>{activeIndex + 1} / {mediaItems.length}</span>
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {mediaItems.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {mediaItems.map((item, i) => renderThumbnail(item, i))}
        </div>
      )}
    </div>
  )
}
