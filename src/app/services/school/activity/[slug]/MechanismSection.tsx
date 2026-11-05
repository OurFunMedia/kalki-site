'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allSchoolActivities } from "../../activities";

/** 四個正念核心心理機制，順序依照設計稿 */
const MECHANISMS = [
    { tag: "當下覺察力", image: "/images/tag/tag_a.png" },
    { tag: "情緒辨識與接納", image: "/images/tag/tag_c.png" },
    { tag: "身心自我調節", image: "/images/tag/tag_b.png" },
    { tag: "人際連結與同理心", image: "/images/tag/tag_d.png" },
];

export default function MechanismSection({ currentSlug }: { currentSlug: string }) {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    // 彈出視窗開啟時：鎖定背景捲動 + ESC 關閉
    useEffect(() => {
        if (!activeTag) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveTag(null);
        };
        window.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [activeTag]);

    const related = activeTag
        ? allSchoolActivities.filter((a) => a.tags.includes(activeTag))
        : [];

    const active = MECHANISMS.find((m) => m.tag === activeTag);

    return (
        <div className="mb-12 text-center">
            <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                每項活動背後，都建基於正念練習的核心心理機制。
                <br />
                點選以下關鍵詞，即可查看其他同樣著重此效益的活動，助您更快找到最合適校本需要的組合。
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 justify-items-center mt-8 mb-8">
                {MECHANISMS.map((m) => (
                    <button
                        key={m.tag}
                        type="button"
                        onClick={() => setActiveTag(m.tag)}
                        aria-haspopup="dialog"
                        aria-label={`查看與「${m.tag}」相關的活動`}
                        className="group focus:outline-none cursor-pointer"
                    >
                        <Image
                            src={m.image}
                            alt={m.tag}
                            width={180}
                            height={180}
                            className="h-28 w-28 md:h-32 md:w-32 object-contain rounded-full transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
                        />
                    </button>
                ))}
            </div>

            <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                有興趣為貴校/機構規劃身心健康活動？
                <br />
                歡迎透過以下途徑與我們聯絡，我們會因應貴校校情，提供合適的活動建議及報價。
            </p>

            {activeTag && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`「${activeTag}」相關活動`}
                >
                    {/* 背景遮罩，點擊關閉 */}
                    <button
                        type="button"
                        aria-label="關閉彈出視窗"
                        onClick={() => setActiveTag(null)}
                        className="absolute inset-0 w-full h-full bg-black/50 cursor-default"
                    />

                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-8 text-left">
                        <button
                            type="button"
                            onClick={() => setActiveTag(null)}
                            aria-label="關閉"
                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <Image
                                src={active!.image}
                                alt={activeTag}
                                width={180}
                                height={180}
                                className="h-24 w-24 object-contain rounded-full"
                            />
                            <h3 className="text-xl md:text-2xl font-serif text-charcoal mt-3">{activeTag} 相關活動</h3>
                            <p className="text-stone-500 text-sm mt-1">共 {related.length} 項活動，點擊查看詳細介紹</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            {related.map((a) => (
                                <Link
                                    key={a.slug}
                                    href={`/services/school/activity/${a.slug}`}
                                    onClick={() => setActiveTag(null)}
                                    className="group flex gap-4 rounded-2xl border border-stone-100 bg-white p-3 hover:shadow-md transition-all"
                                >
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-stone-100">
                                        <Image
                                            src={a.image}
                                            alt={a.title}
                                            fill
                                            sizes="80px"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h4 className="font-serif text-charcoal group-hover:text-primary transition-colors">{a.title}</h4>
                                            {a.slug === currentSlug && (
                                                <span className="text-[11px] bg-sand text-charcoal rounded-full px-2 py-0.5">本活動</span>
                                            )}
                                        </div>
                                        <p className="text-stone-500 text-xs md:text-[13px] leading-relaxed mt-1 line-clamp-3">{a.shortDescription}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
