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

import { useEffect, useCallback } from 'react';

/**
 * Props for the useNavigation hook
 */
interface UseNavigationProps {
    /** Callback function to handle navigation to the next page */
    onNextPage: () => void;
    /** Callback function to handle navigation to the previous page */
    onPreviousPage: () => void;
}

/**
 * Custom hook that provides navigation functionality using keyboard arrows and touch/swipe gestures.
 * Supports left/right arrow keys for keyboard navigation and swipe gestures for touch devices.
 *
 * @param props - Navigation configuration object
 * @returns Object containing touch event handler for swipe navigation
 *
 * @example
 * ```tsx
 * const { handleTouchStart } = useNavigation({
 *   onNextPage: () => setCurrentPage(prev => prev + 1),
 *   onPreviousPage: () => setCurrentPage(prev => prev - 1)
 * });
 *
 * // Use in component
 * <div onTouchStart={handleTouchStart}>
 *   // Content that can be swiped
 * </div>
 * ```
 */
function useNavigation({ onNextPage, onPreviousPage }: UseNavigationProps) {
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                onPreviousPage();
            } else if (event.key === 'ArrowRight') {
                onNextPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onNextPage, onPreviousPage]);

    // Touch/Swipe handlers
    const handleTouchStart = useCallback(
        (e: React.TouchEvent) => {
            const touchStartX = e.touches[0].clientX;
            const handleTouchEnd = (e: TouchEvent) => {
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;

                if (Math.abs(diff) > 50) {
                    // Minimum swipe distance
                    if (diff > 0) {
                        onNextPage(); // Swipe left - next page
                    } else {
                        onPreviousPage(); // Swipe right - previous page
                    }
                }

                window.removeEventListener('touchend', handleTouchEnd);
            };

            window.addEventListener('touchend', handleTouchEnd);
        },
        [onNextPage, onPreviousPage]
    );

    return { handleTouchStart };
}

export { useNavigation };
