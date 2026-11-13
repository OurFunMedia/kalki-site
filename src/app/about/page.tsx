import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CollapsibleSection from "@/components/shop/CollapsibleSection";

const secondarySchoolsLeft = [
    "聖保祿學校",
    "香港華仁書院",
    "皇仁舊生會中學",
    "羅定邦中學",
    "聖文德書院",
    "德信中學",
    "藍田聖保祿中學",
    "迦密愛禮信中學",
    "林大輝中學",
    "德貞女子中學",
    "保良局胡忠中學",
    "基督教香港信義會宏信書院",
    "新界鄉議局元朗區中學",
    "樂善堂梁銶琚書院",
    "何明華會督銀禧中學",
    "保良局何蔭棠中學",
    "東華三院辛亥年總理中學",
    "聖伯多祿中學",
    "廠商會蔡章閣中學",
    "天主教新民書院",
    "港九潮州公會中學",
    "聖公會聖三一堂中學",
    "東華三院馬振玉紀念中學",
    "德愛中學",
];

const secondarySchoolsRight = [
    "中華基督教會基新中學",
    "中華基督教會方潤華中學",
    "中華基督教會基智中學",
    "中華基督教會基元中學",
    "中華傳道會劉永生中學",
    "妙法寺劉金龍中學",
    "元朗公立中學",
    "天主教伍華中學",
    "香港布廠商會朱石麟中學",
    "中聖書院",
    "樂善堂楊葛小琳中學",
    "萬鈞伯裘書院",
    "慕光英文書院",
    "聖公會基孝中學",
    "張沛松紀念中學",
    "香海正覺蓮社佛教梁植偉中學",
    "嗇色園主辦可道中學",
    "佛教大光慈航中學",
    "香島中學",
    "香港紅卍字會大埔卍慈中學",
    "五邑司徒浩中學",
    "保良局李城璧中學",
    "九龍工業學校",
];

const universities = [
    "香港中文大學崇基書院",
    "香港中文大學逸夫書院",
    "香港理工大學",
];

const primaryAndKindergartens = [
    "大埔官立小學",
    "香港靈糧堂幼稚園",
];

const enterprises = [
    "香港麗思卡爾頓酒店",
    "九龍東帝苑酒店",
    "香港快運航空",
    "北歐國際貨運（香港）有限公司",
    "許記魚旦",
    "悠樂芳香港",
];

const govAndNgos = [
    "社會福利署保護家庭及兒童服務課",
    "香港特區政府精神健康諮詢委員會「陪我講 Shall We Talk」",
    "香港紅十字會",
    "協康會賽馬會家長資源中心",
    "深水埗地區康健中心",
    "中華文化傳播基金",
];

