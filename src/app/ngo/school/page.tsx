import Navbar from "@/components/Navbar";
import Link from "next/link";
import ActivityGallery from "./ActivityGallery";
import { kidsActivities, teenActivities } from "./activities";

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
                <ActivityGallery activities={kidsActivities} />

                <div className="mt-24 mb-8 text-center pt-16 border-t border-stone-200">
                    <h2 className="text-3xl font-serif text-charcoal">青少年正念活動</h2>
                </div>
                <ActivityGallery activities={teenActivities} />
            </div>
        </div>
    );
}
