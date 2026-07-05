import Navbar from "@/components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { load } from 'outstatic/server';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProductGallery from "@/components/shop/ProductGallery";
import AddToCartSection from "@/components/shop/AddToCartSection";
import CollapsibleSection from "@/components/shop/CollapsibleSection";


type OutstaticProduct = {
    title: string
    price: string
    purchaseLink?: string
    description?: string
    content?: string
    slug: string
    coverImage?: string
    category?: string
    images?: string
    videos?: string
    productCode?: string
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
            .project(['title', 'price', 'purchaseLink', 'description', 'content', 'slug', 'coverImage', 'category', 'images', 'videos', 'productCode'])
            .first() as unknown as OutstaticProduct;
    } catch (error) {
        console.error('Error loading product details:', error);
    }

    if (!product || !product.title) {
        notFound();
    }

    // Parse images: comma-separated string from CMS, fall back to coverImage
    const productImages: string[] = product.images
        ? product.images.split(',').map(s => s.trim()).filter(Boolean)
        : product.coverImage
            ? [product.coverImage]
            : []

    // Parse videos: comma-separated string from CMS
    const productVideos: string[] = product.videos
        ? product.videos.split(',').map(s => s.trim()).filter(Boolean)
        : []

    // Load shipping notice from markdown file, fallback to default
    let shippingContent = ''
    try {
        const noticePath = path.join(process.cwd(), 'outstatic/content/notices/shipping-notice.md')
        const raw = fs.readFileSync(noticePath, 'utf8')
        // Extract content after frontmatter (between --- delimiters)
        const match = raw.match(/^---[\s\S]*?---\n([\s\S]*)$/)
        shippingContent = (match?.[1] || '').trim()
    } catch {
        // Silent fallback
    }

    if (!shippingContent) {
        shippingContent = [
            '### 送貨方式',
            '',
            '- **本地平郵** — 購物滿 HKD$500 免運費，未滿 HKD$500 運費 HKD$30',
            '- **順豐快遞** — 運費到付',
            '- **面交** — 可預約於指定地點面交',
            '',
            '### 付款方式',
            '',
            '- **FPS 轉數快**',
            '- **PayMe**',
            '- **銀行轉帳**',
            '',
            '### 注意事項',
            '',
            '- 確認付款後一般 3-5 個工作天內寄出',
            '- 如遇缺貨，會另行通知預計到貨日期',
            '- 產品圖片僅供參考，實物可能略有差異',
            '- 如有任何疑問，歡迎 WhatsApp 查詢：+852 6809 1683',
        ].join('\n')
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
                    {/* Left: Product Image Carousel */}
                    <ProductGallery images={productImages} videos={productVideos} productName={product.title} />

                    {/* Right: Product Details */}
                    <div className="flex flex-col justify-start">
                        <h1 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-4">{product.title}</h1>
                        <p className="text-2xl text-[#8B7355] font-medium mb-2">
                            {product.price}
                        </p>
                        {product.productCode && (
                            <p className="text-sm text-stone-400 mb-4">
                                貨號：{product.productCode}
                            </p>
                        )}

                        <div className="mb-8 pb-8 border-b border-stone-200">
                            <AddToCartSection
                                slug={product.slug}
                                title={product.title}
                                productCode={product.productCode}
                                price={product.price}
                                coverImage={product.coverImage}
                            />
                        </div>

                        <div className="mb-10">
                            <CollapsibleSection title="產品描述" defaultOpen={false}>
                                {product.content || product.description ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {product.content || product.description}
                                    </ReactMarkdown>
                                ) : (
                                    <p>（產品描述準備中）</p>
                                )}
                            </CollapsibleSection>
                            <CollapsibleSection title="送貨及須知" defaultOpen={false}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {shippingContent}
                                </ReactMarkdown>
                            </CollapsibleSection>
                        </div>

                        <div className="mt-auto">
                            <div>
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
        </div>
    );
}
