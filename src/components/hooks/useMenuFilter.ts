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
      // Find subcategory object that matches this item's category name
      const subCategoryObj = menuSubCategories.find(
        (sub) => sub.name === item.category
      );

      // Derive the effective main category for this item:
      // - Prefer the parentCategory of the matching subcategory (when it exists)
      // - Fall back to the item's own category name when there's no subcategory mapping
      const effectiveCategoryName =
        subCategoryObj?.parentCategory.name ?? item.category;

      const matchesCategory =
        selectedCategory === "All" ||
        effectiveCategoryName === selectedCategory;

      // Subcategory filter:
      // - When no subcategory is selected ("All Subcategories"), allow all items
      // - Otherwise, the item's subcategory id must match the selectedSubCategory
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
