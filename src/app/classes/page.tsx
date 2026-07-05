import Link from 'next/link'
import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";

type Class = {
    slug: string
    title: string
    duration: string
    intensity: string
    description: string
}

async function getClasses() {
    const db = await load()
    const classes = await db
        .find({ collection: 'classes', status: 'published' })
        .project(['title', 'description', 'intensity', 'duration', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return classes
}

export default async function ClassesPage() {
    const classesData = await getClasses() as unknown as Class[]
    const fallbackClasses: Class[] = [
        {
            slug: 'hatha-flow',
            title: 'Hatha Flow',
            duration: '60 min',
            intensity: '★★☆☆☆',
            description: '透過溫和的流動與呼吸練習，喚醒身體的能量，釋放深層的壓力。適合所有程度的練習者。'
        },
        {
            slug: 'vinyasa',
            title: 'Vinyasa',
            duration: '75 min',
            intensity: '★★★☆☆',
            description: '流暢的體式串聯，配合呼吸的節奏，從一個動作流動到下一個動作。增強肌力與柔軟度。'
        },
        {
            slug: 'yin-yoga',
            title: 'Yin Yoga',
            duration: '60 min',
            intensity: '★☆☆☆☆',
            description: '長時間的停留，深入伸展結締組織。這是一堂關於放下與臣服的練習，適合需要深層放鬆的你。'
        }
    ]

    const classes = classesData.length > 0 ? classesData : fallbackClasses

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />

            <div className="max-w-5xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">我們的課程 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Classes</span></h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.length === 0 && <p className="text-center w-full col-span-3 text-stone-500">暫無課程資料</p>}
                    {classes.map((cls) => (
                        <div key={cls.slug} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-stone-100 duration-500">
                            <div className="h-56 bg-stone-200 rounded-xl mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-stone-100 flex items-center justify-center text-stone-300">
                                    Image
                                </div>
                            </div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-2xl font-serif text-charcoal group-hover:text-primary transition-colors">{cls.title}</h3>
                                <span className="text-xs font-bold text-stone-400 border border-stone-200 px-2 py-1 rounded-full">{cls.duration}</span>
                            </div>
                            <p className="text-sm text-stone-500 mb-4">強度: {cls.intensity}</p>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                {cls.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
