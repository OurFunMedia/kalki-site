import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const activities = [
    { title: "瑜伽體式", description: "兒童能夠感知身體的變化，提升協調性與靈活性，為身體覺知打下基礎。", image: "/images/school/kids_yoga_poses.png" },
    { title: "繪本故事串連", description: "引導兒童理解動作與情緒的關聯，增強專注力與想像力，讓學習更有趣味。", image: "/images/school/teacher_reading_story.png" },
    { title: "靜觀呼吸遊戲", description: "專注於呼吸技巧，幫助兒童認識身體感受，學會情緒管理，促進內心平靜。", image: "/images/school/mindful_breathing_game.png" },
    { title: "情緒覺察/管理遊戲", description: "透過情緒卡、角色扮演等互動遊戲，幫助認識及表達情緒，學習情緒管理技巧。", image: "/images/school/emotion_cards_game.png" },
    { title: "正念藝術創作", description: "自由表達當下情緒，觀察內心感受，幫助兒童建立個人價值和形象。", image: "/images/school/mindful_art_creation.png" },
    { title: "頌缽/銅鑼聲音療癒", description: "感受聲音共振，培養專注力及平靜心靈，改善情緒健康，幫助兒童深層放鬆身心。", image: "/images/school/singing_bowl_healing.png" },
    { title: "正念靜觀", description: "透過專注當下，提高個人自我理解和自我價值認知，幫助兒童與社會價值連結。", image: "/images/school/mindful_meditation_kids.png" },
    { title: "親子瑜伽", description: "促進家庭成員之間的情感連結，透過練習增強信任與溝通能力，增進同理心。", image: "/images/school/family_yoga_partner.png" },
    { title: "義工服務", description: "與慈善團體/社區中心合作，鼓勵兒童分享專長和技能，提升個人價值，增強社會責任感。", image: "/images/school/children_volunteer_elderly.png" }
];

const teenActivities = [
    { title: "瑜伽體式", description: "青少年能深入感知身體的狀態，改善因長期學習或使用電子產品而引致的姿勢問題，提升柔韌度與平衡感。", image: "/images/school/youth_yoga_poses.png" },
    { title: "聞香放鬆伸展", description: "在練習伸展與瑜伽體式時，結合天然精油的香氣，引導感官深度放鬆，快速進入身心舒緩的狀態。", image: "/images/school/youth_aroma_stretching.png" },
    { title: "靜觀呼吸技巧分享", description: "幫助青少年在感到焦慮或分心時，穩定心神，清晰地覺察身體訊號，從而掌握情緒調節的主導權。", image: "/images/school/youth_breathing_workshop.png" },
    { title: "情緒覺察/表達互動", description: "透過情境討論、小組分享等互動方式，幫助青少年深入理解自身和他人的情緒，並學習有效的溝通與應對策略。", image: "/images/school/youth_emotion_sharing.png" },
    { title: "正念藝術創作", description: "在無批判的環境下自由表達內心世界，觀察思緒與感受的流動，加深自我認識。", image: "/images/school/youth_mindful_art.png" },
    { title: "頌缽/銅鑼聲音療癒", description: "舒緩緊繃的神經系統，提升專注力以應對學業，改善睡眠質素，達深層身心修復。", image: "/images/school/youth_sound_healing.png" },
    { title: "正念靜觀", description: "練習在生活中保持覺察，能更清晰理解自己的價值觀，並以更開放和同理的心態與他人互動。", image: "/images/school/youth_meditation.png" },
    { title: "雙人瑜伽", description: "在輕鬆的氛圍中建立溝通橋樑，學習互信與協作，深化同伴間的理解與支持。", image: "/images/school/youth_partner_yoga.png" },
    { title: "社區連結服務學習", description: "將課程中所學應用於服務他人，從實踐中發現個人價值，培養社會公民意識。", image: "" }
];

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

                <div className="mt-16 mb-8 text-center pt-8 border-t border-stone-200">
                    <h2 className="text-3xl font-serif text-charcoal">兒童及幼兒正念活動</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                    {activities.map((activity, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-square w-full relative overflow-hidden mb-6 bg-stone-200 rounded-2xl">
                                {activity.image ? (
                                    <Image src={activity.image} alt={activity.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                ) : (
                                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center">
                                        <span className="text-stone-500 font-medium">圖片位置 {index + 1}</span>
                                    </div>
                                )}
                            </div>
                            <div className="px-2">
                                <h3 className="text-3xl font-serif mb-3 text-stone-700 tracking-wide font-light">{activity.title}</h3>
                                <p className="text-stone-500 text-sm md:text-[15px] leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 mb-8 text-center pt-16 border-t border-stone-200">
                    <h2 className="text-3xl font-serif text-charcoal">青少年正念活動</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                    {teenActivities.map((activity, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-square w-full relative overflow-hidden mb-6 bg-stone-200 rounded-2xl">
                                {activity.image ? (
                                    <Image src={activity.image} alt={activity.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                ) : (
                                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center">
                                        <span className="text-stone-500 font-medium">圖片位置 {index + 1}</span>
                                    </div>
                                )}
                            </div>
                            <div className="px-2">
                                <h3 className="text-3xl font-serif mb-3 text-stone-700 tracking-wide font-light">{activity.title}</h3>
                                <p className="text-stone-500 text-sm md:text-[15px] leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
