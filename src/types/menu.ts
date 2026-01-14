interface MenuItem {
  name: string;
  hindiName?: string;
  imageSrc?: string;
  description?: string;
  hindiDescription?: string;
  category: string;
  popular?: boolean;
  hindiCategory?: string;
}

interface MenuCategoryItem {
  name: string;
  hindiName?: string;
}

interface MenuSubCategoryItem {
  name: string;
  hindiName?: string;
  parentCategory: MenuCategory;
}

interface MenuItemWithId extends MenuItem {
  id: string;
}
interface MenuCategory extends MenuCategoryItem {
  id: string;
}

interface MenuSubCategory extends MenuSubCategoryItem {
  id: string;
}

export type {
  MenuItem,
  MenuCategoryItem,
  MenuSubCategoryItem,
  MenuItemWithId,
  MenuCategory,
  MenuSubCategory,
};
