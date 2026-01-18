/**
 * Copyright (c) 2026 Arihant Jain, Qwertuhh
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Links {
    name: string;
    link: string;
}

const links: Links[] = [
    {
        name: 'highlights',
        link: '#highlights',
    },
    {
        name: 'menu',
        link: '/menu',
    },
    {
        name: 'contact',
        link: '#contact',
    },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHoveringTop, setIsHoveringTop] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();

        // Extract hash part from link (handles both '#highlights' and '/#highlights')
        const hash = targetId.includes('#')
            ? targetId.split('#').pop() || targetId.replace('#', '')
            : targetId.replace('#', '');

        // Check if we're not on the home page
        if (window.location.pathname !== '/') {
            // Navigate to home page first, then scroll to section
            window.location.href = '/' + targetId;
            return;
        }

        const targetElement = document.getElementById(hash);
        if (!targetElement) return;

        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        const viewportHeight = window.innerHeight;
        const targetHeight = targetElement.offsetHeight;

        // Calculate scroll position to center the element
        const targetRect = targetElement.getBoundingClientRect();
        const currentScrollY = window.pageYOffset;
        const targetCenterPosition =
            targetRect.top +
            currentScrollY +
            targetHeight / 2 -
            viewportHeight / 2;

        // Add navbar offset to ensure it's not covered
        const finalScrollPosition = Math.max(
            0,
            targetCenterPosition - navbarHeight
        );

        window.scrollTo({
            top: finalScrollPosition,
            behavior: 'smooth',
        });

        // Close mobile menu after navigation
        setMenuOpen(false);
    };

    // Handle initial hash-based scrolling on page load
    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    const targetElement = document.getElementById(
                        hash.replace('#', '')
                    );
                    if (targetElement) {
                        const navbarHeight =
                            navbarRef.current?.offsetHeight || 0;
                        const viewportHeight = window.innerHeight;
                        const targetHeight = targetElement.offsetHeight;

                        const targetRect =
                            targetElement.getBoundingClientRect();
                        const currentScrollY = window.pageYOffset;
                        const targetCenterPosition =
                            targetRect.top +
                            currentScrollY +
                            targetHeight / 2 -
                            viewportHeight / 2;
                        const finalScrollPosition = Math.max(
                            0,
                            targetCenterPosition - navbarHeight
                        );

                        window.scrollTo({
                            top: finalScrollPosition,
                            behavior: 'smooth',
                        });
                    }
                }, 100);
            }
        };

        // Handle initial load
        handleHashScroll();

        // Handle hash changes
        window.addEventListener('hashchange', handleHashScroll);

        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navbar when scrolling (both up and down) after 100px
            if (currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Show navbar when hovering at top of page
            if (e.clientY <= 100) {
                setIsHoveringTop(true);
            } else {
                setIsHoveringTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    const shouldShow = isVisible || isHoveringTop || lastScrollY <= 100;

    return (
        <nav
            className={clsx(
                'bg-stone-800/80 py-4 questrial-regular px-4 rounded-md fixed top-0 left-0 right-0 z-50 m-4 transition-transform duration-300 ease-in-out',
                shouldShow
                    ? 'translate-y-0'
                    : '-translate-y-full border border-neutral-100/40'
            )}
        >
            <div className="flex justify-between items-center">
                <a href="/">
                    <div className="text-white text-xl font-bold wix-madefor-display-semibold">
                        Manchaho Catrers
                    </div>
                </a>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-2xl cursor-pointer"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                {/* Menu (hidden on mobile unless open) */}
                <ul
                    className={clsx(
                        'ibm-plex-mono-medium absolute md:static top-full left-0 w-full md:w-auto md:flex gap-4 md:gap-10 px-6 py-4 md:p-0 rounded-md transition-all duration-300 ease-in-out not-md:bg-stone-800/80',
                        menuOpen ? 'flex flex-col' : 'hidden',
                        menuOpen ? 'mt-4' : 'mt-0'
                    )}
                >
                    {links.map(({ name, link }) => (
                        <li
                            key={name}
                            className="flex items-center gap-2 text-white py-2 md:py-0 cursor-selectable"
                        >
                            {link.startsWith('#') || link.includes('#') ? (
                                <a
                                    href={link}
                                    className="capitalize hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                                    onClick={(e) => scrollToSection(e, link)}
                                >
                                    {name}
                                </a>
                            ) : link.startsWith('http') ||
                              link.endsWith('.pdf') ? (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="capitalize hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                                >
                                    {name}
                                </a>
                            ) : (
                                <Link
                                    to={link}
                                    className="capitalize hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
