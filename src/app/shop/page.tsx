import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";
import Link from 'next/link';

type ShopBanner = {
    slug: string
    title: string
    subtitle: string
    description: string
    note?: string
    buttonText: string
    buttonLink: string
    coverImage?: string
}

async function getBanner() {
    try {
        const db = await load()
        const banners = await db
            .find({ collection: 'shop_banners', status: 'published' })
            .project(['title', 'subtitle', 'description', 'note', 'buttonText', 'buttonLink', 'coverImage', 'slug'])
            .sort({ publishedAt: -1 })
            .toArray()
        return banners as unknown as ShopBanner[]
    } catch {
        return []
    }
}

const fallbackBanners: ShopBanner[] = [
    {
        slug: 'energy-products',
        title: '空間及個人\n能量用品',
        subtitle: 'Energy Cleansing & Tools',
        description: '來自各地聖木，鼠尾草，天然香薰，水晶',
        note: '所有產品以生態倫理方式獲得',
        buttonText: '購買',
        buttonLink: '/shop/energy-products',
        coverImage: '/images/shop/shop_01.jpg',
    },
]

export default async function ShopPage() {
    const banners = await getBanner()
    const activeBanners = banners.length > 0 ? banners : fallbackBanners

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />

            {/* CMS-managed product advertisement hero */}
            <div className="max-w-6xl mx-auto mt-8 mb-16 space-y-8">
                {activeBanners.map((banner) => (
                    <div key={banner.slug} className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-sand border border-secondary/20 overflow-hidden">
                        {/* Image — upload via Outstatic CMS (coverImage field) */}
                        {banner.coverImage ? (
                            <img
                                src={banner.coverImage}
                                alt={banner.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-secondary/30 select-none">
                                <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                        )}

                        {/* Overlay blank box */}
                        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 flex items-center">
                            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 lg:p-12 mr-0 md:mr-8 lg:mr-12 w-full shadow-lg">
                                <p className="text-xs tracking-[0.25em] uppercase text-secondary mb-2 font-sans">
                                    {banner.subtitle}
                                </p>
                                <h1 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight mb-4 whitespace-pre-line">
                                    {banner.title}
                                </h1>
                                <p className="text-sm md:text-base text-charcoal/70 font-light leading-relaxed mb-1">
                                    {banner.description}
                                </p>
                                {banner.note && (
                                    <p className="text-xs text-charcoal/50 font-light italic mb-6">
                                        {banner.note}
                                    </p>
                                )}
                                <Link
                                    href={banner.buttonLink}
                                    className="inline-block mt-4 px-8 py-3 bg-primary text-white tracking-widest hover:bg-primary/80 transition-colors rounded-sm text-sm uppercase"
                                >
                                    {banner.buttonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Original three category cards — unchanged */}
            <div className="max-w-6xl mx-auto pb-20">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 md:px-0">
                    {/* Card 1 */}
                    <div className="relative overflow-hidden border-2 border-primary bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        {/* Background image */}
                        <img
                            src="/images/shop/shop_02.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                        />
                        {/* Readability overlay */}
                        <div className="absolute inset-0 bg-white/40" />
                        <h2 className="relative z-10 text-3xl md:text-4xl font-serif mb-12 leading-snug tracking-wider text-[#1a1a1a]">空間及個人<br />能量用品</h2>
                        <div className="relative z-10 text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light mb-8">
                            <p>來自各地聖木，鼠尾草，天然香薰，水晶</p>
                            <p>(所有產品以生態倫理方式獲得)</p>
                        </div>
                        <Link href="/shop/energy-products" className="relative z-10 mt-auto px-8 py-3 bg-[#4A3B32] text-white tracking-widest hover:bg-[#3a2e27] transition-colors rounded-sm text-sm uppercase">
                            查看商品
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="relative overflow-hidden border-2 border-primary bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        {/* Background image */}
                        <img
                            src="/images/shop/shop_03.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                        />
                        {/* Readability overlay */}
                        <div className="absolute inset-0 bg-white/40" />
                        <h2 className="relative z-10 text-3xl md:text-4xl font-serif mb-12 tracking-wider text-[#1a1a1a]">天然能量食物</h2>
                        <div className="relative z-10 text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light">
                            <p>來自各地超級食物及養生食品</p>
                            <p>(所有產品天然有機)</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative overflow-hidden border-2 border-primary bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        {/* Background image */}
                        <img
                            src="/images/shop/shop_04.jpg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                        />
                        {/* Readability overlay */}
                        <div className="absolute inset-0 bg-white/40" />
                        <h2 className="relative z-10 text-3xl md:text-4xl font-serif mb-12 tracking-wider text-[#1a1a1a]">原住民族<br></br>手造品</h2>
                        <div className="relative z-10 text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light">
                            <p>獨一無二的人手製造產品</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
