import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.png"
            alt="Yoga Studio Serenity"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center text-white space-y-8 px-4">
          <h2 className="text-5xl md:text-7xl font-light tracking-wide drop-shadow-lg">
            Find Your <span className="font-serif italic">Balance</span>
          </h2>
          <p className="text-lg md:text-xl font-light max-w-lg mx-auto opacity-95 drop-shadow-md">
            在城市的喧囂中，尋找一片寧靜。<br />回歸身心的平衡與和諧。
          </p>
          <div className="pt-8">
            <Link
              href="/classes"
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
            >
              預約課程
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 bg-cream text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-primary tracking-[0.2em] text-xs font-bold uppercase">Philosophy</span>
          <h3 className="text-3xl md:text-5xl font-serif text-charcoal font-light leading-tight">
            瑜伽不只是體式，<br />而是一種<span className="italic text-primary">生活方式</span>。
          </h3>
          <p className="text-charcoal/70 leading-relaxed text-lg pt-4">
            Kalki Mindfulness & Yoga 致力於提供一個安全、包容的環境，讓每個人都能依照自己的節奏練習。
            無論你是初學者還是資深練習者，我們都有適合你的課程。
          </p>
        </div>
      </section>
      {/* Footer Section */}
      <footer id="contact" className="bg-charcoal text-cream py-16 px-6 md:px-12 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h4 className="text-primary tracking-widest text-xs font-bold uppercase">WhatsApp</h4>
            <p className="text-cream/70 font-light hover:text-white transition-colors cursor-pointer">[請填寫 WhatsApp 號碼]</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-primary tracking-widest text-xs font-bold uppercase">Email</h4>
            <p className="text-cream/70 font-light hover:text-white transition-colors cursor-pointer">[請填寫 Email]</p>
          </div>
          <div className="space-y-3">
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
