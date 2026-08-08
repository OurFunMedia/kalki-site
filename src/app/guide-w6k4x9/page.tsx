import type { Metadata } from "next";
import { guideStyles, guideBody } from "./guide-content";

export const metadata: Metadata = {
  title: "Kalki Wellness 網站內容管理操作指南",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function GuidePage() {
  return (
    <main>
      <style>{guideStyles}</style>
      <div className="guide-wrap" dangerouslySetInnerHTML={{ __html: guideBody }} />
    </main>
  );
}
