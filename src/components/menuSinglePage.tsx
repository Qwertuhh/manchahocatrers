import { useMemo } from "react";
import { Star } from "lucide-react";
import { menuItemsWithId, menuSubCategories } from "./menu/menuItems";

function MenuSinglePage() {
  const groupedMenu = useMemo(() => {
    const subCategoryByName = new Map(
      menuSubCategories.map((subCategory) => [subCategory.name, subCategory])
    );

    const categories: Record<
      string,
      {
        categoryName: string;
        categoryHindiName?: string;
        subcategories: Record<
          string,
          {
            subcategoryName: string;
            subcategoryHindiName?: string;
            items: typeof menuItemsWithId;
          }
        >;
      }
    > = {};

    menuItemsWithId.forEach((item) => {
      const subCategory = subCategoryByName.get(item.category);
      const parentCategory = subCategory?.parentCategory;

      const categoryName = parentCategory?.name ?? "Other";
      const categoryHindiName = parentCategory?.hindiName;

      if (!categories[categoryName]) {
        categories[categoryName] = {
          categoryName,
          categoryHindiName,
          subcategories: {},
        };
      }

      const subKey = subCategory?.name ?? item.category;
      const subHindi = subCategory?.hindiName ?? item.hindiCategory;

      if (!categories[categoryName].subcategories[subKey]) {
        categories[categoryName].subcategories[subKey] = {
          subcategoryName: subKey,
          subcategoryHindiName: subHindi,
          items: [],
        };
      }

      categories[categoryName].subcategories[subKey].items.push(item);
    });

    return Object.values(categories).map((category) => ({
      ...category,
      subcategories: Object.values(category.subcategories),
    }));
  }, []);

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        {groupedMenu.map((category) => (
          <div key={category.categoryName} className="space-y-4">
            <div className= "p-3 bg-neutral-800 rounded-md flex flex-row gap-1 justify-between px-4 items-center">
              <h2 className="wix-madefor-display-semibold text-xl font-semibold tracking-tight text-neutral-50">
                {category.categoryName}
              </h2>
              {category.categoryHindiName && (
                <p className="hind-regular text-xl text-neutral-50">
                  {category.categoryHindiName}
                </p>
              )}
            </div>

            {category.subcategories.map((subCategory) => (
              <div key={subCategory.subcategoryName} className="space-y-3 my-12 border-2 rounded-md border-neutral-800">
                <div className="flex flex-col gap-1 w-fit justify-center items-center mx-auto rounded-bl-md rounded-br-md border-r-2 border-l-2 border-b-2 border-neutral-800">
                  <h3 className="wix-madefor-display-semibold text-lg mx-4 font-semibold tracking-tight w-fit text-neutral-800">
                    {subCategory.subcategoryName}
                  </h3>
                  {subCategory.subcategoryHindiName && (
                    <p className="hind-semibold text-sm text-neutral-700 w-fit">
                      {subCategory.subcategoryHindiName}
                    </p>
                  )}
                </div>

                <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
                  {subCategory.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between border border-neutral-600 bg-white p-4 transition"
                    >
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          loading="lazy"
                          className="my-1 rounded-sm"
                        />
                      )}
                      <div>
                        <div className="flex flex-row items-center justify-between">
                          <h4 className="wix-madefor-display-semibold text-base font-semibold tracking-tight sm:text-lg">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="rounded-full bg-amber-100 font-semibold uppercase tracking-wide text-amber-800">
                              <Star className="m-2 inline h-4 w-4" />
                            </span>
                          )}
                        </div>

                        {item.hindiName && (
                          <p className="hind-regular mt-1 text-sm text-neutral-700">
                            {item.hindiName}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                        <span className="wix-madefor-display-semibold rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide">
                          {item.category}
                        </span>
                        {item.hindiCategory && (
                          <span className="hind-semibold rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium tracking-wide">
                            {item.hindiCategory}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSinglePage;
