import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollapsibleSection from "@/components/shop/CollapsibleSection";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">品牌故事 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Story & Passion</span></h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                    Kalki Wellness 的起源與信念... (內容建置中)
                </p>

                {/* 常見問題 */}
                <div className="mt-24 mb-8 text-center pt-16 border-t border-stone-200">
                    <h2 className="text-3xl font-serif text-charcoal">常見問題</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <CollapsibleSection title="沒有瑜伽或正念經驗可以參加嗎？" defaultOpen={false}>
                        <p>
                            可以。活動動作簡單溫和，導師會示範並逐步引導，參加者可按自己的身體狀況調整幅度，無需任何經驗。
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="除瑜伽外，還有哪些活動類型？" defaultOpen={false}>
                        <p>
                            我們的活動包括正念靜觀、瑜伽、頌缽聲音體驗，以及正念藝術與生活體驗靜修營等，並可按對象和目標組合設計。
                        </p>
                    </CollapsibleSection>
                    <CollapsibleSection title="導師有甚麼資歷？" defaultOpen={false}>
                        <p>
                            我們的導師持有相關專業認證，並會按活動對象和內容配對合適的導師。詳情可參閱導師團隊。
                        </p>
                    </CollapsibleSection>
                </div>
            </div>
            <Footer />
        </div>
    )
}
