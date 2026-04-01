import Navbar from "@/components/Navbar";
import Link from "next/link";
import { load } from 'outstatic/server';

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
    const db = await load()
    const products = await db
        .find({ collection: 'products', status: 'published' })
        .project(['title', 'price', 'purchaseLink', 'description', 'slug', 'coverImage', 'category'])
        .sort({ publishedAt: 1 })
        .toArray()
    return products as unknown as Product[];
}

export default async function EnergyProductsPage() {
    let products = await getCategoryProducts();

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
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <input 
                                type="text" 
                                placeholder="搜尋" 
                                className="w-full md:w-64 pl-4 pr-10 py-2.5 border border-stone-300 rounded-full bg-white text-sm focus:outline-none focus:border-[#4A3B32] focus:ring-1 focus:ring-[#4A3B32] transition-shadow"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
                                {/* SVG Magnifying Glass */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 border border-stone-300 rounded-full bg-white text-sm hover:bg-stone-50 hover:border-stone-400 text-stone-600 transition-colors whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" y1="2" y2="6"/><line x1="8" y1="10" y2="14"/><line x1="16" y1="18" y2="22"/></svg>
                            篩選
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                {products.length === 0 ? (
                    <div className="text-center py-20 text-stone-500">
                        <p>目前尚無商品或商品準備中...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                        {products.map((product) => (
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
