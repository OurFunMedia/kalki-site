import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";
import Link from 'next/link';

type Product = {
    title: string
    price: string
    purchaseLink: string
    description: string
    slug: string
    coverImage?: string
}

async function getProducts() {
    const db = await load()
    const products = await db
        .find({ collection: 'products', status: 'published' })
        .project(['title', 'price', 'purchaseLink', 'description', 'coverImage', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return products
}

export default async function ShopPage() {
    const products = await getProducts() as unknown as Product[]

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">商店 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Shop</span></h1>

                {products.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-stone-500 text-lg">精選瑜伽選品準備中...</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <div key={product.slug} className="group cursor-pointer">
                                <div className="aspect-square bg-stone-200 rounded-xl mb-4 overflow-hidden relative">
                                    {product.coverImage ? (
                                        <img src={product.coverImage} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-stone-300 bg-stone-100">Product Image</div>
                                    )}
                                </div>
                                <h3 className="text-xl font-serif mb-1 text-charcoal">{product.title}</h3>
                                <p className="text-primary font-bold mb-2">{product.price}</p>
                                <p className="text-xs text-stone-500 mb-4 line-clamp-2">{product.description}</p>

                                {product.purchaseLink ? (
                                    <Link
                                        href={product.purchaseLink}
                                        target="_blank"
                                        className="block w-full py-2 border border-charcoal text-charcoal text-center text-xs tracking-widest hover:bg-charcoal hover:text-white transition-colors uppercase"
                                    >
                                        購買連結
                                    </Link>
                                ) : (
                                    <button disabled className="block w-full py-2 border border-stone-200 text-stone-300 text-center text-xs tracking-widest cursor-not-allowed uppercase">
                                        尚無連結
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
