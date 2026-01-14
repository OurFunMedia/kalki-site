import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";

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
            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">NGO 及 到校課堂 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Services</span></h1>

                {projects.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-stone-500 text-lg">目前沒有服務項目</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-12">
                        {projects.map(project => (
                            <div key={project.slug} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                <h2 className="text-2xl font-serif mb-4 text-charcoal">{project.title}</h2>
                                {project.description && (
                                    <ul className="space-y-2 text-stone-600 list-disc pl-5">
                                        {project.description.split('\n').filter(item => item.trim() !== '').map((item, index) => (
                                            <li key={index}>{item.replace(/^- /, '')}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
