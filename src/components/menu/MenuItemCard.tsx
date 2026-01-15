import { Star } from "lucide-react";
import type { MenuItemWithId } from "@/types";
import type { MenuSubCategory } from "@/types";

interface MenuItemCardProps {
  item: MenuItemWithId;
  menuSubCategories: MenuSubCategory[];
}

function MenuItemCard({
  item,
  menuSubCategories,
}: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 relative">
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

        <div className="pt-2 font-mono flex justify-between">
          <span className="capitalize inline-block bg-neutral-100 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm mr-2">
            {(() => {
              const subCategoryObj = menuSubCategories.find(
                (sub) => sub.name === item.category
              );
              return subCategoryObj?.parentCategory.name || "Unknown";
            })()}
          </span>
          <span className="capitalize inline-block bg-neutral-200 text-neutral-700 px-3 my-1 py-1 rounded-md text-sm">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export { MenuItemCard };
