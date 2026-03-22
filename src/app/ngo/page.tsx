import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";
import Link from 'next/link';

type NgoProject = {
    title: string
    description: string
    coverImage?: string
    slug: string
}

async function getNgoProjects() {
    const db = await load()
    const projects = await db
        .find({ collection: 'ngo_projects', status: 'published' })
        .project(['title', 'description', 'coverImage', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return projects
}

export default async function NgoPage() {
    const projects = await getNgoProjects() as unknown as NgoProject[]

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto py-12">
                <div className="relative w-full rounded-3xl overflow-hidden mb-16 shadow-xl group" style={{ minHeight: '500px' }}>
                    <img 
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
                        alt="一班人正在學習瑜伽" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply" />
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 drop-shadow-md">
                            外展 及 到校服務 
                            <span className="block text-base md:text-lg font-sans text-stone-200 mt-4 tracking-widest uppercase">Services</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="px-8 py-3.5 bg-white text-charcoal rounded-full font-medium hover:bg-stone-100 transition-colors shadow-lg hover:-translate-y-0.5 transform">
                                服務內容
                            </button>
                            <button className="px-8 py-3.5 bg-stone-800 text-white border border-stone-700 hover:border-stone-500 rounded-full font-medium hover:bg-stone-700 transition-colors shadow-lg hover:-translate-y-0.5 transform">
                                索取報價
                            </button>
                        </div>
                    </div>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-stone-500 text-lg">目前沒有服務項目</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {projects.map(project => (
                            <Link href={`/ngo/${project.slug}`} key={project.slug} className="block group">
                                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all h-full group-hover:-translate-y-1 overflow-hidden flex flex-col">
                                    {project.coverImage && (
                                        <div className="w-full h-48 relative overflow-hidden bg-stone-100">
                                            <img src={project.coverImage} alt={project.title} className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    )}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h2 className="text-2xl font-serif mb-4 text-charcoal group-hover:text-primary transition-colors">{project.title}</h2>
                                        {project.description && project.description === '更多內容' ? (
                                            <div className="flex items-center text-primary mt-auto pt-4 font-medium">
                                                <span>更多內容</span>
                                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        ) : project.description && (
                                            <div className="flex-1">
                                                <ul className="space-y-2 text-stone-600 list-disc pl-5">
                                                    {project.description.split('\n').filter(item => item.trim() !== '').map((item, index) => (
                                                        <li key={index}>{item.replace(/^- /, '')}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
