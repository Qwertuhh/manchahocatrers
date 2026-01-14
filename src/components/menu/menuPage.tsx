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

import { useState, useMemo } from "react";
import { Search, Star } from "lucide-react";
import Footer from "@/components/footer";
import {
  menuItemsWithId,
  menuCategories,
  menuSubCategories,
} from "@/components/menu";
import type { MenuSubCategory } from "@/types";
import clsx from "clsx";
import SectionMarker from "../ui/sectionMarker";

// Custom fuzzy search function for better Hindi text matching
const fuzzySearch = (text: string, query: string): boolean => {
  if (!query) return true;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  // Exact match
  if (lowerText.includes(lowerQuery)) return true;

  // Fuzzy match - check if all characters from query exist in text in order
  let textIndex = 0;
  let queryIndex = 0;

  while (textIndex < lowerText.length && queryIndex < lowerQuery.length) {
    if (lowerText[textIndex] === lowerQuery[queryIndex]) {
      queryIndex++;
    }
    textIndex++;
  }

  return queryIndex === lowerQuery.length;
};

function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  // Get subcategories for the selected main category
  const getSubCategoriesForCategory = (
    categoryName: string
  ): MenuSubCategory[] => {
    if (categoryName === "All") return [];
    return menuSubCategories.filter(
      (sub) => sub.parentCategory.name === categoryName
    );
  };

  const availableSubCategories = getSubCategoriesForCategory(selectedCategory);

  const filteredItems = useMemo(() => {
    return menuItemsWithId.filter((item) => {
      const matchesSearch =
        fuzzySearch(item.name, searchTerm) ||
        fuzzySearch(item.description || "", searchTerm) ||
        fuzzySearch(item.hindiName || "", searchTerm) ||
        fuzzySearch(item.hindiDescription || "", searchTerm);
      const matchesCategory =
        selectedCategory === "All" ||
        item.category.parentCategory.name === selectedCategory;
      const matchesSubCategory =
        !selectedSubCategory || item.category.id === selectedSubCategory;
      return matchesSearch && matchesCategory && matchesSubCategory;
    });
  }, [searchTerm, selectedCategory, selectedSubCategory]);

  return (
    <>
      <div className="min-h-screen bg-neutral-100/60 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="wix-madefor-display-bold text-5xl font-bold text-neutral-800 mb-4">
              Our Menu
            </h1>
            <p className="tangerine-regular text-4xl md:text-6xl text-neutral-600 my-8 questrial-regular">
              Discover our authentic flavors and culinary delights
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <SectionMarker name="Categories" />
            <div className="flex flex-wrap justify-left gap-2">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setSelectedSubCategory(null); // Reset subcategory when main category changes
                  }}
                  className={clsx(
                    "ibm-plex-mono-bold px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer",
                    selectedCategory === category.name
                      ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                      : "bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-50"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Subcategory Filter */}
            {availableSubCategories.length > 0 && (
              <>
                <SectionMarker name="Subcategories" />
                <div className="flex flex-wrap justify-item gap-2 mt-4">
                  <button
                    onClick={() => setSelectedSubCategory(null)}
                    className={clsx(
                      "ibm-plex-mono-regular px-3 py-1 rounded-md text-sm transition-colors duration-200 cursor-pointer",
                      !selectedSubCategory
                        ? "bg-neutral-700 hover:bg-neutral-800 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-700/40"
                    )}
                  >
                    All Subcategories
                  </button>
                  {availableSubCategories.map((subCategory) => (
                    <button
                      key={subCategory.id}
                      onClick={() => setSelectedSubCategory(subCategory.id)}
                      className={clsx(
                        "px-3 py-1 rounded-md text-sm transition-colors duration-200 cursor-pointer",
                        selectedSubCategory === subCategory.id
                          ? "bg-neutral-600 text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-500/40"
                      )}
                    >
                      {subCategory.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 border-t border-neutral-300 pt-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 relative"
              >
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

                  <div className="flex items-center gap-4 text-sm text-neutral-500 pt-2 border-t border-neutral-200"></div>

                  <div className="pt-2 font-mono flex justify-between">
                    <span className="capitalize inline-block bg-neutral-100 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm mr-2">
                      {item.category.parentCategory.name}
                    </span>
                    <span className="capitalize inline-block bg-neutral-200 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm">
                      {item.category.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center pb-16 pt-12 border-b border-neutral-300">
              <p className="font-mono text-neutral-500 text-lg">
                No menu items found matching your criteria.
              </p>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-16 text-center bg-neutral-800 text-white rounded-md p-8 flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-8">
            <div className="text-left">
              <h2 className="wix-madefor-display-bold text-2xl font-bold mb-4">
                Ready to Order?
              </h2>
              <p className="noto-serif-regular mb-6">
                Call us to place your order or inquire about our catering
                services
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="tel:+919024319241"
                className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                <span className="ibm-plex-mono-bold">Call</span> +91 9024319241
              </a>
              <a
                href="mailto:manchahocatrers@gmail.com"
                className="inline-flex items-center font-mono justify-left gap-2 bg-neutral-50 text-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                <span className="ibm-plex-mono-bold">Email</span>{" "}
                manchahocatrers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { MenuPage };
