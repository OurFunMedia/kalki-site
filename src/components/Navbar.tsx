'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
    const pathname = usePathname()

    const isHome = pathname === '/'

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 p-6 flex justify-between items-center transition-all duration-300 ${transparent
            ? 'text-white bg-gradient-to-b from-black/50 to-transparent'
            : 'bg-cream/80 backdrop-blur-md border-b border-stone-100/50 text-charcoal'
            }`}>
            <Link href="/" className="relative block h-16 w-16 hover:opacity-90 transition-opacity">
                <Image
                    src="/logo.png"
                    alt="KALKI Wellness Project"
                    fill
                    className="object-contain rounded-full"
                    sizes="64px"
                    priority
                />
            </Link>

            <div className={`space-x-6 text-sm font-medium tracking-wide flex items-center`}>
                <NavLink href="/ngo" current={pathname} transparent={transparent}>NGO</NavLink>
                <NavLink href="/classes" current={pathname} transparent={transparent}>課程</NavLink>
                <NavLink href="/workshops" current={pathname} transparent={transparent}>工作坊</NavLink>
                <NavLink href="/events" current={pathname} transparent={transparent}>活動</NavLink>
                <NavLink href="/shop" current={pathname} transparent={transparent}>商店</NavLink>
                <NavLink href="/about" current={pathname} transparent={transparent}>關於</NavLink>
                <NavLink href="/contact" current={pathname} transparent={transparent}>聯絡</NavLink>
                <Link
                    href="/outstatic"
                    target="_blank"
                    className={`transition-colors hover:opacity-70 ml-2`}
                >
                    Admin
                </Link>
            </div>
        </nav>
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
