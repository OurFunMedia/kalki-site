'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { totalItems } = useCart()

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    // Switch from transparent to solid background once the user scrolls past the top
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // Effective transparency: only when explicitly transparent, menu closed, and still at top
    const showTransparent = transparent && !isMenuOpen && !scrolled

    const navLinks = [
        { href: '/ngo', label: '外展/到校' },
        { href: '/workshops', label: '課堂/工作坊' },
        { href: '/classes', label: '培訓/課程' },
        { href: '/shop', label: '商店' },
        { href: '/instructors', label: '導師' },
        { href: '/about', label: '關於我們' },
        { href: '/inquiry', label: '查詢及報價' },
    ]

    return (
        <>
            <nav className={`fixed w-full z-50 top-0 left-0 p-6 flex justify-between items-center transition-all duration-300 ${showTransparent
                ? 'text-white bg-gradient-to-b from-black/50 to-transparent'
                : 'bg-cream/80 backdrop-blur-md border-b border-stone-100/50 text-charcoal'
                }`}>
                <Link href="/" className="relative block h-16 w-16 hover:opacity-90 transition-opacity z-50">
                    <Image
                        src="/logo.png"
                        alt="KALKI Wellness Project"
                        fill
                        className="object-contain rounded-full"
                        sizes="64px"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm font-medium tracking-wide items-center">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} current={pathname} transparent={showTransparent}>
                            {link.label}
                        </NavLink>
                    ))}
                    <CartIcon />
                    <Link
                        href="/outstatic"
                        target="_blank"
                        className={`transition-colors hover:opacity-70 ml-2`}
                    >
                        Admin
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50 p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-charcoal' : (showTransparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : (showTransparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                    <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-charcoal' : (showTransparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col space-y-6 text-center">
                    <Link
                        href="/shop/cart"
                        className="text-2xl font-serif text-charcoal hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        購物車 {totalItems > 0 && `(${totalItems})`}
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-2xl font-serif text-charcoal hover:text-primary transition-colors ${pathname === link.href ? 'text-primary italic' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/outstatic"
                        target="_blank"
                        className="text-sm font-medium text-stone-400 pt-8"
                    >
                        Admin Portal
                    </Link>
                </div>
            </div>
        </>
    )
}

function CartIcon() {
    const { totalItems } = useCart()
    return (
        <Link href="/shop/cart" className="relative ml-2 hover:opacity-70 transition-opacity" aria-label="購物車">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                </span>
            )}
        </Link>
    )
}

function NavLink({ href, current, children, transparent }: { href: string, current: string, children: React.ReactNode, transparent: boolean }) {
    const isActive = current === href
    const activeClass = transparent
        ? 'underline underline-offset-4'
        : 'text-primary underline underline-offset-4'

    return (
        <Link
            href={href}
            className={`transition-colors hover:opacity-70 ${isActive ? activeClass : ''}`}
        >
            {children}
        </Link>
    )
}
