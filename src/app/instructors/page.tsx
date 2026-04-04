import Navbar from "@/components/Navbar";
import Image from 'next/image';

export default function InstructorsPage() {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal">
            <Navbar />

            <div className="max-w-6xl mx-auto py-12">
                <h1 className="text-4xl md:text-6xl font-serif mb-6 text-center text-primary">我們的團隊</h1>
                <p className="text-center text-stone-400 tracking-[0.3em] uppercase text-sm mb-20 font-sans">Our Team</p>

                {/* Founders Section */}
                <div className="space-y-24 mb-32">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-serif mb-16 text-charcoal border-b border-stone-200 pb-4 inline-block">我們的創辦人</h2>
                        
                        {/* Bella Wong */}
                        <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
                            <div className="flex-1 space-y-8">
                                <h3 className="text-4xl md:text-5xl font-serif text-charcoal/80 mb-6 transition-all hover:text-primary cursor-default">Bella Wong</h3>
                                <p className="text-stone-500 leading-relaxed text-lg font-light">
                                    貝拉相信幸福源於日常修行，包括飲食、思考角度、運動及正念練習。她強調在社會裡追求人性本身顯善良同美好。她對心理學的熱愛，令她更加體會到瑜伽裡哲學智慧，踏實地帶領全面淨化心靈方式。透過分享瑜伽與其哲學、用正念練習淨化心靈、呼吸技巧及阿育吠陀，鼓勵大家擁抱正能量，向正念生活邁進，追求更加圓滿的人生。同時她亦提倡身體、心靈同精神顯全面發展。
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 pt-6 text-sm text-stone-500 font-medium">
                                    <ul className="space-y-1">
                                        <li>尼泊爾頌缽聲音治療師</li>
                                        <li>冥想治療師</li>
                                        <li>瑜伽呼吸法認可導師</li>
                                    </ul>
                                    <ul className="space-y-1">
                                        <li>E-RYT 500 瑜伽導師</li>
                                        <li>阿育吠陀草本治療導師</li>
                                        <li>Lululemon 品牌大使</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-[450px] shrink-0">
                                <div className="relative aspect-[4/5] overflow-hidden border border-stone-200 bg-white p-2 shadow-sm">
                                    <div className="relative w-full h-full border border-stone-100">
                                        <Image 
                                            src="/images/instructors/bella.png" 
                                            alt="Bella Wong" 
                                            fill 
                                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                            sizes="(max-width: 1024px) 100vw, 450px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kathy Lo */}
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-1 space-y-8">
                                <h3 className="text-4xl md:text-5xl font-serif text-charcoal/80 mb-6 transition-all hover:text-primary cursor-default">Kathy Lo</h3>
                                <p className="text-stone-500 leading-relaxed text-lg font-light">
                                    Kathy 深信瑜伽不僅是單純的體位練習，更是一種內在探索與成長的溫柔旅程。特別在兒童瑜伽教育上，她堅持身心靈健康培養應從小扎根，才可在成長路上保持平衡與韌性。她亦希望將靜觀正念融入生活，同時結合對藝術的熱愛，希望能帶給每個人更豐富、更有意識的生命體驗。
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 pt-6 text-sm text-stone-500 font-medium font-sans">
                                    <ul className="space-y-1">
                                        <li>E-RYT 200 瑜伽導師</li>
                                        <li>RCYT 95 兒童及家庭瑜伽導師</li>
                                        <li>註冊幼稚園主管及幼兒工作員</li>
                                        <li>註冊教師</li>
                                        <li>幼兒 Messy Play 導師</li>
                                        <li>幼兒奧福音樂導師</li>
                                        <li>澳洲註冊兒童靜觀導師</li>
                                    </ul>
                                    <ul className="space-y-1">
                                        <li>澳洲註冊靜觀教練</li>
                                        <li>頌缽聲音治療師</li>
                                        <li>瑜伽輪導師</li>
                                        <li>花藝導師</li>
                                        <li>日本及韓國酒精水墨認證導師及師資培訓導師</li>
                                        <li>點描幾何及彩繪曼陀羅藝術導師</li>
                                        <li>日本和諧粉彩指導師</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-[450px] shrink-0">
                                <div className="relative aspect-[4/5] overflow-hidden border border-stone-200 bg-white p-2 shadow-sm">
                                    <div className="relative w-full h-full border border-stone-100">
                                        <Image 
                                            src="/images/instructors/kathy.png" 
                                            alt="Kathy Lo" 
                                            fill 
                                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                            sizes="(max-width: 1024px) 100vw, 450px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Team Instructors Section */}
                <section className="pt-20 border-t border-stone-200">
                    <h2 className="text-2xl md:text-3xl font-serif mb-8 text-charcoal">與我們同行的導師</h2>
                    <p className="text-stone-600 leading-loose mb-16 max-w-4xl font-light">
                        我們深信每一場身心靈活動的質素，來自導師的專業與用心。因此我們建立了一個涵蓋靜觀、瑜伽、頌缽、正念藝術、兒童發展、普拉提、企業培訓等領域的導師網絡。所有導師均具備相關專業認證與豐富實務經驗，並定期參與內部培訓與同儕督導，確保服務質素一致。按不同對象與課程目標，我們會彈性配對最適合的導師，讓每個方案都由真正懂該領域的專業人員帶領。
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Samantha Ho", title: "尼泊爾頌缽聲音治療師", img: "samantha" },
                            { name: "Connie Chan", title: "尼泊爾頌缽聲音治療師", img: "connie" },
                            { name: "Yunga Yung", title: "尼泊爾頌缽聲音治療師", img: "yunga" },
                            { name: "Kay Ku", title: "尼泊爾頌缽聲音治療師", img: "kay" },
                        ].map((instructor) => (
                            <div key={instructor.name} className="group flex flex-col items-center text-center">
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                                    <Image 
                                        src={`/images/instructors/${instructor.img}.png`} 
                                        alt={instructor.name} 
                                        fill 
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <h4 className="text-xl font-serif text-charcoal mb-2">{instructor.name}</h4>
                                <p className="text-stone-400 text-sm font-medium">{instructor.title}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
