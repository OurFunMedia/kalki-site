'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

interface ProductFiltersProps {
  initialSearch?: string
  initialCategory?: string
  categories: string[]
}

export default function ProductFilters({
  initialSearch = '',
  initialCategory = '',
  categories
}: ProductFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Sync state with props when他们 change (e.g. clear all or browser navigation)
  useEffect(() => {
    setSearch(initialSearch)
  }, [initialSearch])

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  // Create query string
  const createQueryString = useCallback(
    (paramsToUpdate: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString())
      Object.entries(paramsToUpdate).forEach(([name, value]) => {
        if (value) {
          params.set(name, value)
        } else {
          params.delete(name)
        }
      })
      return params.toString()
    },
    [searchParams]
  )

  const performSearch = useCallback((value: string) => {
    const query = createQueryString({ q: value })
    router.push(`${pathname}?${query}`, { scroll: false })
  }, [createQueryString, pathname, router])

  // Debounce search
  useEffect(() => {
    if (search === initialSearch) return

    const timer = setTimeout(() => {
      performSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search, initialSearch, performSearch])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      performSearch(search)
    }
  }

  const handleCategorySelect = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category
    setSelectedCategory(newCategory)
    const query = createQueryString({ category: newCategory })
    router.push(`${pathname}?${query}`, { scroll: false })
    setIsFilterOpen(false)
  }

  const clearAll = () => {
    setSearch('')
    setSelectedCategory('')
    router.push(pathname, { scroll: false })
    setIsFilterOpen(false)
  }

  return (
    <div className="flex items-center gap-4 w-full md:w-auto relative">
      <div className="relative flex-grow md:flex-grow-0">
        <input 
          type="text" 
          placeholder="搜尋商品..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full md:w-64 pl-4 pr-10 py-2.5 border border-stone-300 rounded-full bg-white text-sm focus:outline-none focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-shadow shadow-sm"
        />
        <button 
          onClick={() => performSearch(search)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#4A3B32] transition-colors"
          aria-label="搜尋"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>
      
      <div className="relative">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-5 py-2.5 border rounded-full text-sm transition-all whitespace-nowrap shadow-sm ${
            isFilterOpen || selectedCategory 
              ? 'bg-[#4A3B32] text-white border-[#4A3B32]' 
              : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50 hover:border-stone-400'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" y1="2" y2="6"/><line x1="8" y1="10" y2="14"/><line x1="16" y1="18" y2="22"/></svg>
          {selectedCategory || '篩選'}
        </button>

        {isFilterOpen && (
          <>
            <div 
              className="fixed inset-0 z-20" 
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-56 bg-white border border-stone-200 rounded-xl shadow-xl z-30 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 mb-1">
                產品類別
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-stone-50 ${
                    selectedCategory === category ? 'text-[#8B7355] font-medium bg-stone-50' : 'text-stone-600'
                  }`}
                >
                  {category}
                </button>
              ))}
              {(selectedCategory || search) && (
                <div className="mt-1 pt-1 border-t border-stone-100">
                  <button
                    onClick={clearAll}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    重設所有篩選
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
