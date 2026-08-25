export interface SchoolActivity {
    slug: string;
    title: string;
    /** 卡片上的短說明 */
    shortDescription: string;
    /** 子頁面的完整介紹 */
    fullDescription: string;
    /** 標籤，如 "當下覺察力" */
    tags: string[];
    /** 對學校的價值（逐條） */
    schoolValues: string[];
    image: string;
}

export const kidsActivities: SchoolActivity[] = [
    {
        slug: "kids-yoga-poses",
        title: "瑜伽體式",
        shortDescription: "兒童能夠感知身體的變化，提升協調性與靈活性，為身體覺知打下基礎。",
        fullDescription: "透過緩慢而具結構性的體式練習，引導幼兒將專注力帶回身體感覺，同時鍛鍊協調性與平衡感。重複而穩定的動作序列，有助建立本體感覺與空間感知，為身體覺知打下基礎，亦是情緒自我調節能力發展的重要根基。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "有助改善學生因久坐或姿勢不良引致的身體緊張",
            "適合融入日常體能活動，作為全人發展課程的一部分",
            "對專注力較弱或感官調節有困難的學生（包括有特殊學習需要的學童）尤其有支援作用",
        ],
        image: "/images/school/k001.png",
    },
    {
        slug: "kids-storybook",
        title: "繪本故事串連",
        shortDescription: "引導兒童理解動作與情緒的關聯，增強專注力與想像力，讓學習更有趣味。",
        fullDescription: "透過故事情節與角色情感的連結，引導幼兒理解動作與情緒之間的關係。過程中學生會學習辨識角色的感受，並練習以不批判的態度理解不同角色的處境，同時培養想像力與敘事理解能力。",
        tags: ["情緒辨識與接納", "人際連結與同理心"],
        schoolValues: [
            "強化語文學習與情感教育的跨學科連結",
            "有助建立群體歸屬感，加強同儕之間的理解與連結",
            "為表達能力較弱或社交適應有困難的學生提供非語言的情感理解途徑",
        ],
        image: "/images/school/k002.png",
    },
    {
        slug: "kids-breathing-games",
        title: "靜觀呼吸遊戲",
        shortDescription: "專注於呼吸技巧，幫助兒童認識身體感受，學會情緒管理，促進內心平靜。",
        fullDescription: "以遊戲化形式引導幼兒專注於呼吸節奏，透過緩慢呼氣刺激副交感神經，有效降低生理喚醒程度。過程強調身體感覺的覺察，讓學生學習在情緒波動時，運用呼吸作為自我調節的工具。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "提供學生一套隨時可用、不需器材的情緒緩解工具",
            "有助紓緩學業壓力及情緒波動，累積長遠的抗逆能力",
            "適合作為課堂轉換活動或考測前的減壓環節",
        ],
        image: "/images/school/k003.png",
    },
    {
        slug: "kids-emotion-games",
        title: "情緒覺察／管理遊戲",
        shortDescription: "透過情緒卡、角色扮演等互動遊戲，幫助認識及表達情緒，學習情緒管理技巧。",
        fullDescription: "透過情緒卡及角色扮演等互動形式，協助幼兒建立情緒詞彙，學習辨識自己與他人的情緒狀態。活動設計強調不批判的接納態度，讓學生明白所有情緒都是可以被理解和表達的。",
        tags: ["情緒辨識與接納", "人際連結與同理心"],
        schoolValues: [
            "有效提升學生的情緒詞彙及表達能力，減少行為問題的發生",
            "支援社交溝通及情緒表達有困難的學生，包括有特殊學習需要的學童",
            "可融入班主任課或成長課，強化日常品德情意教育",
        ],
        image: "/images/school/k004.png",
    },
    {
        slug: "kids-mindful-art",
        title: "正念藝術創作",
        shortDescription: "自由表達當下情緒，觀察內心感受，幫助兒童建立個人價值和形象。",
        fullDescription: "在無評分、無比較的創作環境下，引導幼兒專注於當下的創作過程，透過視覺與觸感表達內在感受。藝術創作提供一個安全的情感出口，讓學生在不需言語的情況下練習自我表達與接納。",
        tags: ["當下覺察力", "情緒辨識與接納"],
        schoolValues: [
            "為口語表達能力較弱或不擅長直接表達情緒的學生，提供替代性表達途徑",
            "有助建立正面自我形象及自我價值感",
            "作品可用作學校成果展示，提升活動的家長參與度及能見度",
        ],
        image: "/images/school/k005.png",
    },
    {
        slug: "kids-sound-healing",
        title: "頌缽／銅鑼聲音療癒",
        shortDescription: "感受聲音共振，培養專注力及平靜心靈，改善情緒健康，幫助兒童深層放鬆身心。",
        fullDescription: "透過聲音共振引導幼兒進入深層放鬆狀態，過程不需要主動「做」任何事，純粹透過聆聽練習專注當下。緩慢的聲頻震動有助降低神經系統的喚醒程度，達致身心同步放鬆。此類身心修煉方式源於東方傳統智慧，兼具文化底蘊與實證支持。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "適合安排在測考期後或活動尾聲的深層放鬆環節",
            "提供學生少見而具記憶點的感官體驗，提升活動參與度",
            "活動根植於傳統身心修煉文化，具備豐富的文化脈絡及教育意義",
        ],
        image: "/images/school/k006.png",
    },
    {
        slug: "kids-mindfulness",
        title: "正念靜觀",
        shortDescription: "透過專注當下，提高個人自我理解和自我價值認知，幫助兒童與社會價值連結。",
        fullDescription: "透過專注當下的靜觀練習，引導幼兒學習暫停、觀察，而非即時被情緒帶走反應。過程培養學生對自身狀態的覺察力，逐步建立正面積極的自我概念，以及對自身感受不批判的接納態度。",
        tags: ["當下覺察力", "情緒辨識與接納"],
        schoolValues: [
            "從根本建立學生正向的自我概念及生活態度",
            "為生命教育及品德情意發展提供具實證基礎的教學工具",
            "適合恆常定期進行，累積效果隨時間遞增",
        ],
        image: "/images/school/k007.png",
    },
    {
        slug: "kids-family-yoga",
        title: "親子瑜伽",
        shortDescription: "促進家庭成員之間的情感連結，透過練習增強信任與溝通能力，增進同理心。",
        fullDescription: "透過需要雙方配合的瑜伽動作，家長與子女在身體接觸與合作過程中建立信任關係。共同調節呼吸與節奏的練習，有助強化家庭成員之間的情感連結與非語言溝通。",
        tags: ["身心自我調節", "人際連結與同理心"],
        schoolValues: [
            "有效提升家長對學校活動的參與度及投入感",
            "支援家校合作及家庭生活教育相關的推廣工作",
            "適合作為親子工作坊或家長教育活動的常規項目",
        ],
        image: "/images/school/k008.png",
    },
    {
        slug: "kids-volunteer-service",
        title: "義工服務",
        shortDescription: "與慈善團體/社區中心合作，鼓勵兒童分享專長和技能，提升個人價值，增強社會責任感。",
        fullDescription: "透過實際服務他人的經歷，讓幼兒在真實情境中體會自身能力對他人的價值。過程中學生需要理解服務對象的需要，練習同理心，並在貢獻的過程中建立自我肯定感。",
        tags: ["人際連結與同理心", "情緒辨識與接納"],
        schoolValues: [
            "提供真實情境下的社交及同理心實踐機會，比課堂講解更具內化效果",
            "有助建立學生的責任感及社會參與意識",
            "可連結社福機構或社區資源，擴闊學校對外協作網絡",
        ],
        image: "/images/school/k009.png",
    },
];

