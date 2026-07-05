'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type CartItem = {
    slug: string
    title: string
    productCode?: string
    price: string      // Original price string e.g. "HKD$ 150"
    priceValue: number // Parsed numeric value for calculations
    quantity: number
    coverImage?: string
}

type CartContextType = {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
    removeItem: (slug: string) => void
    updateQuantity: (slug: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
    isEmpty: boolean
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = 'kalki-cart'

function parsePriceValue(price: string): number {
    const match = price.match(/[\d,.]+/)
    if (!match) return 0
    return parseFloat(match[0].replace(/,/g, '')) || 0
}

function loadCart(): CartItem[] {
    if (typeof window === 'undefined') return []
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return []
        const parsed = JSON.parse(raw)
        if (!Array.isArray(parsed)) return []
        return parsed
    } catch {
        return []
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    // Hydrate from localStorage on mount
    useEffect(() => {
        setItems(loadCart())
    }, [])

    // Persist to localStorage on change
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
        }
    }, [items])

    const addItem = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
        const qty = item.quantity ?? 1
        const { quantity: _qty, ...clean } = item
        setItems(prev => {
            const existing = prev.find(i => i.slug === clean.slug)
            if (existing) {
                return prev.map(i =>
                    i.slug === clean.slug
                        ? { ...i, quantity: i.quantity + qty }
                        : i
                )
            }
            return [...prev, { ...clean, quantity: qty }]
        })
    }, [])

    const removeItem = useCallback((slug: string) => {
        setItems(prev => prev.filter(i => i.slug !== slug))
    }, [])

    const updateQuantity = useCallback((slug: string, quantity: number) => {
        if (quantity < 1) return
        setItems(prev =>
            prev.map(i => (i.slug === slug ? { ...i, quantity } : i))
        )
    }, [])

    const clearCart = useCallback(() => {
        setItems([])
    }, [])

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = items.reduce((sum, i) => sum + i.priceValue * i.quantity, 0)
    const isEmpty = items.length === 0

    return (
        <CartContext.Provider value={{
            items, addItem, removeItem, updateQuantity, clearCart,
            totalItems, totalPrice, isEmpty
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextType {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within a CartProvider')
    return ctx
}

// Export helper for use in components that need price parsing
export { parsePriceValue }
