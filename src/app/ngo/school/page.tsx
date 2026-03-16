import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function HealingPage() {
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
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary text-center">中小學及幼兒</h1>
                    <p className="text-stone-500 text-center max-w-2xl mx-auto text-lg">多元化的正念與瑜伽課程，為不同年齡層的學童量身打造，幫助他們在學業壓力中找到平靜，培養身心靈的健康發展。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* 幼兒 Card */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            {/* Placeholder for image, can be replaced later */}
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-4xl font-serif">幼兒</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">幼兒正念瑜伽</h2>
                            <p className="text-stone-600 mb-6 line-clamp-3">透過遊戲、故事與簡單的瑜伽動作，引導幼兒認識自己的身體與情緒。課程著重於培養專注力、肢體協調，並在歡樂的氛圍中種下平靜的種子。</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">遊戲化瑜伽教學</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">基礎情緒認知</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">靜心小練習</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 小學 Card */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-4xl font-serif">小學</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">兒童正念減壓</h2>
                            <p className="text-stone-600 mb-6 line-clamp-3">專為小學生設計，結合正念呼吸與適度伸展。學習如何在課業壓力與同儕關係中自我調適，提升情緒管理能力與學習專注度。</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">專注力訓練</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">情緒調節技巧</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">團隊合作與同理心</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 中學 Card */}
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="h-48 bg-stone-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                                <span className="text-primary text-4xl font-serif">中學</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-serif mb-4 text-charcoal">青少年身心探索</h2>
                            <p className="text-stone-600 mb-6 line-clamp-3">面對青春期的生理變化與升學壓力，引導青少年透過深度放鬆、頌缽音療與冥想，建立健康的自我概念，找回內在的平靜與力量。</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">深度放鬆與減壓</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">自我探索與覺察</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-stone-600 text-sm">頌缽體驗與音療</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
