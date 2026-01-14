'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navLinks = [
        { href: '/ngo', label: 'NGO' },
        { href: '/classes', label: '課程' },
        { href: '/instructors', label: '導師' },
        { href: '/workshops', label: '工作坊' },
        { href: '/events', label: '活動' },
        { href: '/shop', label: '商店' },
        { href: '/about', label: '關於' },
        { href: '/contact', label: '聯絡' },
    ]

    return (
        <>
            <nav className={`fixed w-full z-50 top-0 left-0 p-6 flex justify-between items-center transition-all duration-300 ${transparent && !isMenuOpen
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
                        <NavLink key={link.href} href={link.href} current={pathname} transparent={transparent}>
                            {link.label}
                        </NavLink>
                    ))}
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
                    <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-charcoal' : (transparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : (transparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                    <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-charcoal' : (transparent ? 'bg-white' : 'bg-charcoal')}`}></div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col space-y-6 text-center">
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
