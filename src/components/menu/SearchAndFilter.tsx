import { Search } from "lucide-react";
import SectionMarker from "../ui/sectionMarker";

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
}

function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchAndFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent"
          />
        </div>
        <a
          href="/menu/print"
          className="text-md ibm-plex-mono-bold text-neutral-800 my-2 md:my-0 not-md:underline"
        >
          Single Page Menu
        </a>
      </div>

      {/* Category Selector (dropdown) */}
      <SectionMarker name="Category" />
      <div className="inline-flex items-center gap-3">
        <label className="ibm-plex-mono-regular text-sm text-neutral-700">
          Select category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            const value = e.target.value;
            onCategoryChange(value);
            // Reset search when switching category to avoid "empty" states
            onSearchChange("");
          }}
          aria-label="Select menu category"
          className="ibm-plex-mono-regular px-3 py-2 rounded-md border border-neutral-300 bg-white text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { SearchAndFilter };
