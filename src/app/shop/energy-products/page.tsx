import Navbar from "@/components/Navbar";
import Link from "next/link";
import { load } from 'outstatic/server';
import ProductFilters from "@/components/shop/ProductFilters";
import { Suspense } from "react";

type Product = {
    title: string
    price: string
    purchaseLink?: string
    description?: string
    slug: string
    coverImage?: string
    category?: string
}

async function getCategoryProducts() {
    try {
        const db = await load()
        const products = await db
            .find({ collection: 'products', status: 'published' })
            .project(['title', 'price', 'purchaseLink', 'description', 'slug', 'coverImage', 'category'])
            .sort({ publishedAt: 1 })
            .toArray()
        return (products || []) as unknown as Product[];
    } catch (error) {
        console.error('Error loading products:', error);
        return [];
    }
}

export default async function EnergyProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;
    const q = typeof params.q === 'string' ? params.q : '';
    const category = typeof params.category === 'string' ? params.category : '';

    const allProducts = await getCategoryProducts() || [];
    
    // Extract unique categories
    const categories = Array.from(new Set(allProducts.map(p => p?.category).filter(Boolean))) as string[];

    // Filter products
    const filteredProducts = allProducts.filter(product => {
        if (!product || !product.title) return false;
        
        const matchesSearch = !q || 
            product.title.toLowerCase().includes(q.toLowerCase()) || 
            (product.description && typeof product.description === 'string' && product.description.toLowerCase().includes(q.toLowerCase()));
        
        const matchesCategory = !category || product.category === category;
        
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            
            <div className="max-w-6xl mx-auto py-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    {/* Left: Breadcrumbs & Promo */}
                    <div>
                        <div className="flex items-center text-stone-500 mb-6 text-sm tracking-widest">
                            <Link href="/shop" className="hover:text-primary transition-colors">商店</Link>
                            <span className="mx-3">&gt;</span>
                            <span className="text-primary font-medium">空間及個人能量用品</span>
                        </div>
                        <div className="text-xl md:text-2xl tracking-widest text-[#4A3B32] pb-1 font-serif">
                            消費滿$1000 <span className="text-[#8B7355]">包郵</span>
                        </div>
                    </div>

                    {/* Right: Search & Filter */}
                    <Suspense fallback={<div className="h-10 w-64 bg-stone-100 animate-pulse rounded-full" />}>
                        <ProductFilters 
                            initialSearch={q} 
                            initialCategory={category} 
                            categories={categories}
                        />
                    </Suspense>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 text-stone-500 bg-white/50 rounded-2xl border border-stone-100 flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-stone-300"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <p className="text-lg mb-2">找不到相關商品</p>
                        <p className="text-sm">試試更改關鍵字或篩選條件</p>
                        {(q || category) && (
                            <Link href="/shop/energy-products" className="mt-6 text-[#8B7355] border-b border-[#8B7355] pb-0.5 hover:text-[#4A3B32] hover:border-[#4A3B32] transition-colors">
                                清除所有篩選
                            </Link>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                        {filteredProducts.map((product) => (
                            <div key={product.slug} className="border-2 border-[#4A3B32] bg-white aspect-[3/4] flex flex-col p-6 text-center hover:shadow-lg transition-all group relative overflow-hidden">
                                <Link href={`/shop/product/${product.slug}`} className="absolute inset-0 z-10">
                                    <span className="sr-only">了解更多 {product.title}</span>
                                </Link>
                                <div className="w-full flex-grow bg-stone-50 mb-6 flex items-center justify-center text-stone-400 border border-stone-100 group-hover:bg-stone-100 transition-colors relative overflow-hidden">
                                    {product.coverImage ? (
                                        <img src={product.coverImage} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <span>Product Image</span>
                                    )}
                                </div>
                                <h3 className="text-xl font-serif text-[#1a1a1a] mb-2 z-20 relative pointer-events-none">{product.title}</h3>
                                {product.price && <p className="text-[#8B7355] font-medium z-20 relative pointer-events-none">{product.price}</p>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
