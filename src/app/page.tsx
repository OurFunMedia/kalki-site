
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
            KALKI
          </h2>
          <p className="text-lg md:text-xl font-light max-w-lg mx-auto opacity-95 drop-shadow-md">
            瑜伽 - 是覺知的生活 也是身心靈的平衡
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
      <section className="pt-16 pb-32 px-6 md:px-12 bg-cream text-center">
        {/* Gallery: 4 photos above philosophy text — 1 row on desktop, 2x2 on mobile */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { src: "/images/index/index_pic01.jpg", alt: "Kalki Wellness 照片 1" },
            { src: "/images/index/index_pic02.jpg", alt: "Kalki Wellness 照片 2" },
            { src: "/images/index/index_pic03.jpg", alt: "Kalki Wellness 照片 3" },
            { src: "/images/index/index_pic04.jpg", alt: "Kalki Wellness 照片 4" },
          ].map((pic) => (
            <div key={pic.src} className="relative aspect-square overflow-hidden">
              <Image
                src={pic.src}
                alt={pic.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-charcoal/80 text-lg max-w-2xl mx-auto mb-16 leading-relaxed italic font-serif">
            KALKI WELLNESS PROJECT - 求其.放心<br></br>KALKI - 源自於吠陀節學，象徵覺知的開始<br></br>「求其。放心」出自孟子，解作尋回迷身的心<br></br>            我們透過活動與社區同行，喚醒內在的平靜，重拾生活的智慧
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-4">
            <a
              href="https://forms.gle/qTmiN1kZ2cCuycyX8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors shadow-lg hover:-translate-y-0.5 transform inline-block text-center"
            >
              服務內容
            </a>
            <a
              href="https://forms.gle/JxyCUSom7s78diJd7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors shadow-lg hover:-translate-y-0.5 transform inline-block text-center"
            >
              索取報價
            </a>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer id="contact" className="bg-charcoal text-cream py-16 px-6 md:px-12 backdrop-blur-sm">
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
          <p>&copy; {new Date().getFullYear()} Kalki Wellness. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

