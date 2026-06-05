'use client'

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function InquiryPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
        const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

        const subjectSelect = form.elements.namedItem('subject') as HTMLSelectElement
        const subjectLabel = subjectSelect.options[subjectSelect.selectedIndex]?.text || subject

        const text = [
            `姓名 Name: ${name}`,
            `Email: ${email}`,
            `電話 Phone: ${phone}`,
            `主旨 Subject: ${subjectLabel}`,
            `訊息 Message: ${message}`,
        ].join('\n')

        const url = `https://wa.me/85268091683?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/hero.png"
                        alt="查詢及報價"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative z-10 text-center text-white space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-serif tracking-wide drop-shadow-lg">
                        查詢及報價
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-95 drop-shadow-md">
                        歡迎與我們聯絡，我們將盡快回覆您
                    </p>
                </div>
            </section>

            {/* Inquiry Form Section */}
            <section className="py-24 px-6 md:px-12 bg-cream">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary tracking-[0.2em] text-xs font-bold uppercase">Contact</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-charcoal font-light leading-tight mt-2">
                                取得查詢及報價
                            </h2>
                        </div>
                        <div className="space-y-4 text-stone-600">
                            <p className="leading-relaxed">
                                無論您對課程、工作坊或是任何合作有興趣，歡迎填寫表單或透過以下方式與我們聯繫。
                            </p>
                            <div>
                                <h3 className="font-serif text-xl text-charcoal mb-1">WhatsApp</h3>
                                <a href="https://wa.me/85268091683" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    +852 6809 1683
                                </a>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-charcoal mb-1">Email</h3>
                                <a href="mailto:info@kalkiwellnessproject.com" className="text-primary hover:underline">
                                    info@kalkiwellnessproject.com
                                </a>
                            </div>
                            <div className="hidden">
                                <h3 className="font-serif text-xl text-charcoal mb-1">地址 Address</h3>
                                <p>[請填寫地址]</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <a
                                href="https://forms.gle/JxyCUSom7s78diJd7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium tracking-wide"
                            >
                                立即報價
                            </a>
                            <a
                                href="/downloads/Kalki_Booklet.pdf"
                                target="_blank"
                                download
                                className="inline-block text-center py-3 px-6 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium tracking-wide"
                            >
                                索取最新活動小冊子
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-500 mb-1">姓名 Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-500 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-stone-500 mb-1">電話 Phone</label>
                                <input type="tel" id="phone" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-stone-500 mb-1">主旨 Subject</label>
                                <select id="subject" className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                                    <option value="">請選擇</option>
                                    <option value="class">課程查詢</option>
                                    <option value="workshop">工作坊查詢</option>
                                    <option value="ngo">外展/到校服務</option>
                                    <option value="quote">報價諮詢</option>
                                    <option value="other">其他</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-500 mb-1">訊息 Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium tracking-wide">
                                送出查詢 Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-charcoal text-cream py-16 px-6 md:px-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="space-y-3">
                        <h4 className="text-primary tracking-widest text-xs font-bold uppercase">WhatsApp</h4>
                        <a href="https://wa.me/85268091683" target="_blank" rel="noopener noreferrer" className="block text-cream/70 font-light hover:text-white transition-colors">
                            +852 6809 1683
                        </a>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-primary tracking-widest text-xs font-bold uppercase">Email</h4>
                        <a href="mailto:info@kalkiwellnessproject.com" className="block text-cream/70 font-light hover:text-white transition-colors">
                            info@kalkiwellnessproject.com
                        </a>
                    </div>
                    <div className="space-y-3 hidden">
                        <h4 className="text-primary tracking-widest text-xs font-bold uppercase">Address</h4>
                        <p className="text-cream/70 font-light leading-relaxed">[請填寫地址]</p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-cream/10 text-center text-sm text-cream/30">
                    <p>&copy; {new Date().getFullYear()} Kalki Yoga. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
