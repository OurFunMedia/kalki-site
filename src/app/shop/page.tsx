import Navbar from "@/components/Navbar";

export default function ShopPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">商店 <span className="block text-lg font-sans text-stone-400 mt-4 tracking-widest uppercase">Shop</span></h1>
                <p className="text-stone-500">精選瑜伽選品準備中...</p>
            </div>
        </div>
    )
}
