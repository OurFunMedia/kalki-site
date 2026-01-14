import Navbar from "@/components/Navbar";

export default function NgoPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">NGO 及 到校課堂 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Services</span></h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <h2 className="text-2xl font-serif mb-4 text-charcoal">校園正念活動</h2>
                        <ul className="space-y-2 text-stone-600 list-disc pl-5">
                            <li>Mindfulness Activity</li>
                            <li>Mindfulness Course</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <h2 className="text-2xl font-serif mb-4 text-charcoal">療癒課程</h2>
                        <ul className="space-y-2 text-stone-600 list-disc pl-5">
                            <li>Yoga</li>
                            <li>Art Healing (藝術療癒)</li>
                            <li>Sound Healing (頌缽音療)</li>
                            <li>Meditation (冥想)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
