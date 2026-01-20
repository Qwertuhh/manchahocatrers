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

import { Star } from 'lucide-react';
import type { MenuItemWithId } from '@/types';
import type { MenuSubCategory } from '@/types';

/**
 * Props for the MenuItemCard component
 */
interface MenuItemCardProps {
    /** Menu item data to display */
    item: MenuItemWithId;
    /** Array of menu subcategories for category hierarchy lookup */
    menuSubCategories: MenuSubCategory[];
}

/**
 * Card component displaying a single menu item with image, name, description,
 * pricing, and category information. Shows a "Popular" badge for marked items.
 * Supports both English and Hindi text display.
 *
 * @param props - Component props containing menu item and category data
 * @returns JSX element for the menu item card
 *
 * @example
 * ```tsx
 * <MenuItemCard
 *   item={menuItem}
 *   menuSubCategories={subCategories}
 * />
 * ```
 */
function MenuItemCard({ item, menuSubCategories }: MenuItemCardProps) {
    return (
        <div className="bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 relative">
            {item.popular && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Popular
                </div>
            )}

            <div className="space-y-3">
                {item.imageSrc && (
                    <img
                        src={item.imageSrc}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                )}
                <div className="space-y-2">
                    <h3 className="wix-madefor-display-bold text-xl font-semibold text-neutral-800">
                        {item.name}
                    </h3>
                    {item.hindiName && (
                        <h4 className="hind-bold text-xl font-semibold text-neutral-800">
                            {item.hindiName}
                        </h4>
                    )}
                </div>

                <p className="roboto text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                </p>
                <p className="hind-regular text-neutral-600 text-sm leading-relaxed">
                    {item.hindiDescription}
                </p>

                <div className="pt-2 font-mono flex justify-between">
                    <span className="capitalize inline-block bg-neutral-100 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm mr-2">
                        {(() => {
                            const subCategoryObj = menuSubCategories.find(
                                (sub) => sub.name === item.category
                            );
                            return (
                                subCategoryObj?.parentCategory.name || 'Unknown'
                            );
                        })()}
                    </span>
                    <span className="capitalize inline-block bg-neutral-200 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm">
                        {item.category}
                    </span>
                </div>
            </div>
        </div>
    );
}

export { MenuItemCard };
