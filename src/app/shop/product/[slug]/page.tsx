import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { load } from 'outstatic/server';


type OutstaticProduct = {
    title: string
    price: string
    purchaseLink?: string
    description?: string
    content?: string
    slug: string
    coverImage?: string
    category?: string
}

export async function generateStaticParams() {
    const db = await load();
    const products = await db.find({ collection: 'products', status: 'published' }).project(['slug']).toArray();
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    let product: OutstaticProduct | null = null;
    
    try {
        const db = await load()
        product = await db
            .find({ collection: 'products', slug: resolvedParams.slug })
            .project(['title', 'price', 'purchaseLink', 'description', 'content', 'slug', 'coverImage', 'category'])
            .first() as unknown as OutstaticProduct;
    } catch (error) {
        console.error('Error loading product details:', error);
    }

    if (!product || !product.title) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal flex flex-col">
            <Navbar />
            
            <div className="max-w-6xl mx-auto py-12 w-full flex-grow">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center text-stone-500 mb-10 text-sm tracking-widest gap-y-2">
                    <Link href="/shop" className="hover:text-primary transition-colors">商店</Link>
                    <span className="mx-3">&gt;</span>
                    <Link href="/shop/energy-products" className="hover:text-primary transition-colors">
                        {product.category || '產品列表'}
                    </Link>
                    <span className="mx-3">&gt;</span>
                    <span className="text-primary font-medium">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Left: Product Image */}
                    <div className="w-full bg-white border border-[#4A3B32] p-4 flex items-center justify-center aspect-square md:aspect-[4/5] overflow-hidden group shadow-sm">
                        <div className="w-full h-full bg-stone-50 flex items-center justify-center text-stone-400 border border-stone-100 overflow-hidden relative">
                            {product.coverImage ? (
                                <img 
                                    src={product.coverImage} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                />
                            ) : (
                                <span className="text-lg tracking-widest">Product Image</span>
                            )}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col justify-start">
                        <h1 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-4">{product.title}</h1>
                        <p className="text-2xl text-[#8B7355] font-medium mb-8 pb-8 border-b border-stone-200">
                            {product.price}
                        </p>
                        
                        <div className="mb-10 text-stone-600 leading-relaxed tracking-wide whitespace-pre-line space-y-4">
                            {product.content || product.description ? (
                                <p>{product.content || product.description}</p>
                            ) : (
                                <p>（產品描述準備中）</p>
                            )}
                        </div>

                        <div className="mt-auto space-y-4">
                            {/* Action Buttons */}
                            <button className="w-full bg-[#4A3B32] text-white py-4 md:py-3.5 tracking-widest hover:bg-[#3A2B22] transition-colors border border-[#4A3B32] font-medium">
                                聯絡我們購買
                            </button>
                            <Link 
                                href="/shop/energy-products" 
                                className="w-full flex justify-center py-4 md:py-3.5 text-[#4A3B32] border border-[#4A3B32] tracking-widest hover:bg-[#4A3B32] hover:text-white transition-colors"
                            >
                                繼續瀏覽商店
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
