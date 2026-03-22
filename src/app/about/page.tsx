import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">品牌故事 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Story & Passion</span></h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                    Kalki Yoga 的起源與信念... (內容建置中)
                </p>
            </div>
        </div>
    )
}
