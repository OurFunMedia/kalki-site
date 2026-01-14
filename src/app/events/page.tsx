import Navbar from "@/components/Navbar";

export default function EventsPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-5xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-primary">活動與回饋 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Give back to the world</span></h1>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-stone-100 text-center">
                        <h3 className="text-2xl font-serif mb-2">Retreat</h3>
                        <p className="text-stone-500 text-sm">身心靈靜修營</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-stone-100 text-center">
                        <h3 className="text-2xl font-serif mb-2">Event</h3>
                        <p className="text-stone-500 text-sm">特別活動</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-stone-100 text-center">
                        <h3 className="text-2xl font-serif mb-2">Charity</h3>
                        <p className="text-stone-500 text-sm">公益與捐贈</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
