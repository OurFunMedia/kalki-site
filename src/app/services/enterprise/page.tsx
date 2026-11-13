import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CollapsibleSection from "@/components/shop/CollapsibleSection";

export default function SchoolPage() {
    return (
        <div className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto pb-16">
                <div className="mb-12">
                    <Link href="/services" className="group flex w-fit items-center gap-2 text-stone-500 hover:text-primary transition-all mb-8">
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
                            <img src="/images/enterprise/b001.png" alt="團體瑜伽恆常班" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src="/images/enterprise/b002.png" alt="團體建設活動" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src="/images/enterprise/b003.png" alt="頌缽聲頻浴" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src="/images/enterprise/b004.png" alt="創意工作坊" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src="/images/enterprise/b005.png" alt="網上正念練習" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                            <img src="/images/enterprise/b006.png" alt="瑜伽治療及正念靜觀" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">瑜伽治療及正念靜觀</h2>
                            <p className="text-stone-600 line-clamp-4">透過呼吸練習、筋膜放鬆，伸展和靜觀，提升團隊的認知能力，增強幸福感與信任感，促進更良好的合作氛圍</p>
                        </div>
                    </div>
                </div>

                {/* 常見問題 */}
                <div className="mt-24 mb-8 text-center pt-16 border-t border-stone-200">
                    <h2 className="text-3xl font-serif text-charcoal">常見問題</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <CollapsibleSection title="同事工作繁忙，活動會佔用多少工作時間？可以做成恆常的員工福利嗎？" defaultOpen={false}>
                        <p>
                            活動時長可以靈活安排，例如午間 Lunch & Learn、半日或全日，時段與時長可按公司的運作調整。如希望成為恆常的員工福利，我們亦可安排 4 至 8 堂的系列課程或恆常班，內容按員工人數、程度及目標調整。
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="同事沒有運動習慣，辦公室空間又有限，也能參加嗎？" defaultOpen={false}>
                        <p>
                            可以。活動以放鬆身心、體驗正念為主，動作簡單溫和，導師會示範並提供不同程度的選擇，無需任何運動經驗，同事可按自己的舒適程度參與。我們亦會事先了解場地的空間，再調整活動內容，確認安排前會列明所需物資，方便主辦方預早準備。
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="活動可以用甚麼語言進行？" defaultOpen={false}>
                        <p>
                            活動可按團隊需要，以〔粵語／英語／普通話〕進行。如團隊成員來自不同背景，請在查詢時告知，我們會安排合適的導師。
                        </p>
                    </CollapsibleSection>
                </div>
            </div>
            <Footer />
        </div>
    );
}
