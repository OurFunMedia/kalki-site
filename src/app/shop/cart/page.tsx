'use client'

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "@/components/shop/QuantitySelector";

const PHONE = '85268091683'

function buildOrderMessage(items: { title: string; productCode?: string; quantity: number; price: string; priceValue: number }[], total: number): string {
    const lines = items.map(i => {
        const code = i.productCode ? `[${i.productCode}] ` : ''
        return `${code}${i.title} x ${i.quantity} = HKD$ ${(i.priceValue * i.quantity).toLocaleString()}`
    })
    return [
        '🛒 新訂單',
        '─────────────────────',
        ...lines,
        '─────────────────────',
        `總計: HKD$ ${total.toLocaleString()}`,
        '',
        '客戶將於 WhatsApp 繼續完成付款及送貨安排。',
    ].join('\n')
}

export default function CartPage() {
    const { items, updateQuantity, removeItem, clearCart, totalPrice, isEmpty } = useCart()

    const handleCheckout = () => {
        if (isEmpty) return
        const message = buildOrderMessage(items, totalPrice)
        const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
        clearCart()
    }

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 bg-cream text-charcoal flex flex-col">
            <Navbar />
            <div className="max-w-4xl mx-auto py-12 w-full flex-grow">
                {/* Breadcrumbs */}
                <div className="flex items-center text-stone-500 mb-10 text-sm tracking-widest">
                    <Link href="/shop" className="hover:text-primary transition-colors">商店</Link>
                    <span className="mx-3">&gt;</span>
                    <span className="text-primary font-medium">購物車</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-10">購物車</h1>

                {isEmpty ? (
                    <div className="text-center py-20 text-stone-500 bg-white/50 rounded-2xl border border-stone-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-stone-300">
                            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        <p className="text-lg mb-2">購物車是空的</p>
                        <p className="text-sm mb-8">去商店逛逛吧！</p>
                        <Link href="/shop/energy-products" className="inline-block py-3 px-8 bg-[#4A3B32] text-white tracking-widest hover:bg-[#3A2B22] transition-colors">
                            繼續購物
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="space-y-4 mb-10">
                            {items.map(item => (
                                <div key={item.slug} className="flex items-center gap-4 bg-white p-4 md:p-6 rounded-lg border border-stone-100">
                                    {/* Image */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-stone-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {item.coverImage ? (
                                            <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-300"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/shop/product/${item.slug}`} className="text-base font-serif text-[#1a1a1a] hover:text-primary transition-colors line-clamp-1">
                                            {item.title}
                                        </Link>
                                        <p className="text-sm text-[#8B7355] mt-0.5">{item.price}</p>
                                        {item.productCode && <p className="text-xs text-stone-400 mt-0.5">貨號：{item.productCode}</p>}
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex-shrink-0">
                                        <QuantitySelector value={item.quantity} onChange={q => updateQuantity(item.slug, q)} />
                                    </div>

                                    {/* Subtotal */}
                                    <div className="text-right flex-shrink-0 w-20 md:w-28">
                                        <p className="text-sm font-medium text-charcoal">
                                            HKD$ {(item.priceValue * item.quantity).toLocaleString()}
                                        </p>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeItem(item.slug)}
                                        className="flex-shrink-0 p-2 text-stone-400 hover:text-red-500 transition-colors"
                                        aria-label={`移除 ${item.title}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="bg-white p-6 md:p-8 rounded-lg border border-stone-100">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg text-stone-600">總計</span>
                                <span className="text-2xl font-serif text-[#1a1a1a]">
                                    HKD$ {totalPrice.toLocaleString()}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#4A3B32] text-white py-4 tracking-widest hover:bg-[#3A2B22] transition-colors border border-[#4A3B32] font-medium"
                                >
                                    提交訂單至 WhatsApp
                                </button>
                                <p className="text-xs text-stone-400 text-center">
                                    提交後會跳轉到 WhatsApp，客服人員會與您確認訂單及安排付款
                                </p>
                                <button
                                    onClick={clearCart}
                                    className="w-full py-3 text-sm text-stone-400 hover:text-red-500 transition-colors"
                                >
                                    清空購物車
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
