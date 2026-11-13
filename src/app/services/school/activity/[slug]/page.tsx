import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allSchoolActivities, getSchoolActivity } from "../../activities";
import MechanismSection from "./MechanismSection";

const tagImageMap: Record<string, string> = {
    當下覺察力: "/images/tag/tag_a.png",
    身心自我調節: "/images/tag/tag_b.png",
    情緒辨識與接納: "/images/tag/tag_c.png",
    人際連結與同理心: "/images/tag/tag_d.png",
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return allSchoolActivities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const activity = getSchoolActivity(slug);
    if (!activity) return { title: "找不到活動" };
    return {
        title: `${activity.title}｜中小學及幼兒`,
        description: activity.shortDescription,
    };
}

export default async function SchoolActivityPage({ params }: PageProps) {
    const { slug } = await params;
    const activity = getSchoolActivity(slug);
    if (!activity) notFound();

    return (
        <div className="min-h-screen pt-36 pb-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/services/school"
                    className="group flex w-fit items-center gap-2 text-stone-500 hover:text-primary transition-all mb-10"
                >
                    <svg
                        className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="font-medium text-[15px]">返回中小學及幼兒</span>
                </Link>

                <h1 className="text-3xl md:text-4xl font-serif text-primary text-center mb-10">{activity.title}</h1>

                {/* 主區域：左圖、右（上標籤圖示 + 下說明文字） */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch mb-12">
                    <div className="md:col-span-5">
                        <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-stone-200">
                            <Image src={activity.image} alt={activity.title} fill className="object-cover" />
                        </div>
                    </div>

                    <div className="md:col-span-7 flex flex-col justify-between">
                        <ul className="flex flex-wrap justify-center items-center gap-4 my-auto py-6">
                            {activity.tags.map((tag) => {
                                const src = tagImageMap[tag];
                                return src ? (
                                    <li key={tag}>
                                        <Image src={src} alt={tag} width={480} height={120} className="h-28 w-auto md:h-32 object-contain" />
                                    </li>
                                ) : (
                                    <li key={tag} className="rounded-full bg-sand px-4 py-1.5 text-xs md:text-sm text-charcoal">
                                        {tag}
                                    </li>
                                );
                            })}
                        </ul>

                        <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">{activity.fullDescription}</p>
                    </div>
                </div>

                {/* 對學校的價值 */}
                <div className="border-t border-stone-200 pt-10 pb-12">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">對學校的價值</h2>
                        <ul className="space-y-4">
                            {activity.schoolValues.map((value) => (
                                <li key={value} className="flex items-start gap-3">
                                    <svg
                                        className="mt-1 h-4 w-4 flex-shrink-0 text-accent"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-stone-600 text-sm md:text-[15px] leading-relaxed">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 核心心理機制與底部按鈕 */}
                <div className="border-t border-stone-200 pt-10 pb-16">
                    <div className="max-w-3xl mx-auto">
                        <MechanismSection currentSlug={slug} />
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://forms.gle/qTmiN1kZ2cCuycyX8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors shadow-lg hover:-translate-y-0.5 transform inline-block text-center"
                            >
                                服務內容
                            </a>
                            <a
                                href="https://forms.gle/JxyCUSom7s78diJd7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors shadow-lg hover:-translate-y-0.5 transform inline-block text-center"
                            >
                                索取報價
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
