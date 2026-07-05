import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar"; // Page refresh trigger
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
    
    // For demonstration, adding the regular class item manually if dynamic content load is delayed
    const workshopsWithDemo = [...workshops]
    if (!workshopsWithDemo.find(w => (w as any).slug === 'regular-class-demo')) {
        workshopsWithDemo.push({
            title: "恆常瑜伽課堂（示範測試）",
            date: "每週一、三、五 19:00 - 20:30",
            location: "Kalki Studio",
            price: "HK$ 200 / 堂",
            registrationLink: "https://forms.google.com",
            description: "這是一個恆常瑜伽課堂的示範測試，旨在向您展示在頁面上新增項目的成效。",
            slug: "regular-class-demo",
            content: "",
            collection: "workshops",
            status: "published",
            publishedAt: new Date().toISOString()
        } as any)
    }
    
    return workshopsWithDemo
}

export default async function WorkshopsPage() {
    const workshops = await getWorkshops() as unknown as Workshop[]

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">課堂與工作坊 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Classes & Workshops</span></h1>

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
