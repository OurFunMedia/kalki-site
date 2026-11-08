'use client';

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "85268091683";

/** WhatsApp 官方圖示（Simple Icons） */
const WHATSAPP_PATH =
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

export default function FloatingWhatsApp() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    // 彈出時按 ESC 收起
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const handleSend = () => {
        const text = message.trim();
        const url = text
            ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
            : `https://wa.me/${WHATSAPP_NUMBER}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[90] flex flex-col items-end gap-3">
            {open && (
                <div className="w-[320px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl shadow-2xl bg-white">
                    {/* 標題欄 */}
                    <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm font-medium">Kalki Wellness</p>
                            <p className="text-white/70 text-xs mt-0.5">您好！歡迎查詢課程或報價</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="關閉"
                            className="text-white/70 hover:text-white transition-colors cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* 訊息輸入區 */}
                    <div className="bg-[#ECE5DD] px-3 py-4">
                        <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                placeholder="輸入訊息…"
                                aria-label="WhatsApp 訊息內容"
                                className="w-full text-sm text-charcoal placeholder:text-stone-400 focus:outline-none resize-none bg-transparent"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleSend}
                            className="mt-3 w-full py-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                                <path d={WHATSAPP_PATH} />
                            </svg>
                            在 WhatsApp 發送
                        </button>
                    </div>
                </div>
            )}

            {/* 浮動圓形按鈕 */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "收起 WhatsApp 查詢" : "以 WhatsApp 查詢"}
                aria-expanded={open}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
                {open ? (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" role="img" aria-hidden="true">
                        <path d={WHATSAPP_PATH} />
                    </svg>
                )}
            </button>
        </div>
    );
}
