/**
 * Copyright (c) 2026 Manchao Catrers, Kumar Jain
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

import { useState, useEffect, useRef } from 'react';
import { MenuItemCard } from '@/components/menu';
import type { MenuItemWithId } from '@/types';
import type { MenuSubCategory } from '@/types';

interface LazyMenuItemCardProps {
    item: MenuItemWithId;
    menuSubCategories: MenuSubCategory[];
}

function LazyMenuItemCard({ item, menuSubCategories }: LazyMenuItemCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Mark as loaded after a small delay to prevent flickering
                    setTimeout(() => setIsLoaded(true), 50);
                    observer.unobserve(element);
                }
            },
            {
                root: null,
                rootMargin: '100px', // Start loading 100px before element comes into view
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    // Placeholder skeleton
    if (!isVisible) {
        return (
            <div
                ref={elementRef}
                className="bg-white rounded-md shadow-sm p-6 relative animate-pulse"
            >
                <div className="space-y-3">
                    {/* Image placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

                    {/* Text placeholders */}
                    <div className="space-y-2">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    </div>

                    <div className="space-y-1">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>

                    <div className="pt-2 flex justify-between">
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={elementRef}
            className={`transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <MenuItemCard item={item} menuSubCategories={menuSubCategories} />
        </div>
    );
}

export { LazyMenuItemCard };
