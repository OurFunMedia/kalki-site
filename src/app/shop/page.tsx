import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default function ShopPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">商店 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Shop</span></h1>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mt-16 px-4 md:px-0">
                    {/* Card 1 */}
                    <div className="border-2 border-[#4A3B32] bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl md:text-4xl font-serif mb-12 leading-snug tracking-wider text-[#1a1a1a]">空間及個人<br/>能量用品</h2>
                        <div className="text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light mb-8">
                            <p>來自各地聖木，鼠尾草，天然香薰，水晶</p>
                            <p>(所有產品以生態倫理方式獲得)</p>
                        </div>
                        <Link href="/shop/energy-products" className="mt-auto px-8 py-3 bg-[#4A3B32] text-white tracking-widest hover:bg-[#3a2e27] transition-colors rounded-sm text-sm uppercase">
                            查看商品
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-[#4A3B32] bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl md:text-4xl font-serif mb-12 tracking-wider text-[#1a1a1a]">天然能量食物</h2>
                        <div className="text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light">
                            <p>來自各地超級食物及養生食品</p>
                            <p>(所有產品天然有機)</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 border-[#4A3B32] bg-white aspect-[3/4] md:aspect-[4/5] flex flex-col items-center justify-center p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl md:text-4xl font-serif mb-12 tracking-wider text-[#1a1a1a]">原住民族手造品</h2>
                        <div className="text-sm md:text-base tracking-widest text-[#4a4a4a] space-y-2 font-light">
                            <p>獨一無二的人手製造產品</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
