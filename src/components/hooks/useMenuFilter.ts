import { useMemo } from "react";
import Fuse from "fuse.js";
import type { MenuItemWithId } from "@/types";
import type { MenuSubCategory } from "@/types";

interface UseMenuFilterProps {
  items: MenuItemWithId[];
  searchTerm: string;
  selectedCategory: string;
  selectedSubCategory: string | null;
  menuSubCategories: MenuSubCategory[];
}

interface UseMenuFilterReturn {
  filteredItems: MenuItemWithId[];
}

function useMenuFilter({
  items,
  searchTerm,
  selectedCategory,
  selectedSubCategory,
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

    // Apply category and subcategory filters
    return filteredItems.filter((item) => {
      // Find subcategory object that matches category name
      const subCategoryObj = menuSubCategories.find(
        (sub) => sub.name === item.category
      );
      const parentCategoryName = subCategoryObj?.parentCategory.name;

      const matchesCategory =
        selectedCategory === "All" || parentCategoryName === selectedCategory;
      const matchesSubCategory =
        !selectedSubCategory || subCategoryObj?.id === selectedSubCategory;
      return matchesCategory && matchesSubCategory;
    });
  }, [
    items,
    searchTerm,
    selectedCategory,
    selectedSubCategory,
    menuSubCategories,
    fuse,
  ]);

  return { filteredItems };
}

export { useMenuFilter };