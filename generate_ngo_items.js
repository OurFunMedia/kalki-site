const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'outstatic', 'content', 'ngo_projects');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const items = [
    {
        title: "團體瑜伽恆常班",
        slug: "group-yoga",
        img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
        desc: "提供專業的團體瑜伽恆常課程，幫助參加者建立健康的運動習慣，提升身體柔韌度與心理素質。"
    },
    {
        title: "團體建設活動",
        slug: "team-building",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        desc: "專為企業與機構設計的團隊建設活動，透過瑜伽與互動遊戲，增進團隊凝聚力與溝通默契。"
    },
    {
        title: "頌砵聲頻浴",
        slug: "singing-bowl",
        img: "https://images.unsplash.com/photo-1608096281339-5af2f6e522ff?q=80&w=800&auto=format&fit=crop",
        desc: "沉浸式的頌砵聲頻體驗，利用聲波的共振達到深層放鬆，舒緩壓力與焦慮，恢復身心平衡。"
    },
    {
        title: "創意工作坊",
        slug: "creative-workshop",
        img: "https://images.unsplash.com/photo-1531844251246-9a1bfaae0cb0?q=80&w=800&auto=format&fit=crop",
        desc: "結合正念與創意藝術的工作坊，讓參加者在創作過程中探索自我，激發潛能並釋放壓力。"
    },
    {
        title: "網上正念練習",
        slug: "online-mindfulness",
        img: "https://images.unsplash.com/photo-1542621334-a254cf477cc4?q=80&w=800&auto=format&fit=crop",
        desc: "隨時隨地參與的網上正念課程，帶領您在繁忙的生活中找到片刻寧靜，提升專注力與自我覺察能力。"
    },
    {
        title: "瑜伽治療及正念靜觀",
        slug: "yoga-therapy",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
        desc: "針對特定身心需求設計的瑜伽治療，結合正念靜觀技巧，幫助改善疼痛、促進康復及提升整體健康。"
    }
];

let counter = 10;
items.forEach(item => {
    const md = `---
title: "${item.title}"
status: "published"
author:
  name: "Kalki Yoga"
  picture: "https://avatars.githubusercontent.com/u/1?v=4"
slug: "${item.slug}"
description: "${item.desc}"
coverImage: "${item.img}"
publishedAt: "2024-03-22T20:00:${counter}.000Z"
---

${item.desc}
`;
    fs.writeFileSync(path.join(outDir, `${item.slug}.md`), md);
    counter++;
});

console.log("Files generated successfully.");
