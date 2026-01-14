import Link from 'next/link'
import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";

type Instructor = {
    slug: string
    title: string
    specialties: string
    content: string
}

async function getInstructors() {
    const db = await load()
    const instructors = await db
        .find({ collection: 'instructors', status: 'published' })
        .project(['title', 'specialties', 'content', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return instructors
}

export default async function InstructorsPage() {
    const instructorsData = await getInstructors() as unknown as Instructor[]
    const fallbackInstructors: Instructor[] = [
        {
            slug: 'sarah-chen',
            title: 'Sarah Chen',
            specialties: 'Hatha / Yin / Mindfulness',
            content: 'Sarah 擁有超過十年的瑜伽練習經驗。她相信瑜伽是一把鑰匙，能開啟通往內在平靜的大門。她的教學風格溫柔而堅定，強調呼吸與覺察，帶領學生在每一次的練習中，重新連結身心。'
        },
        {
            slug: 'david-wu',
            title: 'David Wu',
            specialties: 'Ashtanga / Power Yoga',
            content: 'David 曾至印度 Mysore 進修，專注於 Ashtanga 練習。他的課程充滿能量，重視體式的精準度與呼吸的配合，引導學生突破自我的極限。'
        }
    ]

    const instructors = instructorsData.length > 0 ? instructorsData : fallbackInstructors

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />

            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-16 text-center text-primary">師資團隊 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Teachers</span></h1>

                <div className="space-y-12">
                    {instructors.length === 0 && <p className="text-center w-full text-stone-500">暫無導師資料</p>}
                    {instructors.map((instructor) => (
                        <div key={instructor.slug} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start group">
                            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 bg-stone-200 rounded-full overflow-hidden relative shadow-lg">
                                <div className="absolute inset-0 bg-stone-300"></div>
                            </div>
                            <div className="text-center md:text-left space-y-4">
                                <h3 className="text-3xl font-serif text-charcoal">{instructor.title}</h3>
                                <p className="text-primary font-medium tracking-wide uppercase text-sm">{instructor.specialties}</p>
                                <div className="text-stone-600 leading-loose max-w-xl" dangerouslySetInnerHTML={{ __html: instructor.content }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
