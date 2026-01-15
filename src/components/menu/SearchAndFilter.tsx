import { Search } from "lucide-react";
import clsx from "clsx";
import SectionMarker from "../ui/sectionMarker";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSubCategory: string | null;
  onSubCategoryChange: (subCategory: string | null) => void;
  categories: Array<{ id: string; name: string }>;
  availableSubCategories: Array<{ id: string; name: string }>;
}

function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedSubCategory,
  onSubCategoryChange,
  categories,
  availableSubCategories,
}: SearchAndFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
        />
      </div>

      {/* Category Filter */}

      <SectionMarker name="Categories" />
      <div className="flex flex-wrap justify-left gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              onCategoryChange(category.name);
              onSubCategoryChange(null); // Reset subcategory when main category changes
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
      {
        availableSubCategories.length > 0 && (
          <SectionMarker name="Subcategories" />
        )
      }
      {availableSubCategories.length > 0 && (
        <div className="flex flex-wrap justify-item gap-2 mt-4">
          <button
            onClick={() => onSubCategoryChange(null)}
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
              onClick={() => onSubCategoryChange(subCategory.id)}
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
      )}
    </div>
  );
}

export { SearchAndFilter };