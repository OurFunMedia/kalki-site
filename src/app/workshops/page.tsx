import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";
import Link from 'next/link';

type Workshop = {
    title: string
    date: string
    location: string
    price: string
    registrationLink: string
    description: string
    slug: string
}

async function getWorkshops() {
    const db = await load()
    const workshops = await db
        .find({ collection: 'workshops', status: 'published' })
        .project(['title', 'date', 'location', 'price', 'registrationLink', 'description', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return workshops
}

export default async function WorkshopsPage() {
    const workshops = await getWorkshops() as unknown as Workshop[]

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">工作坊與培訓 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Workshop & Training</span></h1>

                <div className="space-y-8">
                    {workshops.length === 0 && (
                        <div className="text-center py-12 bg-white/50 rounded-xl border border-stone-100">
                            <p className="text-stone-500 text-lg">目前沒有即將舉辦的工作坊</p>
                            <p className="text-stone-400 text-sm mt-2">請密切關注我們的最新消息</p>
                        </div>
                    )}

                    {workshops.map(workshop => (
                        <div key={workshop.slug} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col md:flex-row gap-6 justify-between items-start">
                            <div className="space-y-4 max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider rounded-full uppercase">Workshop</span>
                                <h3 className="text-2xl font-serif text-charcoal">{workshop.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-stone-500 font-medium font-sans">
                                    <span className="flex items-center gap-1">📅 {workshop.date}</span>
                                    <span className="flex items-center gap-1">📍 {workshop.location}</span>
                                    <span className="flex items-center gap-1">💲 {workshop.price}</span>
                                </div>
                                <p className="text-stone-600 leading-relaxed">{workshop.description}</p>
                            </div>

                            {workshop.registrationLink && (
                                <Link
                                    href={workshop.registrationLink}
                                    target="_blank"
                                    className="px-6 py-3 bg-primary text-white text-sm font-bold tracking-widest hover:bg-opacity-90 transition-all rounded w-full md:w-auto text-center"
                                >
                                    立即報名
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
