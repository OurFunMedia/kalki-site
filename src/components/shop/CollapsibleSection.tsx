'use client'

import { useState, type ReactNode } from 'react'

type Props = {
    title: string
    children: ReactNode
    defaultOpen?: boolean
}

export default function CollapsibleSection({ title, children, defaultOpen = false }: Props) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className="border-b border-stone-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-4 text-left text-charcoal font-medium tracking-wide hover:text-primary transition-colors"
            >
                <span>{title}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                >
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    open ? 'max-h-[2000px] pb-5' : 'max-h-0 pb-0'
                }`}
            >
                <div className="text-stone-600 leading-relaxed tracking-wide space-y-4">
                    {children}
                </div>
            </div>
        </div>
    )
}
