import Navbar from "@/components/Navbar";

export default function WorkshopsPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">工作坊與培訓 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Workshop & Training</span></h1>
                <p className="text-stone-500">更多深度學習課程即將推出...</p>
            </div>
        </div>
    )
}