export const teenActivities: SchoolActivity[] = [
    {
        slug: "teen-yoga-poses",
        title: "瑜伽體式",
        shortDescription: "青少年能深入感知身體的狀態，改善因長期學習或使用電子產品而引致的姿勢問題，提升柔韌度與平衡感。",
        fullDescription: "針對長時間使用電子產品及久坐學習引致的姿勢問題，透過體式練習提升身體覺察與柔韌度。練習過程要求持續的專注與堅持，有助學生建立主動照顧自身身體狀態的習慣。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "針對性回應現代青少年普遍的姿勢及久坐問題",
            "有助紓緩學業壓力帶來的身體緊張，提升專注力",
            "適合融入體育課或班主任課，不需額外場地配套",
        ],
        image: "/images/school/y001.png",
    },
    {
        slug: "teen-aroma-stretch",
        title: "聞香放鬆伸展",
        shortDescription: "在練習伸展與瑜伽體式時，結合天然精油的香氣，引導感官深度放鬆，快速進入身心舒緩的狀態。",
        fullDescription: "結合天然香氣與伸展動作，透過嗅覺這條最快連結情緒中樞的感官通道，引導學生快速進入身心放鬆狀態。此活動特別適合處理因學業或社交壓力而產生的焦躁情緒。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "感官體驗新穎，能有效提升青少年的參與動機",
            "為情緒表達較被動或不擅口語溝通的學生，提供非語言的減壓途徑",
            "適合納入身心健康自我管理相關的校本課程內容",
        ],
        image: "/images/school/y002.png",
    },
    {
        slug: "teen-breathing-techniques",
        title: "靜觀呼吸技巧分享",
        shortDescription: "幫助青少年在感到焦慮或分心時，穩定心神，清晰地覺察身體訊號，從而掌握情緒調節的主導權。",
        fullDescription: "系統性教授呼吸調節技巧，協助學生在感到焦慮或分心時，自主穩定心神並清晰覺察身體訊號。技巧一經掌握，學生可獨立於日常生活（例如測考前）自行運用，效益延續於活動之後。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "培養學生自主掌握情緒調節的能力，減少對外在支援的依賴",
            "直接回應學業壓力及焦慮情緒管理的實際需要",
            "可延伸為教職員工作坊，同步提升教師的自我照顧能力",
        ],
        image: "/images/school/y003.png",
    },
    {
        slug: "teen-emotion-expression",
        title: "情緒覺察／表達互動",
        shortDescription: "透過情境討論、小組分享等互動方式，幫助青少年深入理解自身和他人的情緒，並學習有效的溝通與應對策略。",
        fullDescription: "透過情境討論與小組分享，讓學生聆聽同輩真實的情緒經驗，理解「這些感受並非個人獨有」。過程中學生練習理解他人處境，並建立健康的社交溝通及情緒表達技巧。",
        tags: ["情緒辨識與接納", "人際連結與同理心"],
        schoolValues: [
            "有效改善班級氣氛及同儕關係，減少人際衝突",
            "支援社交溝通能力發展有困難的學生，包括有特殊學習需要的學生",
            "可作為班主任課或成長課的恆常內容",
        ],
        image: "/images/school/y004.png",
    },
    {
        slug: "teen-mindful-art",
        title: "正念藝術創作",
        shortDescription: "在無批判的環境下自由表達內心世界，觀察思緒與感受的流動，加深自我認識。",
        fullDescription: "在無批判的創作環境下，提供青少年一個不需言語的情感出口。相較於直接對話，藝術創作更能觸及學生「不想講」多於「不懂講」的內在感受，過程同時提升自我認識與情緒調節能力。",
        tags: ["當下覺察力", "情緒辨識與接納"],
        schoolValues: [
            "特別適合不擅長口語表達或對輔導形式有抗拒感的學生",
            "有助紓緩學業及社交壓力帶來的情緒困擾",
            "作品可作展覽用途，提升活動能見度及學生成就感",
        ],
        image: "/images/school/y005.png",
    },
    {
        slug: "teen-sound-healing",
        title: "頌缽／銅鑼聲音療癒",
        shortDescription: "舒緩緊繃的神經系統，提升專注力以應對學業，改善睡眠質素，達深層身心修復。",
        fullDescription: "透過聲音共振直接修復因長期學業壓力而繃緊的神經系統，效果較一般傾談更快令學生進入深層放鬆狀態。此活動根植於傳統身心修煉文化，兼具實證支持與文化底蘊。",
        tags: ["當下覺察力", "身心自我調節"],
        schoolValues: [
            "特別適合公開試或呈分試前後的高壓期安排",
            "有效改善學生的睡眠質素及應對學業壓力的能力",
            "活動具備豐富文化脈絡，可連結中華傳統身心修煉智慧的推廣",
        ],
        image: "/images/school/y006.png",
    },
    {
        slug: "teen-mindfulness",
        title: "正念靜觀",
        shortDescription: "練習在生活中保持覺察，能更清晰理解自己的價值觀，並以更開放和同理的心態與他人互動。",
        fullDescription: "透過持續的靜觀練習，青少年學習更清晰理解自身的價值觀與情緒狀態，並將這份覺察延伸至與社會的連結——以更開放與同理的心態理解他人。此練習亦源自東方靜觀智慧傳統。",
        tags: ["當下覺察力", "情緒辨識與接納"],
        schoolValues: [
            "為生命教育及精神健康素養提供具實證基礎的核心教學工具",
            "有助學生建立正面積極的生活態度及自我概念",
            "活動內容具文化脈絡，適合連結相關主題課程推廣",
        ],
        image: "/images/school/y007.png",
    },
    {
        slug: "teen-partner-yoga",
        title: "雙人瑜伽",
        shortDescription: "在輕鬆的氛圍中建立溝通橋樑，學習互信與協作，深化同伴間的理解與支持。",
        fullDescription: "需要互相信任與配合才能完成的動作設計，在輕鬆氛圍下建立學生之間的溝通橋樑。相較於直接對話，雙人練習更容易打破同儕之間的隔閡，同步鍛鍊身體協調與人際協作能力。",
        tags: ["身心自我調節", "人際連結與同理心"],
        schoolValues: [
            "有助改善班級凝聚力及同儕關係，營造關愛校園文化",
            "適合用於迎新活動或班級建立活動",
            "支援人際溝通有困難的學生，透過非語言互動建立連結",
        ],
        image: "/images/school/y008.png",
    },
    {
        slug: "teen-community-service",
        title: "社區連結服務學習",
        shortDescription: "將課程中所學應用於服務他人，從實踐中發現個人價值，培養社會公民意識。",
        fullDescription: "將課堂所學實際應用於服務他人的過程，讓學生在真實情境中發現自身價值。相較於理論講解，實踐中的貢獻經歷更能夠內化責任感、同理心及社會參與意識。",
        tags: ["人際連結與同理心", "情緒辨識與接納"],
        schoolValues: [
            "提供真實情境下的專題研習及服務學習實踐機會",
            "有助建立學生的公民意識及社會責任感",
            "對學生的成長歷程及升學履歷具實質意義",
        ],
        image: "/images/school/y009.png",
    },
];

export const allSchoolActivities: SchoolActivity[] = [...kidsActivities, ...teenActivities];

export function getSchoolActivity(slug: string): SchoolActivity | undefined {
    return allSchoolActivities.find((a) => a.slug === slug);
}
