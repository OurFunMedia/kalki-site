import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function SchoolPage() {
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
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary text-center">企業及團體</h1>
                    <p className="text-stone-500 text-center max-w-2xl mx-auto text-lg">專為不同企業設計，旨在通過身心靈練習幫助員工提升工作效率，建立正向工作團隊，提升整體工作氛圍。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop" alt="團體瑜伽恆常班" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">團體瑜伽</h2>
                            <p className="text-stone-600 line-clamp-4">強調信任和協作，建立更強的默契及信任感，促進團隊合作精神</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="團體建設活動" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">團隊建設活動</h2>
                            <p className="text-stone-600 line-clamp-4">提供一系列身心靈活動，提升團隊凝聚力，有助塑造積極企業文化</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="頌缽聲頻浴" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">頌缽聲頻浴</h2>
                            <p className="text-stone-600 line-clamp-4">包括冥想和聲音療法，能釋放壓力、緩解焦慮，提升專注力及工作效率</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="創意工作坊" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">創意工作坊</h2>
                            <p className="text-stone-600 line-clamp-4">結合不同的手工及藝術工作坊，強調放鬆和覺察，釋放情感，促進內在自我連結達成身心靈和諧</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop" alt="網上正念練習" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">網上正念練習</h2>
                            <p className="text-stone-600 line-clamp-4">從網上途徑，公司員工能在早上及午飯時間正念呼吸，伸展及冥想練習。有效增加頭腦清晰，建立正向工作團隊</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" alt="瑜伽治療及正念靜觀" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">瑜伽治療及正念靜觀</h2>
                            <p className="text-stone-600 line-clamp-4">透過呼吸練習、筋膜放鬆，伸展和靜觀，提升團隊的認知能力，增強幸福感與信任感，促進更良好的合作氛圍</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
