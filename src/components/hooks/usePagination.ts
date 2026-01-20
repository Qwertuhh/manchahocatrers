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

import { useState, useMemo, useEffect, useCallback } from 'react';
import type { MenuItemWithId } from '@/types';

/**
 * Props for the usePagination hook
 */
interface UsePaginationProps {
    /** Array of items to paginate */
    items: MenuItemWithId[];
    /** Number of items to display per page */
    itemsPerPage: number;
    /** Optional dependency array that triggers page reset when changed */
    dependencies?: unknown[];
}

/**
 * Return value for the usePagination hook
 */
interface UsePaginationReturn {
    /** Current page index (0-based) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Array of items for the current page */
    currentItems: MenuItemWithId[];
    /** Function to navigate to the next page (wraps around) */
    goToNextPage: () => void;
    /** Function to navigate to the previous page (wraps around) */
    goToPreviousPage: () => void;
    /** Function to navigate to a specific page (wraps around) */
    goToPage: (page: number) => void;
}

/**
 * Custom hook for handling pagination with wrap-around functionality.
 * Automatically resets to first page when items or dependencies change.
 * Supports wrap-around navigation where going past the last page returns to the first.
 *
 * @param props - Pagination configuration object
 * @returns Object containing pagination state and navigation functions
 *
 * @example
 * ```tsx
 * const {
 *   currentPage,
 *   totalPages,
 *   currentItems,
 *   goToNextPage,
 *   goToPreviousPage,
 *   goToPage
 * } = usePagination({
 *   items: menuItems,
 *   itemsPerPage: 12,
 *   dependencies: [searchTerm] // Reset page when search changes
 * });
 * ```
 */
function usePagination({
    items,
    itemsPerPage,
    dependencies = [],
}: UsePaginationProps): UsePaginationReturn {
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate pagination values
    const paginationValues = useMemo(() => {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const safeTotalPages = Math.max(totalPages, 0);

        // Ensure currentPage is always in range [0, safeTotalPages - 1]
        const normalizedPage = safeTotalPages
            ? ((currentPage % safeTotalPages) + safeTotalPages) % safeTotalPages
            : 0;

        const startIndex = normalizedPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = items.slice(startIndex, endIndex);

        return {
            totalPages: safeTotalPages,
            currentItems,
            startIndex,
            endIndex,
            normalizedPage,
        };
    }, [items, currentPage, itemsPerPage]);

    // Reset to first page when items change
    useEffect(() => {
        setCurrentPage(0);
    }, [items, dependencies]);

    // Navigation functions (looped / wrap-around)
    const goToNextPage = useCallback(() => {
        const total = paginationValues.totalPages;
        if (!total) return;

        setCurrentPage((prev) => (((prev + 1) % total) + total) % total);
    }, [paginationValues.totalPages]);

    const goToPreviousPage = useCallback(() => {
        const total = paginationValues.totalPages;
        if (!total) return;

        setCurrentPage((prev) => (((prev - 1) % total) + total) % total);
    }, [paginationValues.totalPages]);

    const goToPage = useCallback(
        (page: number) => {
            const total = paginationValues.totalPages;
            if (!total) return;

            // Wrap any page index into the valid range using modulo
            const target = ((page % total) + total) % total;
            setCurrentPage(target);
        },
        [paginationValues.totalPages]
    );

    return {
        currentPage: paginationValues.normalizedPage,
        totalPages: paginationValues.totalPages,
        currentItems: paginationValues.currentItems,
        goToNextPage,
        goToPreviousPage,
        goToPage,
    };
}

export { usePagination };
