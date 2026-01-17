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
interface MenuCategoryItem {
  name: string;
  hindiName?: string;
}

interface MenuSubCategoryItem {
  name: string;
  hindiName?: string;
  parentCategory: MenuCategory;
}

// * Indexing by Id
interface MenuItemWithId extends MenuItem {
  id: string;
}
interface MenuCategory extends MenuCategoryItem {
  id: string;
}

interface MenuSubCategory extends MenuSubCategoryItem {
  id: string;
}


interface MenuItem {
  name: string;
  hindiName?: string;
  imageSrc?: string;
  description?: string;
  hindiDescription?: string;
  // ? For filtering and grouping - using subcategory name as string
  category: string;
  popular?: boolean;
  hindiCategory?: string;
}

export type {
  MenuItem,
  MenuCategoryItem,
  MenuSubCategoryItem,
  MenuItemWithId,
  MenuCategory,
  MenuSubCategory,
}