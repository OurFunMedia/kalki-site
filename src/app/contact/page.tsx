import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 py-12">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-serif text-primary">聯絡我們 <span className="block text-lg font-sans text-stone-400 mt-2 tracking-widest uppercase">Contact Us</span></h1>
                        <div className="space-y-4 text-stone-600">
                            <p>有任何問題嗎？歡迎隨時與我們聯繫。</p>
                            <div>
                                <h3 className="font-serif text-xl text-charcoal mb-1">地址 Address</h3>
                                <p>XXXXX路 123 號 18 樓</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-charcoal mb-1">電話 Phone</h3>
                                <p>(852) 1234-5678</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-charcoal mb-1">Email</h3>
                                <p>hello@email.hk</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-500 mb-1">姓名 Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-500 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-500 mb-1">訊息 Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea>
                            </div>
                            <button type="button" className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium tracking-wide">
                                發送訊息 Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="py-6 text-center text-stone-400 text-xs tracking-wider">
                © 2026 Kalki Yoga Studio. All rights reserved.
            </footer>
        </div>
    )
}
