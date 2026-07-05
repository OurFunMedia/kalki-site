'use client'

import { useState } from 'react'
import { useCart, parsePriceValue } from '@/context/CartContext'
import QuantitySelector from './QuantitySelector'
import Link from 'next/link'

type Props = {
    slug: string
    title: string
    productCode?: string
    price: string
    coverImage?: string
}

export default function AddToCartSection({ slug, title, productCode, price, coverImage }: Props) {
    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)
    const { addItem, totalItems } = useCart()

    const handleAdd = () => {
        addItem({
            slug,
            title,
            productCode,
            price,
            priceValue: parsePriceValue(price),
            coverImage,
            quantity,
        })
        setQuantity(1)
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <div className="space-y-4">
            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <button
                    onClick={handleAdd}
                    className="flex-1 bg-[#4A3B32] text-white py-4 md:py-3.5 tracking-widest hover:bg-[#3A2B22] transition-colors border border-[#4A3B32] font-medium"
                >
                    {added ? '✓ 已加入購物車' : '加入購物車'}
                </button>
            </div>

            {/* Cart status & continue */}
            <div className="flex items-center justify-between text-sm text-stone-500">
                {totalItems > 0 && (
                    <Link href="/shop/cart" className="text-primary hover:underline">
                        購物車內有 {totalItems} 件商品
                    </Link>
                )}
                {added && (
                    <Link href="/shop/cart" className="text-primary hover:underline font-medium">
                        前往結帳 →
                    </Link>
                )}
            </div>
        </div>
    )
}
