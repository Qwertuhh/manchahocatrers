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

import { useState } from "react";
import { Search, Star } from "lucide-react";
import Footer from "@/components/footer";
import { menuItemsWithId, menuCategories } from "@/components/menu";
import clsx from "clsx";

function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = menuItemsWithId.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="wix-madefor-display-bold text-5xl font-bold text-stone-800 mb-4">
              Our Menu
            </h1>
            <p className="tangerine-regular text-4xl text-stone-600 mb-8 questrial-regular">
              Discover our authentic flavors and culinary delights
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={clsx(
                    "px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer",
                    selectedCategory === category.name
                      ? "bg-stone-800 text-white"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-50"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="wix-madefor-display-bold text-xl font-semibold text-stone-800">
                      {item.name}
                    </h3>
                    {item.hindiName && (
                      <h4 className="hind-bold text-xl font-semibold text-stone-800">
                        {item.hindiName}
                      </h4>
                    )}
                  </div>

                  <p className="roboto text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <p className="hind-regular text-stone-600 text-sm leading-relaxed">
                    {item.hindiDescription}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-stone-500 pt-2 border-t border-stone-100"></div>

                  <div className="pt-2">
                    <span className="capitalize inline-block bg-stone-100 text-stone-700 px-3 py-1 rounded-md text-sm">
                      {item.category.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 text-lg">
                No menu items found matching your criteria.
              </p>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-16 text-center bg-neutral-800 text-white rounded-md p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
            <p className="mb-6">
              Call us to place your order or inquire about our catering services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919024319241"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-lg hover:bg-stone-100 transition-colors duration-200"
              >
                Call: +91 9024319241
              </a>
              <a
                href="mailto:manchahocatrers@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-stone-700 text-white px-6 py-3 rounded-lg hover:bg-stone-600 transition-colors duration-200"
              >
                Email: manchahocatrers@gmail.com
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
