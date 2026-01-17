import { useMemo } from "react";
import Fuse from "fuse.js";
import type { MenuItemWithId } from "@/types";
import type { MenuSubCategory } from "@/types";

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
    return new Fuse(items, {
      keys: ["name", "description", "hindiName", "hindiDescription"],
      threshold: 0.3,
      includeScore: true,
    });
  }, [items]);

  const filteredItems = useMemo(() => {
    let filteredItems = items;

    // Apply fuzzy search if there's a search term
    if (searchTerm.trim()) {
      const searchResults = fuse.search(searchTerm);
      filteredItems = searchResults.map((result) => result.item);
    }

    // Apply category filter
    return filteredItems.filter((item) => {
      // If "All" is selected, include everything after search filter
      if (selectedCategory === "All") {
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
