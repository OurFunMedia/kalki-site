import Image from "next/image";
import Link from "next/link";
import type { SchoolActivity } from "./activities";

export default function ActivityGallery({ activities }: { activities: SchoolActivity[] }) {
    return (
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 md:gap-x-8 md:gap-y-16">
            {activities.map((activity) => (
                <Link
                    key={activity.slug}
                    href={`/ngo/school/activity/${activity.slug}`}
                    aria-label={`查看「${activity.title}」詳細介紹`}
                    className="group block cursor-pointer text-left"
                >
                    <div className="aspect-square w-full relative overflow-hidden bg-stone-200 rounded-2xl mb-1.5 md:mb-6">
                        <Image
                            src={activity.image}
                            alt={activity.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                    <div className="md:hidden px-0.5 text-center">
                        <h3 className="text-xs leading-snug text-stone-600">{activity.title}</h3>
                        <span className="mt-1 inline-block text-[11px] font-medium text-primary">詳細內容 ›</span>
                    </div>
                    <div className="hidden md:block px-2">
                        <h3 className="text-3xl font-serif mb-3 text-stone-700 tracking-wide font-light">{activity.title}</h3>
                        <p className="text-stone-500 text-sm md:text-[15px] leading-relaxed">{activity.shortDescription}</p>
                        <span className="mt-4 inline-flex items-center rounded-full bg-sand px-4 py-1.5 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-cream">
                            詳細內容
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
