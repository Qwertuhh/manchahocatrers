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

import { useMemo } from 'react';
import Fuse from 'fuse.js';
import type { MenuItemWithId } from '@/types';
import type { MenuSubCategory } from '@/types';

interface UseMenuFilterProps {
    items: MenuItemWithId[];
    searchTerm: string;
    selectedCategory: string;
    menuSubCategories: MenuSubCategory[];
}

interface UseMenuFilterReturn {
    filteredItems: MenuItemWithId[];
}

function useMenuFilter({
    items,
    searchTerm,
    selectedCategory,
    menuSubCategories,
}: UseMenuFilterProps): UseMenuFilterReturn {
    const fuse = useMemo(() => {
        // Enhanced items with category hierarchy for better search
        const enhancedItems = items.map((item) => {
            const subCategoryObj = menuSubCategories.find(
                (sub) => sub.name === item.category
            );

            return {
                ...item,
                // Add parent category for search if subcategory exists
                parentCategory: subCategoryObj?.parentCategory?.name || '',
                // Combine category and parent category for comprehensive search
                searchableCategory: subCategoryObj
                    ? `${item.category} ${
                          subCategoryObj.parentCategory?.name || ''
                      }`
                    : item.category,
            };
        });

        return new Fuse(enhancedItems, {
            keys: [
                'name',
                'description',
                'hindiName',
                'hindiDescription',
                {
                    name: 'category',
                    weight: 0.8,
                },
                {
                    name: 'parentCategory',
                    weight: 0.7,
                },
                {
                    name: 'searchableCategory',
                    weight: 0.9,
                },
            ],
            threshold: 0.3,
            includeScore: true,
        });
    }, [items, menuSubCategories]);

    const filteredItems = useMemo(() => {
        let filteredItems = items;

        // Apply fuzzy search if there's a search term
        if (searchTerm.trim()) {
            const searchResults = fuse.search(searchTerm);
            // Map back to original item structure by extracting the original properties
            filteredItems = searchResults.map((result) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { parentCategory, searchableCategory, ...originalItem } =
                    result.item;
                return originalItem as MenuItemWithId;
            });
        }

        // Apply category filter
        return filteredItems.filter((item) => {
            // If "All" is selected, include everything after search filter
            if (selectedCategory === 'All') {
                return true;
            }

            // 1) Direct match: item's category string is exactly the selected main category
            if (item.category === selectedCategory) {
                return true;
            }

            // 2) Indirect match: item's category is a subcategory whose parent matches
            const subCategoryObj = menuSubCategories.find(
                (sub) => sub.name === item.category
            );

            if (!subCategoryObj) return false;

            return subCategoryObj.parentCategory.name === selectedCategory;
        });
    }, [items, searchTerm, selectedCategory, menuSubCategories, fuse]);

    return { filteredItems };
}

export { useMenuFilter };