function SectionHeading({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <svg
                className="w-7 h-7 text-stone-400 shrink-0"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                aria-hidden="true"
            >
                <ellipse cx="16" cy="8" rx="11" ry="3.5" />
                <ellipse cx="16" cy="12" rx="11" ry="3.5" />
                <ellipse cx="16" cy="16" rx="11" ry="3.5" />
                <ellipse cx="16" cy="20" rx="11" ry="3.5" />
                <ellipse cx="16" cy="24" rx="11" ry="3.5" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">{title}</h2>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-8">
                {/* 頁面主標題 */}
                <h1 className="text-3xl md:text-5xl font-serif mb-8 text-charcoal">關於我們</h1>

                {/* 求其．放心 介紹卡片 */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 mb-16">
                    <p className="text-xs md:text-sm tracking-[0.15em] uppercase text-charcoal/80 font-sans mb-3">
                        KALKI WELLNESS PROJECT
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
                        求其．放心
                    </h2>
                    <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">
                        KALKI 源自吠陀哲學，象徵覺知的開始；「求其放心」出自《孟子》，意即把迷失的心尋回來。我們透過活動與社區同行，喚醒內在的平靜，重拾生活的智慧。
                    </p>
                </section>

                {/* 使命 */}
                <section className="mb-20">
                    <SectionHeading title="使命" />
                    <p className="text-stone-600 leading-relaxed text-[15px] md:text-base mb-12">
                        我們相信健康是一個全面的概念，涵蓋身體、心理和靈性福祉。我們專注於推動全人身心健康發展。旨在透過整合身、心、靈的平衡課程/體驗，幫助提升整體的身心靈健康，促進更高的生活質量和幸福感。
                    </p>

                    {/* 世衞定義橫幅 */}
                    <div className="relative max-w-2xl mx-auto my-12 px-4">
                        <div
                            className="absolute -top-3 left-1 w-24 h-12 bg-[#c5bdb4]"
                            aria-hidden="true"
                        />
                        <div
                            className="absolute -bottom-3 right-1 w-20 h-8 bg-[#b8afa6]"
                            aria-hidden="true"
                        />
                        <div className="relative bg-[#e6e1db] px-6 py-6 md:px-10 md:py-8 text-center">
                            <p className="text-charcoal font-medium text-sm md:text-base leading-relaxed">
                                早於1948年，世衞將健康定義為「不僅是沒有疾病或者身體不虛弱，
                                <br className="hidden sm:inline" />
                                而是指身體上、精神上和社會適應上完好狀態(Wellbeing)」。
                            </p>
                        </div>
                    </div>

                    {/* 三環交疊圖 */}
                    <div className="max-w-xl mx-auto my-10">
                        <svg
                            viewBox="0 0 600 420"
                            className="w-full h-auto"
                            role="img"
                            aria-label="提升身體健康、增強心理韌性、追求靈性平衡三環交疊圖"
                        >
                            {/* 上方圓：開口在右上角（約 1 點鐘至 3 點鐘方向） */}
                            <path
                                d="M 408.7 120.7 A 110 110 0 1 1 355.0 54.7"
                                fill="none"
                                stroke="#55493e"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                            />
                            {/* 左下圓：開口在左側（約 8 點鐘至 10 點鐘方向） */}
                            <path
                                d="M 171.7 183.7 A 110 110 0 1 1 143.3 324.4"
                                fill="none"
                                stroke="#c4bdb6"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                            />
                            {/* 右下圓：開口在右下側（約 2 點鐘至 4 點鐘方向） */}
                            <path
                                d="M 434.2 356.6 A 110 110 0 1 1 464.5 224.2"
                                fill="none"
                                stroke="#8e8276"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                            />

                            {/* 文字標籤（位於各圓開口處，完全不與圓弧重疊） */}
                            <text
                                x="372"
                                y="102"
                                textAnchor="middle"
                                className="fill-charcoal font-serif text-[23px] tracking-wider"
                            >
                                提升身體健康
                            </text>
                            <text
                                x="135"
                                y="268"
                                textAnchor="middle"
                                className="fill-charcoal font-serif text-[23px] tracking-wider"
                            >
                                增強心理韌性
                            </text>
                            <text
                                x="455"
                                y="298"
                                textAnchor="middle"
                                className="fill-charcoal font-serif text-[23px] tracking-wider"
                            >
                                追求靈性平衡
                            </text>
                        </svg>
                    </div>
                </section>

                {/* 我們的方法 */}
                <section className="mb-20">
                    <SectionHeading title="我們的方法" />
                    <p className="text-stone-600 leading-relaxed text-[15px] md:text-base mb-12">
                        在課堂中，我們會引導參加者以下三個步驟幫助個體在日常生活中實踐正念，理解及自我覺察，找回內心的平靜，最終達到更好的心理健康和生活質量。
                    </p>

                    {/* 三階段箭頭圖卡 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
                        {/* 階段 1 */}
                        <div className="flex flex-col">
                            <div className="w-28 bg-[#c8c1b8] text-charcoal text-xs md:text-sm py-1.5 text-center font-medium">
                                階段 1
                            </div>
                            <div
                                className="bg-[#dcd7d0] px-6 py-10 md:pr-10 text-center flex-1 flex flex-col justify-center"
                                style={{
                                    clipPath: "polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%)",
                                }}
                            >
                                <h3 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">覺察</h3>
                                <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                                    留意身體、情緒與思緒，
                                    <br />
                                    認識當下的自己。
                                </p>
                            </div>
                        </div>

                        {/* 階段 2 */}
                        <div className="flex flex-col">
                            <div className="w-28 bg-[#d5d0c8] text-charcoal text-xs md:text-sm py-1.5 text-center font-medium">
                                階段 2
                            </div>
                            <div
                                className="bg-[#e6e1da] px-8 py-10 md:pl-10 md:pr-10 text-center flex-1 flex flex-col justify-center"
                                style={{
                                    clipPath:
                                        "polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%, 14% 50%)",
                                }}
                            >
                                <h3 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">平衡</h3>
                                <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                                    以呼吸與動作調節節奏，
                                    <br />
                                    建立日常可用的方法。
                                </p>
                            </div>
                        </div>

                        {/* 階段 3 */}
                        <div className="flex flex-col">
                            <div className="w-28 bg-[#e6e1da] text-charcoal text-xs md:text-sm py-1.5 text-center font-medium">
                                階段 3
                            </div>
                            <div
                                className="bg-[#c2bab0] px-8 py-10 md:pl-10 md:pr-10 text-center flex-1 flex flex-col justify-center"
                                style={{
                                    clipPath:
                                        "polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%, 14% 50%)",
                                }}
                            >
                                <h3 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">連繫</h3>
                                <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                                    把覺察帶回人際與生活，
                                    <br />
                                    建立更穩固的關係。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 合作夥伴 */}
                <section className="mb-16">
                    <SectionHeading title="合作夥伴" />
                    <p className="text-stone-600 leading-relaxed text-[15px] md:text-base mb-8">
                        我們深感榮幸，能與來自教育、社福及工商界別的機構攜手合作，共同為社區的身心健康注入正向能量。我們期待與更多理念相近的夥伴同行，共建健康社區。
                    </p>
                    <p className="text-stone-600 text-sm md:text-[15px] mb-6">
                        部分合作夥伴（排名不分先後）
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 space-y-12">
                        {/* 學校及院校 */}
                        <div>
                            <div className="inline-block bg-[#e6e1da] text-charcoal rounded-full px-10 py-3 text-base md:text-lg font-serif mb-8">
                                學校及院校
                            </div>

                            {/* 大專院校 */}
                            <div className="mb-8">
                                <h3 className="font-bold text-charcoal text-base md:text-lg mb-2">大專院校</h3>
                                <ul className="space-y-1 text-stone-700 text-sm md:text-[15px] leading-relaxed">
                                    {universities.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* 中學 */}
                            <div className="mb-8">
                                <h3 className="font-bold text-charcoal text-base md:text-lg mb-2">中學</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 text-stone-700 text-sm md:text-[15px] leading-relaxed">
                                    <ul className="space-y-1">
                                        {secondarySchoolsLeft.map((school) => (
                                            <li key={school}>{school}</li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-1">
                                        {secondarySchoolsRight.map((school) => (
                                            <li key={school}>{school}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 小學及幼稚園 */}
                            <div>
                                <h3 className="font-bold text-charcoal text-base md:text-lg mb-2">小學及幼稚園</h3>
                                <ul className="space-y-1 text-stone-700 text-sm md:text-[15px] leading-relaxed">
                                    {primaryAndKindergartens.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 企業 */}
                        <div>
                            <div className="inline-block bg-[#e6e1da] text-charcoal rounded-full px-14 py-3 text-base md:text-lg font-serif mb-6">
                                企業
                            </div>
                            <ul className="space-y-1 text-stone-700 text-sm md:text-[15px] leading-relaxed">
                                {enterprises.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* 政府及社福 */}
                        <div>
                            <div className="inline-block bg-[#e6e1da] text-charcoal rounded-full px-10 py-3 text-base md:text-lg font-serif mb-6">
                                政府及社福
                            </div>
                            <ul className="space-y-1 text-stone-700 text-sm md:text-[15px] leading-relaxed">
                                {govAndNgos.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 與我們一起規劃 CTA 卡片 */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 mb-20">
                    <p className="text-stone-600 text-sm md:text-[15px] mb-3">
                        歡迎學校、企業及機構索取校本活動小冊子，或直接查詢報價。
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-charcoal mb-6">
                        與我們一起規劃
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://forms.gle/qTmiN1kZ2cCuycyX8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 bg-[#e6e1da] text-charcoal rounded-full text-sm md:text-base font-medium hover:bg-[#d8d1c7] transition-colors text-center"
                        >
                            索取校本活動小冊子
                        </a>
                        <a
                            href="https://forms.gle/JxyCUSom7s78diJd7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-3.5 bg-[#e6e1da] text-charcoal rounded-full text-sm md:text-base font-medium hover:bg-[#d8d1c7] transition-colors text-center"
                        >
                            查詢報價
                        </a>
                    </div>
                </section>

                {/* 常見問題 */}
                <div className="mt-16 mb-8 text-center pt-16 border-t border-stone-200">
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
                            我們的導師持有相關專業認證，並會按活動對象和內容配對合適的導師。詳情可參閱<Link href="/ourteam" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">導師團隊</Link>。
                        </p>
                    </CollapsibleSection>
                </div>
            </div>
            <Footer />
        </div>
    );
}
