import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function SeniorsPage() {
    return (
        <div className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <Link href="/ngo" className="group flex w-fit items-center gap-2 text-stone-500 hover:text-primary transition-all mb-8">
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-medium text-[15px]">返回外展及到校服務</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary text-center">樂齡課程內容</h1>
                    <p className="text-stone-500 text-center max-w-2xl mx-auto text-lg">專門針對樂齡學員的特定需求和能力而設計課程，從而增進身體健康，提升其生活質量，促進社交互動，達到全面的身心健康。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">頌缽聲頻療法</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">頌缽聲頻療法</h2>
                            <p className="text-stone-600 line-clamp-4">幫助放鬆心靈，減少壓力，並促進睡眠。感知自己的身體，提升身體意識</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">肌筋膜按摩</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">肌筋膜按摩</h2>
                            <p className="text-stone-600 line-clamp-4">緩解肌肉和筋膜的緊張和疼痛，改善血液循環，減輕疼痛，提高整體身體舒適度</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">力量與平衡瑜伽</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">力量與平衡瑜伽</h2>
                            <p className="text-stone-600 line-clamp-4">增強身體的平衡感和穩定性，幫助強化核心肌肉，有效降低摔倒風險</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">痛症陰瑜伽</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">痛症陰瑜伽</h2>
                            <p className="text-stone-600 line-clamp-4">靜態的伸展和長時間的保持，有助深層組織的放鬆和柔韌性的提升</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">椅子瑜伽</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">椅子瑜伽</h2>
                            <p className="text-stone-600 line-clamp-4">專為行動不便的學員練習方式，以椅子提供支撐，減少關節壓力亦保持有效伸展</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-3xl font-serif px-4 text-center">社交與互動瑜伽</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">社交與互動瑜伽</h2>
                            <p className="text-stone-600 line-clamp-4">透過小組互動遊戲提升情緒穩定度，增強社交聯繫，減少焦慮與抑鬱感</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center py-16 border-t border-stone-200/60">
                    <p className="text-stone-600 text-lg mb-8 font-serif">想了解更多細節或預約服務？</p>
                    <Link 
                        href="https://wa.me/85268091683?text=%E6%88%91%E6%83%B3%E7%B4%A2%E5%8F%96%E5%A0%B1%E5%83%B9" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform tracking-wider"
                    >
                        索取報價
                    </Link>
                </div>
            </div>
        </div>
    );
}
