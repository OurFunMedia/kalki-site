import { load } from 'outstatic/server'
import Navbar from "@/components/Navbar";

type Event = {
    title: string
    category: string
    date: string
    location: string
    description: string
    slug: string
}

async function getEvents() {
    const db = await load()
    const events = await db
        .find({ collection: 'events', status: 'published' })
        .project(['title', 'category', 'date', 'location', 'description', 'slug'])
        .sort({ publishedAt: -1 })
        .toArray()
    return events
}

export default async function EventsPage() {
    const events = await getEvents() as unknown as Event[]

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">活動與回饋 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Give back to the world</span></h1>

                {events.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-stone-500 text-lg">目前沒有近期活動</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map(event => (
                            <div key={event.slug} className="bg-white p-8 rounded-xl border border-stone-100 hover:shadow-lg transition-all group flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-wider rounded-full uppercase">
                                        {event.category || 'Event'}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                <div className="text-sm text-stone-400 mb-4 font-sans space-y-1">
                                    <p>{event.date}</p>
                                    <p>{event.location}</p>
                                </div>
                                <p className="text-stone-600 leading-relaxed text-sm flex-grow">
                                    {event.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
