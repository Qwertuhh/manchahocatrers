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

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
    menuItemsWithId,
    menuCategories,
    menuSubCategories,
    MenuHeader,
    LazyMenuItemCard,
    MenuContact,
} from '@/components/menu';
import type { MenuItemWithId, MenuCategory, MenuSubCategory } from '@/types';
import Footer from '@/components/footer';

interface FlattenedItem {
    type: 'category-header' | 'subcategory-header' | 'item';
    data: MenuCategory | MenuSubCategory | MenuItemWithId;
}

interface GroupedItems {
    [key: string]: {
        category: MenuCategory;
        subcategories: {
            [key: string]: {
                subcategory: MenuSubCategory;
                items: MenuItemWithId[];
            };
        };
    };
}

const ITEMS_PER_PAGE = 12;

function SingleMenuPreview() {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    // Get all menu items (no filtering for complete menu)
    const allItems = useMemo(() => {
        return menuItemsWithId;
    }, []);

    // Group items by category and subcategory
    const groupedItems: GroupedItems = useMemo(() => {
        const grouped: GroupedItems = {};

        // Initialize categories
        menuCategories.forEach((category) => {
            grouped[category.name] = {
                category,
                subcategories: {},
            };
        });

        // Group items
        allItems.forEach((item) => {
            const subcategory = menuSubCategories.find(
                (sub) => sub.name === item.category
            );
            if (subcategory) {
                const categoryName = subcategory.parentCategory.name;

                if (!grouped[categoryName]) {
                    grouped[categoryName] = {
                        category: subcategory.parentCategory,
                        subcategories: {},
                    };
                }

                if (!grouped[categoryName].subcategories[item.category]) {
                    grouped[categoryName].subcategories[item.category] = {
                        subcategory,
                        items: [],
                    };
                }

                grouped[categoryName].subcategories[item.category].items.push(
                    item
                );
            }
        });

        return grouped;
    }, [allItems]);

    // Flatten grouped items for infinite scroll
    const flattenedItems = useMemo(() => {
        const items: FlattenedItem[] = [];

        Object.entries(groupedItems).forEach(([categoryName, categoryData]) => {
            // Skip "All" category
            if (categoryName === 'All') {
                return;
            }

            items.push({
                type: 'category-header',
                data: categoryData.category,
            });

            Object.entries(categoryData.subcategories).forEach(
                ([, subcategoryData]: [
                    string,
                    { subcategory: MenuSubCategory; items: MenuItemWithId[] },
                ]) => {
                    items.push({
                        type: 'subcategory-header',
                        data: subcategoryData.subcategory,
                    });

                    subcategoryData.items.forEach((item: MenuItemWithId) => {
                        items.push({
                            type: 'item',
                            data: item,
                        });
                    });
                }
            );
        });

        return items;
    }, [groupedItems]);

    // Get visible items
    const visibleItems = flattenedItems.slice(0, visibleCount);
    const hasMore = visibleCount < flattenedItems.length;

    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) =>
                Math.min(prev + ITEMS_PER_PAGE, flattenedItems.length)
            );
            setIsLoading(false);
        }, 100);
    }, [isLoading, hasMore, flattenedItems.length]);

    // Set up intersection observer for auto-loading
    useEffect(() => {
        if (!loadMoreRef.current) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && hasMore && !isLoading) {
                    loadMore();
                }
            },
            {
                root: null,
                rootMargin: '200px',
                threshold: 0.1,
            }
        );

        observerRef.current.observe(loadMoreRef.current);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [hasMore, isLoading, loadMore]);

    const renderContent = (item: FlattenedItem) => {
        switch (item.type) {
            case 'category-header':
                return (
                    <div
                        key={`category-${item.data.name}`}
                        className="col-span-full flex justify-center items-center"
                    >
                        <div className="mt-12 mb-6">
                            <h2 className="wix-madefor-display-bold text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                                {item.data.name}
                            </h2>
                            {item.data.hindiName && (
                                <h3 className="hind-bold text-2xl md:text-3xl font-semibold text-neutral-700">
                                    {item.data.hindiName}
                                </h3>
                            )}
                            <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-4"></div>
                        </div>
                    </div>
                );

            case 'subcategory-header':
                return (
                    <div
                        key={`subcategory-${item.data.name}`}
                        className="col-span-full flex justify-center items-center"
                    >
                        <div className="mt-8 mb-6">
                            <h4 className="ibm-plex-mono-bold text-xl md:text-2xl font-semibold text-neutral-800 mb-2">
                                {item.data.name}
                            </h4>
                            {item.data.hindiName && (
                                <h5 className="hind-regular text-lg md:text-xl text-neutral-600">
                                    {item.data.hindiName}
                                </h5>
                            )}
                            <div className="w-full h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full mt-2"></div>
                        </div>
                    </div>
                );

            case 'item':
                return (
                    <LazyMenuItemCard
                        key={(item.data as MenuItemWithId).id}
                        item={item.data as MenuItemWithId}
                        menuSubCategories={menuSubCategories}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-neutral-100/60 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <MenuHeader
                    title="Complete Menu"
                    subtitle="Explore our full range of authentic culinary offerings"
                />

                {/* Menu Items Grid with Headers */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {visibleItems.map((item) => renderContent(item))}
                </div>

                {/* Load More Trigger */}
                {hasMore && (
                    <div ref={loadMoreRef} className="flex justify-center py-8">
                        {isLoading && (
                            <div className="flex items-center gap-2 text-neutral-600">
                                <div className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin"></div>
                                <span className="text-sm">
                                    Loading more items...
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* End of items indicator */}
                {!hasMore && visibleItems.length > 0 && (
                    <div className="text-center py-8 text-neutral-500 text-sm">
                        Showing complete menu ({allItems.length} items)
                    </div>
                )}

                {/* Contact Info */}
                <MenuContact />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default SingleMenuPreview;
