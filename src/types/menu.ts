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
  // ? For filtering and grouping
  // ? By subcategory primary category can be easily accessed
  category: MenuSubCategory;
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
};
