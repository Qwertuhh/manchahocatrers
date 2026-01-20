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

// * Base interfaces
// ? User can easily enter the details then indexed with Id by computer
/**
 * Base interface for menu category items without ID.
 * Represents the basic structure of a menu category.
 */
interface MenuCategoryItem {
    /** Name of the category in English */
    name: string;
    /** Optional name of the category in Hindi */
    hindiName?: string;
}

/**
 * Base interface for menu subcategory items without ID.
 * Links to a parent category for hierarchical organization.
 */
interface MenuSubCategoryItem {
    /** Name of the subcategory in English */
    name: string;
    /** Optional name of the subcategory in Hindi */
    hindiName?: string;
    /** Reference to the parent category */
    parentCategory: MenuCategory;
}

/**
 * Menu item interface with computer-generated ID.
 * Extends the base MenuItem with an identifier for database/storage purposes.
 */
interface MenuItemWithId extends MenuItem {
    /** Unique identifier for the menu item */
    id: string;
}

/**
 * Menu category interface with ID.
 * Represents a complete category with unique identifier.
 */
interface MenuCategory extends MenuCategoryItem {
    /** Unique identifier for the category */
    id: string;
}

/**
 * Menu subcategory interface with ID.
 * Represents a complete subcategory with unique identifier and parent reference.
 */
interface MenuSubCategory extends MenuSubCategoryItem {
    /** Unique identifier for the subcategory */
    id: string;
}

/**
 * Base interface for menu items.
 * Contains all essential information about a menu item including
 * bilingual support, images, descriptions, and categorization.
 */
interface MenuItem {
    /** Name of the menu item in English */
    name: string;
    /** Optional name of the menu item in Hindi */
    hindiName?: string;
    /** Optional image source URL for the menu item */
    imageSrc?: string;
    /** Optional description of the menu item in English */
    description?: string;
    /** Optional description of the menu item in Hindi */
    hindiDescription?: string;
    /** Category name used for filtering and grouping (subcategory name) */
    category: string;
    /** Optional flag indicating if the item is popular/featured */
    popular?: boolean;
    /** Optional category name in Hindi */
    hindiCategory?: string;
}

export type {
    MenuItem,
    MenuCategoryItem,
    MenuSubCategoryItem,
    MenuItemWithId,
    MenuCategory,
    MenuSubCategory,
};
