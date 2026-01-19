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

import { useState, useMemo } from 'react';
import {
    menuItemsWithId,
    menuCategories,
    menuSubCategories,
    MenuHeader,
    SearchAndFilter,
    MenuItemCard,
    ScrollPagination,
    EmptyState,
    MenuContact,
} from '@/components/menu';
import {
    useMenuFilter,
    useNavigation,
    usePagination,
} from '@/components/hooks';

const ITEMS_PER_PAGE = 18;

function MenuPreview() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Create stable dependencies array to prevent pagination resets
    const paginationDependencies = useMemo(
        () => [searchTerm, selectedCategory],
        [searchTerm, selectedCategory]
    );

    // Use custom hooks
    const { filteredItems } = useMenuFilter({
        items: menuItemsWithId,
        searchTerm,
        selectedCategory,
        menuSubCategories,
    });

    const {
        currentPage,
        totalPages,
        currentItems,
        goToNextPage,
        goToPreviousPage,
    } = usePagination({
        items: filteredItems,
        itemsPerPage: ITEMS_PER_PAGE,
        dependencies: paginationDependencies,
    });

    const { handleTouchStart } = useNavigation({
        onNextPage: goToNextPage,
        onPreviousPage: goToPreviousPage,
    });

    return (
        <div className="min-h-screen bg-neutral-100/60 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <MenuHeader
                    title="Our Menu"
                    subtitle="Discover our authentic flavors and culinary delights"
                />
                <SearchAndFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
                {filteredItems.length === 0 ? (
                    <EmptyState />
                ) : (
                    <ScrollPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPreviousPage={goToPreviousPage}
                        onNextPage={goToNextPage}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        categories={menuCategories}
                    >
                        {/* Menu Items Grid */}
                        <div
                            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 rounded-lg border border-neutral-300 p-4 transition-all duration-300 ${
                                filteredItems.length === 0 ? 'hidden' : ''
                            }`}
                            onTouchStart={handleTouchStart}
                        >
                            {currentItems.map((item) => (
                                <MenuItemCard
                                    key={item.id}
                                    item={item}
                                    menuSubCategories={menuSubCategories}
                                />
                            ))}
                        </div>
                    </ScrollPagination>
                )}

                {/* Contact Info */}
                <MenuContact />
            </div>
        </div>
    );
}

export { MenuPreview };
